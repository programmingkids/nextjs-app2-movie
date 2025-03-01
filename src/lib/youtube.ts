//import { GoogleBook, GetBookByIdReturn } from "@/types/index";

// Youtube Data API v3 URL
const APIURL = "https://www.googleapis.com/youtube/v3";
// Youtube Data API v3 APIKEYを環境変数から取得
const APIKEY = process.env.APIKEY;

// YoutubeAPIの検索
export async function getMovieByKeyword(
  keyword: string,
  limit: number = 12,
  pageToken: string = "",
) {
  const errorData = {
    limit,
    nextPageToken: pageToken,
    totalResults: 0,
    items: [],
  };

  // 検索語が空の場合、エラー
  if (!keyword) {
    return errorData;
  }

  // APIに対する通信処理
  const url = `${APIURL}/search?key=${APIKEY}&type=video&part=snippet&q=${keyword}&maxResults=${limit}&pageToken=${pageToken}`;
  //console.log(url);

  const data = await fetch(url);
  const {
    items,
    nextPageToken,
    prevPageToken,
    pageInfo: { totalResults, resultsPerPage },
  } = await data.json();

  // // 検索結果が空の場合、エラー
  if (totalResults <= 0 || !items) {
    return errorData;
  }
  //console.dir(items, { depth: null });

  return {
    items,
    nextPageToken,
    resultsPerPage,
    totalResults,
  };
}

// YoutubeAPIから1件を取得
export async function getMovieByVideoId(videoId: string) {
  const errorData = { items: [] };

  // 検索語が空の場合、エラー
  if (!videoId) {
    return errorData;
  }

  // APIに対する通信処理
  const url = `${APIURL}/videos?key=${APIKEY}&part=id,snippet&id=${videoId}`;
  //console.log(url);

  const data = await fetch(url);
  const { items } = await data.json();
  return { items };
}
