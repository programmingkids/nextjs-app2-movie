import Image from "next/image";
import { type YoutubePlayerRelatedVideoProps } from "@/types/index";
import { Add } from "@/components/playlist/add";

export function YoutubePlayerRelatedVideo({
  videoId,
  title,
  current,
  index,
  setCurrentPlay,
}: YoutubePlayerRelatedVideoProps) {
  const imageStyle = current
    ? "rounded-xl w-full col-span-3 cursor-pointer border border-[6px] border-red-500"
    : "rounded-xl w-full col-span-3 cursor-pointer border border-[6px] border-white";

  function handleClickToPlay() {
    setCurrentPlay(index);
  }

  return (
    <div className="grid grid-cols-7 gap-3 mb-3">
      <Image
        src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
        width={320}
        height={180}
        alt={`thumbnail ${videoId}`}
        className={imageStyle}
        onClick={handleClickToPlay}
      />
      <div className="text-3xl col-span-3 lg:text-base">
        {title.length > 50 ? title.substring(0, 50) + "..." : title}
      </div>
    </div>
  );
}
