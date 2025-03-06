import { type Metadata } from "next";
import Link from "next/link";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";
import { type BreadcrumbList } from "@/types/index";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { getAuth } from "@/hooks/auth/server";
import { getPlaylistByUserId } from "@/db/playlist";
import { Table } from "@/components/playlist/table";

export const metadata: Metadata = {
  title: "Playlist",
};

const bcList: BreadcrumbList = [
  {
    title: "Dashboard",
    href: "/dashboard",
    current: false,
    home: true,
  },
  {
    title: "Playlist",
    href: "/playlist",
    current: true,
    home: false,
  },
];

export default async function Page() {
  const {
    user: { id: userId },
  } = await getAuth();

  // ユーザIDで一覧データを取得
  const list = await getPlaylistByUserId(userId);

  return (
    <>
      <h1 className="mb-4 p-4 text-center bg-orange-500 text-white text-lg">
        <MdOutlineFeaturedPlayList className="inline align-bottom mr-2 text-2xl" />
        Playlist
      </h1>
      <div className="my-4 px-6">
        <Breadcrumb {...{ bcList }} />
      </div>
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
