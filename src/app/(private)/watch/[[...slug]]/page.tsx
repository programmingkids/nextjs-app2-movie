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

  if (videoId == "") {
    return (
      <div className="text-center pt-20 text-lg font-bold">
        動画IDを入力してください
      </div>
    );
  }

  // APIで検索
  const { items } = await getMovieByVideoId(videoId);
  const items2: YoutubePlayerVideoList = items.map((v: YoutubeVideoById) => ({
    videoId: v.id,
    title: v.snippet.title,
  }));

  if (items2.length < 0) {
    return (
      <div className="text-center pt-20 text-lg font-bold">
        検索結果が見つかりません
      </div>
    );
  }

  const title = items2[0]["title"] ?? "";
  const mainId = items2[0]["videoId"] ?? "";
  const { items: relatedItems } = await getMovieByKeyword(title, 10);
  const relatedItems2: YoutubePlayerVideoList = relatedItems
    .map((v: YoutubeVideoById) => ({
      videoId: v.id.videoId,
      title: v.snippet.title,
    }))
    .filter((v: string) => v.videoId !== mainId);
  const videoList = items2.concat(relatedItems2);

  return (
    <>
      {videoId == "" ? (
        <div className="m-4">動画IDを入力してください</div>
      ) : items.length <= 0 ? (
        <div className="m-4">検索結果が見つかりません</div>
      ) : (
        <YoutubePlayerController {...{ videoList }} />
      )}
    </>
  );
}
