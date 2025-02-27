import { type Metadata } from "next";
import { type SearchPageProps } from "@/types/page";
import {
  type YoutubeVideoById,
  type YoutubePlayerVideoList,
} from "@/types/index";
import { getMovieByVideoId, getMovieByKeyword } from "@/lib/youtube";
import { YoutubePlayerController } from "@/components/youtube/youtubePlayerController";

export const metadata: Metadata = {
  title: "Watch",
};

/*
const videoList: YoutubePlayerVideoList = [
  {
    title:
      "hoge0, hoge0, hoge0, hoge0, hoge0, hoge0, hoge0, hoge0, hoge0, hoge0, hoge0, hoge0, hoge0, ",
    videoId: "dFf4AgBNR1E",
  },
  {
    title:
      "hoge1, hoge1, hoge1, hoge1, hoge1, hoge1, hoge1, hoge1, hoge1, hoge1, hoge1, hoge1, hoge1, hoge1, hoge1, hoge1, ",
    videoId: "nwHaeAV7WQU",
  },
  {
    title: "hoge2",
    videoId: "tzdhDr4t84I",
  },
  {
    title: "hoge3",
    videoId: "XHdcW2axwMk",
  },
  {
    title: "hoge4",
    videoId: "WdhMjzfg6-k",
  },
];
*/

export default async function Page(props: SearchPageProps) {
  // /watch/{videoId}

  const params = await props.params;
  const [videoId = ""] = params.slug || [];

  // VideoIdでAPI検索
  const { items } = await getMovieByVideoId(videoId);
  // videoIdとtitleを抽出
  const mainItem =
    items.length > 0
      ? { videoId: items[0]["id"], title: items[0]["snippet"]["title"] }
      : { videoId: "", title: "" };

  // titleでキーワード検索
  const { items: relatedItems } = await getMovieByKeyword(
    mainItem["title"],
    10,
  );

  const videoList: YoutubePlayerVideoList = [
    ...items.map((v: YoutubeVideoById) => ({
      videoId: v.id,
      title: v.snippet.title,
    })),
    ...relatedItems
      .map((v: YoutubeVideoById) => ({
        videoId: v.id.videoId,
        title: v.snippet.title,
      }))
      .filter((v: string) => v.videoId !== mainItem["videoId"]),
  ];

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
