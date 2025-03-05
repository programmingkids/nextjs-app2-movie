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
        width: string;
        height: string;
      };
      medium: {
        url: string;
        width: string;
        height: string;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    tags: string[];
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
