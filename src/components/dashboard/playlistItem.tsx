import Link from "next/link";
import { IoIosTimer } from "react-icons/io";
import { RiMovieFill } from "react-icons/ri";
import { type PlaylisetItemProps } from "@/types/index";
import { MyImage } from "@/components/common/myImage";

export function PlaylistItem({ item }: PlaylisetItemProps) {
  // 先頭の動画を取り出す
  const firstVideo = item.video[0];
  const videoId = firstVideo.videoId;
  // 先頭の動画の画像用URL
  const imageUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  return (
    <Link href={`/watchlist/${item.id}`} className="relative">
      <div className="min-h-[280px] pb-2">
        <MyImage
          src={imageUrl}
          alt={`thumbname ${item.id}`}
          className="rounded-xl w-full mx-auto"
          errorClassName="border border-2 border-gray-400 max-w-[320px] max-h-[180px]"
          width={320}
          height={180}
        />
        <div className="pt-2 pl-2">
          <h5 className="mb-2text-left text-xl font-bold tracking-tight text-gray-900 line-clamp-2">
            {item.name}
          </h5>
          <p className="mb-1 text-left font-normal text-gray-700">
            <RiMovieFill className="inline-block mr-2 text-xl" />
            <span className="align-middle">{item.video.length}件の動画</span>
          </p>
          <p className="text-left font-normal text-gray-700">
            <IoIosTimer className="inline-block mr-2 text-xl" />
            <span className="align-middle">
              {new Date(item.createdAt).toLocaleString("ja-JP")}
            </span>
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full rounded-xl hover:bg-gray-400/20"></div>
    </Link>
  );
}
