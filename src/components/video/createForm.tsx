"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  VideoOptionalDefaultsSchema,
  type VideoOptionalDefaults,
} from "@/db/prisma/generated/zod/index";
import { type VideoCreateFormProps } from "@/types/index";
import { TextInput } from "@/components/ui/form";
import { LoadingButton } from "@/components/ui/button";
import { createVideoAction } from "@/actions/video";
import { SuccessModal } from "@/components/ui/modal";
import { ErrorModal } from "@/components/ui/errorModal";

export function VideoCreateForm({ defaultValues }: VideoCreateFormProps) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setErrorShowModal] = useState(false);

  // Formの入力パーツの初期化
  const { register, handleSubmit, formState, setError, clearErrors } =
    useForm<VideoOptionalDefaults>({
      resolver: zodResolver(VideoOptionalDefaultsSchema),
      defaultValues,
    });
  const { errors, isDirty, isValid, isSubmitting } = formState;

  // onSubmitイベントのハンドラー
  const onSubmit: SubmitHandler<VideoOptionalDefaults> = async (
    data: VideoOptionalDefaults,
  ) => {
    // 送信時にエラー表示を解除
    clearErrors();
    // サーバアクションを起動
    const result = await createVideoAction(data);
    // サーバー側でエラー
    if (result.success) {
      setShowModal(true);
    } else {
      Object.entries(result.error!).map(([k, v]) => {
        setError(`root.${k}`, { message: v[0] });
      });
      if (errors.root?.server_error?.message) {
        setErrorShowModal(true);
      }
    }
  };

  const onSuccess = () => {
    router.push(`/video/${defaultValues.playlistId}`);
  };

  const onError = () => {
    setErrorShowModal(false);
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2 mb-6">
          <TextInput
            label="タイトル"
            name="title"
            placeholder="input title"
            type="text"
            error={errors.title?.message || errors.root?.title?.message}
            register={register}
            formState={formState}
          />
        </div>
        <div className="mt-2 mb-6">
          <TextInput
            label="ビデオID"
            name="videoId"
            placeholder="input videoId"
            type="text"
            error={errors.videoId?.message || errors.root?.videoId?.message}
            register={register}
            formState={formState}
          />
        </div>
        <LoadingButton
          label="登録"
          type="submit"
          full={true}
          color="blue"
          isProcessing={isSubmitting}
          disabled={!isDirty || !isValid}
        />
      </form>
      {showModal && (
        <SuccessModal mainText="ビデオを登録しました" onClose={onSuccess} />
      )}
      {showErrorModal && (
        <ErrorModal
          mainText={errors.root?.server_error?.message ?? ""}
          onClose={onError}
        />
      )}
    </>
  );
}
