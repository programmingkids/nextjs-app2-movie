import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PiPlaylistBold } from "react-icons/pi";
import { MdOutlineAdd } from "react-icons/md";
import { type VideoListPageProps } from "@/types/page";
import { type BreadcrumbList } from "@/types/index";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { getAuth } from "@/hooks/auth/server";
import { getPlaylistById } from "@/db/playlist";
import { getVideosByPlaylistId } from "@/db/video";
import { Table } from "@/components/video/table";

export const metadata: Metadata = {
  title: "Playlist",
};

export default async function Page({ params }: VideoListPageProps) {
  // /voide/[playlistId]
  const { playlistId: id } = await params;
  // 型変換
  const playlistId = parseInt(id as string, 10);

  const {
    user: { id: userId },
  } = await getAuth();

  // ユーザIDとプレイリストIDで取得
  const result = await getPlaylistById(playlistId, userId);
  if (!result.success) {
    // 存在しない場合、NotFoundにする
    notFound();
  }

  // プレイリストIDで一覧データを取得
  const list = await getVideosByPlaylistId(playlistId);

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
      current: false,
      home: false,
    },
    {
      title: "Videolist",
      href: `/video/${playlistId}`,
      current: true,
      home: false,
    },
  ];

  return (
    <>
      <h1 className="mb-4 p-4 text-center bg-orange-500 text-white text-lg">
        <PiPlaylistBold className="inline align-bottom mr-2 text-2xl" />
        Video List
      </h1>
      <div className="my-4 px-6">
        <Breadcrumb {...{ bcList }} />
      </div>
      <div className="py-4 px-6">
        <Table {...{ list }} />
      </div>
      <div className="fixed bottom-20 right-10 z-20">
        <Link href={`/video/${playlistId}/create`}>
          <div className="inline-flex items-center justify-center w-16 h-16 text-3xl text-gray-100 bg-blue-500 rounded-full focus:shadow-outline hover:bg-blue-800 cursor-pointer">
            <MdOutlineAdd />
          </div>
        </Link>
      </div>
    </>
  );
}
