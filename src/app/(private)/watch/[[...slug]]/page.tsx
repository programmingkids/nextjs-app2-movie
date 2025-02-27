import { type Metadata } from "next";
import { type SearchPageProps } from "@/types/page";
import { type YoutubePlayerVideoList } from "@/types/index";
import { YoutubePlayerController } from "@/components/youtube/youtubePlayerController";

import { MdSearch } from "react-icons/md";
import { getMovieByVideoId, getMovieByKeyword } from "@/lib/youtube";

import { MoviePlayer } from "@/components/youtube/moviePlayer";

export const metadata: Metadata = {
  title: "Watch",
};

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

export default async function Page(props: SearchPageProps) {
  // /watch/{videoId}

  const params = await props.params;
  const [videoId = ""] = params.slug || [];

  // APIで検索
  const { items } = await getMovieByVideoId(videoId);

  if( items.length > 0 ) {
    const { items : hoge } = await getMovieByKeyword(items[0][]);
    
  }

  return (
    <div className="text-center">
      <h1 className="p-4 mb-4 text-center text-2xl font-semibold">{videoId}</h1>
    </div>
  );

  //return <MoviePlayer />;
  //return <YoutubePlayerController {...{ videoList }} />;
}
