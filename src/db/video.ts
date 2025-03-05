import prisma from "@/db/prisma";
import {
  type VideoOptionalDefaults,
  type Video,
} from "@/db/prisma/generated/zod/index";

export async function getVideos() {
  // 全件取得
  const result = await prisma.video.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return result;
}

export async function getVideosByPlaylistId(playlistId: number) {
  // ユーザIDで検索
  const result = await prisma.video.findMany({
    where: {
      playlistId,
    },
    orderBy: {
      seq: "asc",
    },
  });
  return result;
}

type VideoReturnType =
  | {
      success: true;
      data: Video;
    }
  | {
      success: false;
    };

export async function getVideoById(id: number): Promise<VideoReturnType> {
  // 1件を取得
  const result = await prisma.video.findFirst({
    where: {
      id,
    },
  });
  return result !== null
    ? {
        success: true,
        data: result,
      }
    : {
        success: false,
      };
}

export async function createVideo(data: VideoOptionalDefaults) {
  // 新規登録
  try {
    // 現在のseqの最大値を取得
    const playlistId = data.playlistId;
    const aggregateSeq = await prisma.video.aggregate({
      _max: {
        seq: true,
      },
      where: {
        playlistId,
      },
    });
    // 現在のseqの最大値に加算する
    const seq = aggregateSeq._max.seq === null ? 1 : aggregateSeq._max.seq + 1;
    data.seq = seq;
    // 新規登録
    const result = await prisma.video.create({
      data,
    });
    return {
      success: true,
      data: result,
    };
  } catch {
    // データベースエラー発生
    return {
      success: false,
      error: { server_error: ["Database Error"] },
    };
  }
}

export async function updateVideo(data: Video) {
  // 更新
  try {
    const result = await prisma.video.update({
      data,
      where: {
        id: data.id,
      },
    });
    return {
      success: true,
      data: result,
    };
  } catch {
    // データベースエラー発生
    return {
      success: false,
      error: { server_error: ["Database Error"] },
    };
  }
}

/*
export async function deletePlaylistById(id: number) {
  // 削除
  try {
    const result = await prisma.playlist.delete({
      where: {
        id,
      },
    });
    return {
      success: true,
      data: result,
    };
  } catch {
    // データベースエラー発生
    return {
      success: false,
      error: { server_error: ["Database Error"] },
    };
  }
}
*/
