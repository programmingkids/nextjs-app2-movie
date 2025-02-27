import { useRef, useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { type YoutubePlayerProps } from "@/types/index";

let player: { getCurrentTime: () => any };
let loadYtIframeAPI: Promise<any>;

export function YoutubePlayer({
  videoList,
  currentPlay,
  setCurrentPlay,
}: YoutubePlayerProps) {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [playLabel, setPlayLabel] = useState(<FaPlay />);

  useEffect(() => {
    loadYtPlayer();
  }, []);

  useEffect(() => {
    if (player) {
      player.currentPlay = currentPlay;
      updatePlayer(currentPlay);
    }
  }, [currentPlay]);

  const loadYtPlayer = () => {
    if (!loadYtIframeAPI) {
      loadYtIframeAPI = new Promise((resolve) => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        (window as any).onYouTubeIframeAPIReady = () =>
          resolve((window as any).YT);
      });
    }

    if (videoRef?.current) {
      loadYtIframeAPI.then((YT: any) => {
        player = new YT.Player(videoRef.current, {
          videoId: videoList[currentPlay].videoId,
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
        player.currentPlay = currentPlay;
      });
    }
  };

  const onPlayerReady = (event: any) => {
    // YoutubePlayerVideo
  };

  const onPlayerStateChange = (newState: { data: number }) => {
    if (newState.data == 1) {
      // Video Playing
      setPlayLabel(<FaPause />);
    } else if (newState.data == 0) {
      // Video Finished
      const newIndex = (player.currentPlay + 1) % videoList.length;
      updateCurrentPlay(newIndex);
    } else if (newState.data == 2) {
      // Video Paused
      setPlayLabel(<FaPlay />);
    }
  };

  function handleClickPlay() {
    if (!player) {
      return;
    }
    if (player.getPlayerState() === 1) {
      player.pauseVideo();
      const label = <FaPlay />;
      setPlayLabel(label);
    } else {
      player.playVideo();
      const label = <FaPause />;
      setPlayLabel(label);
    }
  }

  function handleClickSeekTo(sec: number) {
    if (!player) {
      return;
    }
    const currentTime = player.getCurrentTime();
    player.seekTo(currentTime + sec);
  }

  function handledClickPrev() {
    const newIndex =
      currentPlay - 1 < 0
        ? videoList.length - 1
        : (currentPlay - 1) % videoList.length;
    updateCurrentPlay(newIndex);
  }

  function handledClickNext() {
    const newIndex = (currentPlay + 1) % videoList.length;
    updateCurrentPlay(newIndex);
  }

  function updateCurrentPlay(newIndex: number) {
    setCurrentPlay(newIndex);
  }

  function updatePlayer(newIndex: number) {
    player.loadVideoById(videoList[newIndex].videoId, 0);
  }

  return (
    <div className="aspect-video">
      <div
        id="player"
        ref={videoRef}
        className="w-full h-full rounded-xl"
      ></div>
      <div className="py-2 text-4xl lg:text-2xl font-bold">
        {videoList[currentPlay].title}
      </div>
      <div className="p-5">
        <div className="flex justify-center gap-0">
          <button
            type="button"
            className="px-4 py-2 text-blue-700 text-xs font-medium text-center border border-blue-400 bg-white rounded-l-lg hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-800 focus:text-white"
            onClick={handledClickPrev}
          >
            <FaAnglesLeft className="inline mr-1" />
            <span className="align-middle">prev</span>
          </button>
          <button
            type="button"
            className="px-4 py-2 text-blue-700 text-xs font-medium text-center border-y border-r border-blue-400 bg-white hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-800 focus:text-white"
            onClick={() => handleClickSeekTo(-60)}
          >
            <FaAngleLeft className="inline mr-1" />
            <span className="align-middle">1m</span>
          </button>
          <button
            type="button"
            className="px-4 py-1 text-blue-700 text-xs font-medium text-center border-y border-blue-400 bg-white hover:bg-blue-400 hover:bg-blue-800 hover:text-white focus:outline-none focus:bg-blue-800 focus:text-white"
            onClick={() => handleClickSeekTo(-10)}
          >
            <FaAngleLeft className="inline mr-1" />
            <span className="align-middle">10s</span>
          </button>
          <button
            type="button"
            className="px-8 py-1 text-blue-700 text-xs font-medium text-center border border-blue-400 bg-white hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-800 focus:text-white"
            onClick={handleClickPlay}
          >
            {playLabel}
          </button>
          <button
            type="button"
            className="px-4 py-1 text-blue-700 text-xs font-medium text-center border-y border-blue-400 bg-white hover:bg-blue-400 hover:text-whie focus:outline-none focus:bg-blue-800 focus:text-white"
            onClick={() => handleClickSeekTo(10)}
          >
            <span className="align-middle">10s</span>
            <FaAngleRight className="inline ml-1" />
          </button>
          <button
            type="button"
            className="px-4 py-1 text-blue-700 text-xs font-medium text-center border-y border-l border-blue-400 bg-white hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-800 focus:text-white"
            onClick={() => handleClickSeekTo(60)}
          >
            <span className="align-middle">1m</span>
            <FaAngleRight className="inline ml-1" />
          </button>
          <button
            type="button"
            className="px-4 py-1 text-blue-700 text-xs font-medium text-center border border-blue-400 bg-white rounded-r-lg hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-800 focus:text-white"
            onClick={handledClickNext}
          >
            <span className="align-middle">next</span>
            <FaAnglesRight className="inline ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
