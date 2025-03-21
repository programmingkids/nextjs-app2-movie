"use server";

import { revalidatePath } from "next/cache";
import {
  type Playlist,
  type PlaylistOptionalDefaults,
  PlaylistSchema,
  PlaylistOptionalDefaultsSchema,
} from "@/db/prisma/generated/zod/index";
import {
  createPlaylist,
  updatePlaylist,
  deletePlaylistById,
  getPlaylistByUserId,
} from "@/db/playlist";
import { getAuth } from "@/hooks/auth/server";

// 新規登録処理を行うサーバーアクション関数
export async function createPlaylistAction(data: PlaylistOptionalDefaults) {
  // Zodのバリデーション
  const result = PlaylistOptionalDefaultsSchema.safeParse(data);

  // バリデーション失敗
  if (!result.success) {
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // バリデーション成功の場合、DB処理
  const res = await createPlaylist(data);
  // 一覧画面のキャッシュ削除
  revalidatePath("/playlist");
  // 結果を返す
  return res;
}

// 更新処理を行うサーバーアクション関数
export async function editPlaylistAction(data: Playlist) {
  // Zodのバリデーション
  const result = PlaylistSchema.safeParse(data);

  // バリデーション失敗
  if (!result.success) {
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // バリデーション成功の場合、DB処理
  const res = await updatePlaylist(data);

  // 一覧画面のキャッシュ削除
  revalidatePath("/playlist");
  // 結果を返す
  return res;
}

export async function deletePlaylistAction(id: number) {
  // DBからプレイリストを削除
  await deletePlaylistById(id);

  // 一覧画面のキャッシュ削除
  revalidatePath("/playlist");

  // 結果を返す
  return {
    success: true,
  };
}

export async function getPlaylistAction() {
  // DBからユーザごとのプレイリストの一覧を取得
  const {
    user: { id: userId },
  } = await getAuth();

  const list = getPlaylistByUserId(userId);

  // 結果を返す
  return list;
}
