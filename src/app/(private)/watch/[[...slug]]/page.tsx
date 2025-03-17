import { type Metadata } from "next";
import { type SearchPageProps } from "@/types/page";
import {
  type YoutubeVideoById,
  type YoutubeVideoItem,
  type YoutubePlayerVideo,
  type YoutubePlayerVideoList,
} from "@/types/index";
import { getMovieByVideoId, getMovieByKeyword } from "@/lib/youtube";
import { YoutubePlayerController } from "@/components/youtube/youtubePlayerController";
import { videoList } from "@/config/dammyVideoList";

export const metadata: Metadata = {
  title: "Watch",
};

export default async function Page({ params }: SearchPageProps) {
  // /watch/{videoId}
  const { slug } = await params;
  const [videoId = ""] = slug || [];
  /*
  // VideoIdでAPI検索
  const { items } = await getMovieByVideoId(videoId);
  //console.dir(items, { depth: null });

  // videoIdとkeywordを抽出
  const mainItem =
    items.length > 0
      ? {
          videoId: items[0]["id"],
          keyword:
            items[0]["snippet"]["tags"]?.length > 0
              ? items[0]["snippet"]["tags"].join("%7C")
              : items[0]["snippet"]["title"],
        }
      : { videoId: "", keyword: "" };

  // mainItemのkeywordで関連動画をキーワードAPI検索
  const { items: relatedItems } = await getMovieByKeyword(
    mainItem["keyword"].substring(0, 30),
    10,
  );

  // メイン動画と関連動画を結合
  const videoList: YoutubePlayerVideoList = [
    ...items.map((v: YoutubeVideoById) => ({
      videoId: v.id,
      title: v.snippet.title,
    })),
    ...relatedItems
      .map((v: YoutubeVideoItem) => ({
        videoId: v.id.videoId,
        title: v.snippet.title,
      }))
      .filter((v: YoutubePlayerVideo) => v.videoId !== mainItem["videoId"]),
  ];
  //console.log(videoList);
  */

  return (
    <>
      {videoId == "" ? (
        <div className="text-center pt-20 text-lg font-bold">
          動画IDを入力してください
        </div>
      ) : videoList.length <= 0 ? (
        <div className="text-center pt-20 text-lg font-bold">
          検索結果が見つかりません
        </div>
      ) : (
        <YoutubePlayerController {...{ videoList }} />
      )}
    </>
  );
}
