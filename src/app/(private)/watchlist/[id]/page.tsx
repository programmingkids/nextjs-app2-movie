import { type Metadata } from "next";
import { type WatchlistPageProps } from "@/types/page";
import { getVideosByPlaylistId } from "@/db/video";
import { YoutubePlayerController } from "@/components/youtube/youtubePlayerController";

export const metadata: Metadata = {
  title: "Watch Playlist",
};

export default async function Page({ params }: WatchlistPageProps) {
  // /watchlist/[id]
  const { id } = await params;

  // 型変換
  const playlistId = parseInt(id as string, 10);

  const videoList = await getVideosByPlaylistId(playlistId);
  //console.log(videoList);

  return (
    <>
      {id == "" ? (
        <div className="text-center pt-20 text-lg font-bold">
          プレイリストIDを入力してください
        </div>
      ) : videoList.length <= 0 ? (
        <div className="text-center pt-20 text-lg font-bold">
          プレイリストにビデオが登録されていません
        </div>
      ) : (
        <YoutubePlayerController {...{ videoList }} />
      )}
    </>
  );
}
