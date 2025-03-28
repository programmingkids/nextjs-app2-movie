import Link from "next/link";
import { HiPencil } from "react-icons/hi2";
import { PiPlaylistBold } from "react-icons/pi";
import { FaCirclePlay } from "react-icons/fa6";
import { type Playlist } from "@/db/prisma/generated/zod/index";
import { type PlaylisetTableProps } from "@/types/index";
import { Delete } from "@/components/playlist/delete";

export function Table({ list }: PlaylisetTableProps) {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-left">
        <TableHead />
        <tbody>
          {list.map((e: Playlist) => (
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
        <th className="p-3">NAME</th>
        <th className="p-3">ACTION</th>
      </tr>
    </thead>
  );
}

function TableRow({ id, name }: Playlist) {
  return (
    <tr className="odd:bg-white even:bg-orange-100 border-b">
      <td className="p-3">{id}</td>
      <td className="p-3">{name}</td>
      <td className="p-3 flex justify-start gap-4">
        <Link
          href={`/playlist/${id}/edit`}
          className="text-lg text-blue-500 hover:text-blue-800"
        >
          <HiPencil />
        </Link>
        <Link
          href={`/video/${id}`}
          className="text-lg text-blue-500 hover:text-blue-800"
        >
          <PiPlaylistBold />
        </Link>
        <Link
          href={`/watchlist/${id}`}
          className="text-lg text-blue-500 hover:text-blue-800"
        >
          <FaCirclePlay />
        </Link>
        <Delete {...{ id, title: name }} />
      </td>
    </tr>
  );
}
