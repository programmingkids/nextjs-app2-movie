"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RiMovieFill } from "react-icons/ri";
import { IoIosTimer } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import { type MovieItemProps } from "@/types/page";
import { htmlDecode } from "@/lib/functions";
import { MyImage } from "@/components/common/myImage";

export function MovieItem({
  item: {
    id: { videoId },
    snippet: { publishedAt, channelTitle, title },
  },
}: MovieItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [date, setDate] = useState<Date>();
  const decodeTitle = htmlDecode(title);
  const imageUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(true);
  };

  const handleMouseExit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(false);
  };

  useEffect(() => {
    setDate(new Date(publishedAt));
  }, [publishedAt]);

  return (
    <Link
      href={`/watch/${videoId}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      <div className="bg-white min-h-[350px]">
        <div className="relative">
          <MyImage
            src={imageUrl}
            alt={`thumbnail ${videoId}`}
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
        <div className="pt-2">
          <h5 className="mb-2 text-left text-xl font-bold tracking-tight text-gray-900 line-clamp-2">
            {decodeTitle}
          </h5>
          <p className="text-left font-normal text-gray-700">
            <RiMovieFill className="inline-block mr-2 text-xl" />
            <span className="align-middle">{channelTitle}</span>
          </p>
          <p className="mb-1 text-left font-normal text-gray-700">
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
