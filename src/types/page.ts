import { AuthUser } from "@/types/auth";
import { YoutubeVideoItem } from "@/types/index";

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
  params: {
    slug?: string[];
  };
};

export type MovieListProps = {
  items: YoutubeVideoItem[];
};

export type MovieItemProps = {
  item: YoutubeVideoItem;
};

export type PlaylisteEditPageProps = {
  params: {
    id: string;
  };
};

export type VideoListPageProps = {
  params: {
    playlistId: string;
  };
};

export type VideoCreatePageProps = {
  params: {
    playlistId: string;
  };
};

export type VideoEditPageProps = {
  params: {
    playlistId: string;
    id: string;
  };
};
