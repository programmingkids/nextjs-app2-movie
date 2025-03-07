"use client";

import { useState, useEffect, useId } from "react";
import Link from "next/link";
import { HiPencil } from "react-icons/hi2";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  MouseSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { type Video } from "@/db/prisma/generated/zod/index";
import { Delete } from "@/components/video/delete";
import { reorderVideoAction } from "@/actions/video";

type Props = {
  list: Video[];
};

export function Table({ list }: Props) {
  const id = useId();
  const [items, setItems] = useState<Video[]>(list);
  const sensors = useSensors(
    //useSensor(PointerSensor),
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    const id = active.id;
    const overId = over?.id;

    if (id === overId) {
      return;
    }
    const oldIndex = items.findIndex((i: Video) => i.id === id);
    const newIndex = items.findIndex((i: Video) => i.id === overId);
    const newItems = arrayMove(items, oldIndex, newIndex).map((e, i) => ({
      ...e,
      seq: i + 1,
    }));
    setItems(newItems);
    await reorderVideoAction(newItems);
  }

  useEffect(() => {
    if (list.length !== items.length) {
      setItems(list);
    }
  }, [list]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      id={id}
    >
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-left">
          <TableHead />
          <tbody>
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {items.map((e: Video) => (
                <SortableTableRow key={e.id} {...e} />
              ))}
            </SortableContext>
          </tbody>
        </table>
      </div>
    </DndContext>
  );
}

function TableHead() {
  return (
    <thead className="text-gray-100 bg-orange-700">
      <tr>
        <th className="p-3">ID</th>
        <th className="p-3">TITLE</th>
        <th className="p-3">VIDEOID</th>
        <th className="p-3">SEQ</th>
        <th className="p-3">ACTION</th>
      </tr>
    </thead>
  );
}

function SortableTableRow({ id, title, videoId, seq, playlistId }: Video) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="odd:bg-white even:bg-orange-100 border-b"
    >
      <td className="p-3">{id}</td>
      <td className="p-3">{title}</td>
      <td className="p-3">{videoId}</td>
      <td className="p-3">{seq}</td>
      <td className="p-3 flex justify-start gap-4">
        <Link
          href={`/video/${playlistId}/${id}/edit`}
          className="text-lg text-blue-500 hover:text-blue-800"
        >
          <HiPencil />
        </Link>
        <Delete {...{ id, title }} />
      </td>
    </tr>
  );
}
