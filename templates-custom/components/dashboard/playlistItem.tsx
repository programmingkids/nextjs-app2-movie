"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosTimer } from "react-icons/io";
import { RiMovieFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa6";
import { type PlaylisetItemProps } from "@/types/index";
import { MyImage } from "@/components/common/myImage";

export function PlaylistItem({ item }: PlaylisetItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [date, setDate] = useState<Date>();

  // 先頭の動画を取り出す
  const firstVideo = item.video![0];
  const videoId = firstVideo.videoId;
  // 先頭の動画の画像用URL
  const imageUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(true);
  };

  const handleMouseExit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(false);
  };

  useEffect(() => {
    setDate(item.createdAt);
  }, [item]);

  return (
    <Link
      href={`/watchlist/${item.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      <div className="min-h-[280px] pb-2">
        <div className="relative">
          <MyImage
            src={imageUrl}
            alt={`thumbname ${item.id}`}
            className="rounded-xl w-full mx-auto"
            errorClassName="border border-2 border-gray-400 max-w-[320px] max-h-[180px]"
            width={320}
            height={180}
          />
          <div
            className={`absolute top-0 left-0 h-full w-full rounded-xl flex justify-center items-center ${isHovered ? "bg-gray-300/40" : ""}`}
          >
            {isHovered && <FaPlay className="text-4xl" />}
          </div>
        </div>
        <div className="pt-2 pl-2">
          <h5 className="mb-2text-left text-xl font-bold tracking-tight text-gray-900 line-clamp-2">
            {item.name}
          </h5>
          <p className="mb-1 text-left font-normal text-gray-700">
            <RiMovieFill className="inline-block mr-2 text-xl" />
            <span className="align-middle">{item.video!.length}件の動画</span>
          </p>
          <p className="text-left font-normal text-gray-700">
            <IoIosTimer className="inline-block mr-2 text-xl" />
            <span className="align-middle">
              {date && date.toLocaleString("ja-JP")}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
