import { type Playlist, type Video } from "@/db/prisma/generated/zod/index";

export type PlaylistReturnType =
  | {
      success: true;
      data: Playlist;
    }
  | {
      success: false;
    };

export type VideoReturnType =
  | {
      success: true;
      data: Video;
    }
  | {
      success: false;
    };
