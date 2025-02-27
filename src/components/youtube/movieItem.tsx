import Link from "next/link";
import Image from "next/image";
import { htmlDecode } from "@/lib/functions";
import { type MovieItemProps } from "@/types/page";
//import { type YoutubeVideoItem } from "@/types/index";
//import noimage from "@/assets/image/noimage.png";

//import { MdCalendarMonth } from "react-icons/md";
//import { HiAcademicCap } from "react-icons/hi2";
//import { HiOutlineExternalLink } from "react-icons/hi";
//import { GoogleBook } from "@/types/index";
//import { ButtonLink, IconButtonLink } from "@/components/ui/elements/button";

export function MovieItem({
  item: {
    id: { kind, videoId, channelId },
    snippet: {
      publishedAt,
      channelTitle,
      title,
      thumbnails: {
        high: { url },
      },
    },
  },
}: MovieItemProps) {
  const decodeTitle = htmlDecode(title);
  return (
    <Link
      href={
        kind === "youtube#video" ? `/watch/${videoId}` : `/channel/${channelId}`
      }
    >
      <div className="bg-white min-h-[350px]">
        {kind === "youtube#video" ? (
          <Image
            src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
            width={320}
            height={180}
            alt={`thumbname ${videoId}`}
            className="rounded-xl w-full"
          />
        ) : (
          <Image
            src={url}
            width={320}
            height={180}
            alt={`thumbname ${channelId}`}
            className="rounded-xl mx-auto max-w-[320px] max-h-[180px]"
          />
        )}
        <div className="pt-2">
          <h5 className="mb-2 text-left text-xl font-bold tracking-tight text-gray-900 line-clamp-2">
            {decodeTitle}
          </h5>
          <p className="text-left font-normal text-gray-700">{channelTitle}</p>
          <p className="mb-1 text-left font-normal text-gray-700">
            {new Date(publishedAt).toLocaleString("ja-JP")}
          </p>
        </div>
      </div>
    </Link>
  );
}
