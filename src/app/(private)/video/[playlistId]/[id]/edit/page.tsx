import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { PiPlaylistBold } from "react-icons/pi";
import { type VideoEditPageProps } from "@/types/page";
import { type BreadcrumbList } from "@/types/index";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { getPlaylistById } from "@/db/playlist";
import { getVideoById } from "@/db/video";
import { VideoEditForm } from "@/components/video/edtForm";
import { getAuth } from "@/hooks/auth/server";

export const metadata: Metadata = {
  title: "Video Edit",
};

export default async function Page({ params }: VideoEditPageProps) {
  // /playlist/[playlistId]/[id]/edit
  const { playlistId: pIdT, id: idT } = await params;
  // 型変換
  const playlistId = parseInt(pIdT as string, 10);
  const id = parseInt(idT as string, 10);

  const {
    user: { id: userId },
  } = await getAuth();

  // ユーザIDとプレイリストIDで取得
  const playlistResult = await getPlaylistById(playlistId, userId);
  if (!playlistResult.success) {
    // 存在しない場合、NotFoundにする
    notFound();
  }

  // 編集対象のデータを取得
  const result = await getVideoById(id);
  if (!result.success) {
    // 存在しない場合、NotFoundにする
    notFound();
  }

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
      current: false,
      home: false,
    },
    {
      title: "Edit",
      href: `/video/${playlistId}/${id}/edit`,
      current: true,
      home: false,
    },
  ];

  return (
    <>
      <h1 className="mb-4 p-4 text-center bg-orange-500 text-white text-lg">
        <PiPlaylistBold className="inline align-bottom mr-2 text-2xl" />
        Video Edit
      </h1>
      <div className="my-4 px-6">
        <Breadcrumb {...{ bcList }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 px-6 text-start">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 col-start-1 md:col-start-2 lg:col-start-2 col-span-1 md:col-span-3 lg:col-span-1">
          <VideoEditForm {...{ defaultValues: result.data }} />
        </div>
      </div>
    </>
  );
}
