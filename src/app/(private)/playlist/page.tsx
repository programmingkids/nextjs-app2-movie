import { type Metadata } from "next";
import Link from "next/link";
import { MdOutlineAdd } from "react-icons/md";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { getPlaylists } from "@/db/playlist";
import { Table } from "@/components/playlist/table";

export const metadata: Metadata = {
  title: "Playlist",
};

export default async function Page() {
  // 一覧データを取得
  const list = await getPlaylists();

  return (
    <>
      <h1 className="mb-4 p-4 text-center bg-orange-500 text-white text-lg">
        <HiMiniAcademicCap className="inline align-bottom mr-2 text-2xl" />
        Playlist
      </h1>
      <div className="py-4 px-6">
        <Table {...{ list }} />
      </div>
      <div className="fixed bottom-20 right-10 z-20">
        <Link href="/playlist/create">
          <div className="inline-flex items-center justify-center w-16 h-16 text-3xl text-gray-100 bg-blue-500 rounded-full focus:shadow-outline hover:bg-blue-800 cursor-pointer">
            <MdOutlineAdd />
          </div>
        </Link>
      </div>
    </>
  );
}
