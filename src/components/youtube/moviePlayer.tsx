"use client";

import { useSearchParams } from "next/navigation";
import { getMovieByVideoId } from "@/lib/youtube";

// import { type MovieListProps } from "@/types/page";
import { type YoutubeVideoItem } from "@/types/index";
// import { MovieItem } from "@/components/youtube/movieItem";

export function MoviePlayer({ item }: { item: YoutubeVideoItem }) {
  return (
    <div className="p-5 bg-blue-100 w-full">
      <div className="flex flex-wrap mx-auto justify-around">
        <div className="bg-blue-400 w-full lg:w-[calc(100%-450px)]">
          <iframe
            width="960"
            height="540"
            src="https://www.youtube.com/embed/hCySG1Rv-mc?si=rSD9KCvhjP-KX6QL"
            title="YouTube video player"
            frameborder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full"
          ></iframe>
        </div>
        <div className="bg-red-400 w-full lg:max-w-[400px] pt-4 ml-0 lg:pt-0 lg:ml-10">
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
          <div>aaaaa</div>
        </div>
      </div>
    </div>
  );
}
