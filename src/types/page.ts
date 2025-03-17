import { AuthUser } from "@/types/auth";
import { YoutubeVideoItem } from "@/types/index";

export type GlobalErrorProps = {
  error: Error;
  reset: () => void;
};

export type PageProps = {
  children: React.ReactNode;
};

export type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type AuthUserProviderProps = Readonly<{
  children: React.ReactNode;
  authUser: AuthUser;
}>;

export type SearchPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export type MovieListProps = {
  items: YoutubeVideoItem[];
};

export type MovieItemProps = {
  item: YoutubeVideoItem;
};

export type PlaylisteEditPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export type VideoListPageProps = {
  params: Promise<{
    playlistId: string;
  }>;
};

export type VideoCreatePageProps = {
  params: Promise<{
    playlistId: string;
  }>;
};

export type VideoEditPageProps = {
  params: Promise<{
    playlistId: string;
    id: string;
  }>;
};

export type WatchlistPageProps = {
  params: Promise<{
    id: string;
  }>;
};
