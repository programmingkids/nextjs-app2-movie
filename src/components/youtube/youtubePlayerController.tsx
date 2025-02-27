"use client";

import { useState } from "react";
import { type YoutubePlayerControllerProps } from "@/types/index";
import { YoutubePlayer } from "@/components/youtube/youtubePlayer";
import { YoutubePlayerRelatedVideo } from "@/components/youtube/youtubePlayerRelatedVideo";

export function YoutubePlayerController({
  videoList,
}: YoutubePlayerControllerProps) {
  const [currentPlay, setCurrentPlay] = useState(0);

  return (
    <div className="p-5 w-full">
      <div className="flex flex-wrap mx-auto justify-around">
        <div className="w-full lg:w-[calc(100%-450px)]">
          <YoutubePlayer {...{ currentPlay, setCurrentPlay, videoList }} />
        </div>
        <div className="w-full lg:max-w-[400px] pt-4 ml-0 lg:pt-0 lg:ml-10">
          {videoList.map((v, index) => (
            <YoutubePlayerRelatedVideo
              key={v.videoId}
              {...{
                ...v,
                current: currentPlay === index,
                index,
                setCurrentPlay,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
