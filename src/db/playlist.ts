import prisma from "@/db/prisma";
import {
  type PlaylistOptionalDefaults,
  type Playlist,
} from "@/db/prisma/generated/zod/index";

export async function getPlaylists() {
  // 全件取得
  const result = await prisma.playlist.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return result;
}

export async function getPlaylistByUserId(userId: string) {
  // ユーザIDで検索
  const result = await prisma.playlist.findMany({
    where: {
      userId,
    },
    orderBy: {
      id: "asc",
    },
  });
  return result;
}

type PlaylistReturnType =
  | {
      success: true;
      data: Playlist;
    }
  | {
      success: false;
    };

export async function getPlaylistById(
  id: number,
  userId: string,
): Promise<PlaylistReturnType> {
  // 1件を取得
  const result = await prisma.playlist.findFirst({
    where: {
      id,
      userId,
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

export async function createPlaylist(data: PlaylistOptionalDefaults) {
  // 新規登録
  try {
    const result = await prisma.playlist.create({
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

export async function updatePlaylist(data: Playlist) {
  // 更新
  try {
    const result = await prisma.playlist.update({
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

export async function getPlaylistForPlay(userId: string) {
  // ユーザIDで検索
  const result = await prisma.playlist.findMany({
    where: {
      userId,
      video: {
        some: {},
      },
    },
    include: {
      video: true,
    },
    orderBy: {
      id: "asc",
    },
  });
  return result;
}
