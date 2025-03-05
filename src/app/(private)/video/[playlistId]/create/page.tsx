import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { PiPlaylistBold } from "react-icons/pi";
import { type VideoCreatePageProps } from "@/types/page";
import { getPlaylistById } from "@/db/playlist";
import { VideoCreateForm } from "@/components/video/createForm";
import { getAuth } from "@/hooks/auth/server";

export const metadata: Metadata = {
  title: "Video Create",
};

export default async function Page(props: VideoCreatePageProps) {
  // /voide/[playlistId]/create
  const params = await props.params;
  const id = params.playlistId;
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

  return (
    <>
      <h1 className="mb-4 p-4 text-center bg-orange-500 text-white text-lg">
        <PiPlaylistBold className="inline align-bottom mr-2 text-2xl" />
        Video Create
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 px-6 text-start">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 col-start-1 md:col-start-2 lg:col-start-2 col-span-1 md:col-span-3 lg:col-span-1">
          <VideoCreateForm {...{ defaultValues: { playlistId, seq: 0 } }} />
        </div>
      </div>
    </>
  );
}
