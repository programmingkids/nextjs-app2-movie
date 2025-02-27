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
