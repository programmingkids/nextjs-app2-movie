import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { type PlaylisteEditPageProps } from "@/types/page";
import { type BreadcrumbList } from "@/types/index";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { getAuth } from "@/hooks/auth/server";
import { getPlaylistById } from "@/db/playlist";
import { PlaylistEditForm } from "@/components/playlist/edtForm";

export const metadata: Metadata = {
  title: "プレイリスト | 編集",
};

export default async function Page({ params }: PlaylisteEditPageProps) {
  // /playlist/{id}/edit
  const { id } = await params;
  // 型変換
  const playlistId = parseInt(id as string, 10);

  const {
    user: { id: userId },
  } = await getAuth();

  // 編集対象のデータを取得
  const result = await getPlaylistById(playlistId, userId);
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
      title: "Edit",
      href: `/playlist/${playlistId}edit`,
      current: true,
      home: false,
    },
  ];

  return (
    <>
      <h1 className="mb-4 p-4 text-center bg-orange-500 text-white text-lg">
        <MdOutlineFeaturedPlayList className="inline align-bottom mr-2 text-2xl" />
        Playlist Edit
      </h1>
      <div className="my-4 px-6">
        <Breadcrumb {...{ bcList }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 px-6 text-start">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 col-start-1 md:col-start-2 lg:col-start-2 col-span-1 md:col-span-3 lg:col-span-1">
          <PlaylistEditForm {...{ defaultValues: result.data }} />
        </div>
      </div>
    </>
  );
}
