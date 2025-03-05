"use server";

import { revalidatePath } from "next/cache";
import { createPlaylist, updatePlaylist } from "@/db/playlist";
import {
  type Playlist,
  type PlaylistOptionalDefaults,
  PlaylistSchema,
  PlaylistOptionalDefaultsSchema,
} from "@/db/prisma/generated/zod/index";

// 新規登録処理を行うサーバーアクション関数
export async function createPlaylistAction(data: PlaylistOptionalDefaults) {
  // Zodによるバリデーションを実行する
  const result = PlaylistOptionalDefaultsSchema.safeParse(data);

  // バリデーション失敗の場合、errorを返す
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
  // Zodによるバリデーションを実行する
  const result = PlaylistSchema.safeParse(data);

  // バリデーション失敗の場合、errorを返す
  if (!result.success) {
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // バリデーション成功の場合、DB処理
  const res = await updatePlaylist(data);

  // 一覧画面のキャッシュ削除
  revalidatePath("/author");
  // 結果を返す
  return res;
}
