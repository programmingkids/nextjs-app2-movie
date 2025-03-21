import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import {
  FaPlay,
  FaPause,
  FaAnglesRight,
  FaAngleRight,
  FaAnglesLeft,
  FaAngleLeft,
} from "react-icons/fa6";
import { type YoutubePlayerProps } from "@/types/index";
import { Add } from "@/components/playlist/add";

export function YoutubePlayer({
  videoList,
  currentPlay,
  setCurrentPlay,
}: YoutubePlayerProps) {
  const playerRef = useRef<ReactPlayer>(null);
  const [playLabel, setPlayLabel] = useState(<FaPlay />);
  const [playing, setPlaying] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  function handleClickPlay() {
    setPlaying((p) => !p);
  }

  function handleClickSeekTo(sec: number) {
    const player = playerRef.current;
    if (player) {
      const currentSec = player.getCurrentTime() ?? 0;
      player.seekTo(currentSec + sec);
    }
  }

  function handledClickPrev() {
    playPrev();
  }

  function handledClickNext() {
    playNext();
  }

  function playerStart() {
    setPlaying(true);
  }

  function playerPlay() {
    setPlayLabel(<FaPause />);
  }

  function playerPause() {
    setPlayLabel(<FaPlay />);
  }

  function playPrev() {
    const newIndex =
      currentPlay - 1 < 0
        ? videoList.length - 1
        : (currentPlay - 1) % videoList.length;
    setCurrentPlay(newIndex);
  }

  function playNext() {
    const newIndex = (currentPlay + 1) % videoList.length;
    setCurrentPlay(newIndex);
  }

  return (
    <div className="aspect-video">
      {hasWindow && (
        <ReactPlayer
          ref={playerRef}
          url={`https://www.youtube.com/watch?v=${videoList[currentPlay].videoId}`}
          playing={playing}
          controls={true}
          width="100%"
          height="100%"
          className="react-player"
          onStart={playerStart}
          onPlay={playerPlay}
          onPause={playerPause}
          onEnded={playNext}
        />
      )}
      <div className="mt-6 mb-4">
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
            className="px-4 py-1 text-blue-700 text-xs font-medium text-center border-y border-blue-400 bg-white hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-800 focus:text-white"
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
            className="px-4 py-1 text-blue-700 text-xs font-medium text-center border-y border-blue-400 bg-white hover:bg-blue-400 hover:text-white focus:outline-none focus:bg-blue-800 focus:text-white"
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
      <div className="flex justify-between mb-5">
        <div className="text-4xl lg:text-2xl font-bold">
          {videoList[currentPlay].title}
        </div>
        <div>
          <Add {...videoList[currentPlay]} />
        </div>
      </div>
    </div>
  );
}
