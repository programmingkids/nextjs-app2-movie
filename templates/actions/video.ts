"use server";

import { revalidatePath } from "next/cache";
import {
  createVideo,
  updateVideo,
  deleteVideoById,
  updateVideoSeq,
} from "@/db/video";
import {
  type Video,
  type VideoOptionalDefaults,
  VideoSchema,
  VideoOptionalDefaultsSchema,
} from "@/db/prisma/generated/zod/index";

// 新規登録処理を行うサーバーアクション関数
export async function createVideoAction(data: VideoOptionalDefaults) {
  // Zodのバリデーション
  const result = VideoOptionalDefaultsSchema.safeParse(data);

  // バリデーション失敗
  if (!result.success) {
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // バリデーション成功の場合、DB処理
  const res = await createVideo(data);
  // 一覧画面のキャッシュ削除
  revalidatePath("/video");
  // 結果を返す
  return res;
}

// 更新処理を行うサーバーアクション関数
export async function editVideoAction(data: Video) {
  // Zodのバリデーション
  const result = VideoSchema.safeParse(data);

  // バリデーション失敗
  if (!result.success) {
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // バリデーション成功の場合、DB処理
  const res = await updateVideo(data);

  // 一覧画面のキャッシュ削除
  revalidatePath("/video");
  // 結果を返す
  return res;
}

export async function deleteVideoAction(id: number) {
  // DBからビデオを削除
  await deleteVideoById(id);

  // 一覧画面のキャッシュ削除
  revalidatePath("/video");

  // 結果を返す
  return {
    success: true,
  };
}

export async function reorderVideoAction(list: Video[]) {
  // プレイリスト内のビデオを並び替える
  await updateVideoSeq(list);

  // 結果を返す
  return {
    success: true,
  };
}
