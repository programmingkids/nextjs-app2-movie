import * as z from "zod";
import {
  type Playlist,
  type Video,
  type PlaylistWithPartialRelations,
} from "@/db/prisma/generated/zod/index";

export type SignInActionReturnType =
  | undefined
  | {
      success: boolean;
      error: {
        email?: string[];
        password?: string[];
      };
    };

export type SignUpActionReturnType =
  | undefined
  | {
      success: boolean;
      error: {
        email?: string[];
        password?: string[];
        password_confirm?: string[];
      };
    };

export type PasswordUpteActionReturnType =
  | {
      success: true;
    }
  | {
      success: boolean;
      error: {
        password?: string[];
        password_confirm?: string[];
      };
    };

export type ProfileUpteActionReturnType =
  | {
      success: true;
    }
  | {
      success: boolean;
      error: {
        fullname?: string[];
      };
    };

export type SuccessModalProps = {
  mainText: string;
  okButtonText?: string;
  onClose: () => void;
};

export type ErrorModalProps = {
  mainText: string;
  okButtonText?: string;
  onClose: () => void;
};

export type SearchBoxProps = {
  keyword?: string;
};

export type YoutubeVideoItem = {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId?: string;
    channelId?: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    tags?: string[];
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
};

export type YoutubeVideoById = {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      standard: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
  };
};

export type YoutubePlayerVideo = { title: string; videoId: string };
export type YoutubePlayerVideoList = YoutubePlayerVideo[];

export type YoutubePlayerControllerProps = {
  videoList: YoutubePlayerVideoList;
};

export type YoutubePlayerProps = {
  videoList: YoutubePlayerVideoList;
  currentPlay: number;
  setCurrentPlay: React.Dispatch<React.SetStateAction<number>>;
};

export type YoutubePlayerRelatedVideoProps = {
  videoId: string;
  title: string;
  current: boolean;
  index: number;
  setCurrentPlay: React.Dispatch<React.SetStateAction<number>>;
};

export type PlaylistCreateFormProps = {
  defaultValues: {
    userId: string;
  };
};

export type PlaylistEditFormProps = {
  defaultValues: Playlist;
};

export type VideoCreateFormProps = {
  defaultValues: {
    playlistId: number;
    seq: number;
  };
};

export type VideoEditFormProps = {
  defaultValues: Video;
};

export type DeleteProps = {
  id: number;
  title: string;
};

export type DeleteModalProps = {
  id: number;
  title: string;
  open: boolean;
  onClose: () => void;
  mainText: string;
  successText: string;
  cancelText: string;
};

export type AddProps = {
  videoId: string;
  title: string;
};

export type AddModalProps = {
  videoId: string;
  title: string;
  open: boolean;
  onClose: () => void;
  mainText: string;
  successText: string;
  cancelText: string;
};

export type BreadcrumbParam = {
  title: string;
  href: string;
  current: boolean;
  home: boolean;
};

export type BreadcrumbList = BreadcrumbParam[];

export type BreadcrumbProps = {
  bcList: BreadcrumbList;
};

export const PlaylistAddModalSchema = z.object({
  index: z.number({ message: "必須です" }).int(),
});

export type PlaylistAddModalType = z.infer<typeof PlaylistAddModalSchema>;

export type MyImageProps = {
  src: string;
  alt: string;
  className: string;
  errorClassName: string;
  width: number;
  height: number;
};

export type PlaylisetItemProps = {
  item: PlaylistWithPartialRelations;
};
