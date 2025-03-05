"use server";

import { revalidatePath } from "next/cache";
import { createVideo, updateVideo } from "@/db/video";
import {
  type Video,
  type VideoOptionalDefaults,
  VideoSchema,
  VideoOptionalDefaultsSchema,
} from "@/db/prisma/generated/zod/index";

// 新規登録処理を行うサーバーアクション関数
export async function createVideoAction(data: VideoOptionalDefaults) {
  // Zodによるバリデーションを実行する
  const result = VideoOptionalDefaultsSchema.safeParse(data);

  // バリデーション失敗の場合、errorを返す
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
  // Zodによるバリデーションを実行する
  const result = VideoSchema.safeParse(data);

  // バリデーション失敗の場合、errorを返す
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
