import Link from "next/link";
import { HiPencil } from "react-icons/hi2";
import { type Video } from "@/db/prisma/generated/zod/index";
import { Delete } from "@/components/video/delete";

type Props = {
  list: Video[];
};

export function Table({ list }: Props) {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-left">
        <TableHead />
        <tbody>
          {list.map((e: Video) => (
            <TableRow key={e.id} {...e} />
          ))}
        </tbody>
      </table>
    </div>
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

function TableRow({ id, title, videoId, seq, playlistId }: Video) {
  return (
    <tr className="odd:bg-white even:bg-orange-100 border-b">
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
