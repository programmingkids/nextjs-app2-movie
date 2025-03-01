import { type Metadata } from "next";
import { MdSearch } from "react-icons/md";
import { type SearchPageProps } from "@/types/page";
import { getMovieByKeyword } from "@/lib/youtube";
import { MovieList } from "@/components/youtube/movieList";

export const metadata: Metadata = {
  title: "Search",
};

export default async function Page(props: SearchPageProps) {
  // /seach/{keyword}
  const params = await props.params;
  const [q = ""] = params.slug || [];
  const keyword = decodeURIComponent(q);

  // APIで検索
  const { items, totalResults } = await getMovieByKeyword(keyword);

  return (
    <div className="text-center">
      <h1 className="mb-4 p-4 bg-violet-400 text-white text-2xl">
        <MdSearch className="inline align-bottom mr-2 text-2xl" />
        Search: {keyword}
      </h1>
      {keyword == "" ? (
        <div className="m-4">検索語を入力してください</div>
      ) : totalResults <= 0 ? (
        <div className="m-4">検索結果が見つかりません</div>
      ) : (
        <MovieList {...{ items }} />
      )}
    </div>
  );
}
