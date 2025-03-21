import { type MovieListProps } from "@/types/page";
import { type YoutubeVideoItem } from "@/types/index";
import { MovieItem } from "@/components/youtube/movieItem";

export function MovieList({ items }: MovieListProps) {
  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item: YoutubeVideoItem) => (
          <MovieItem key={item.etag} item={item} />
        ))}
      </div>
    </div>
  );
}
