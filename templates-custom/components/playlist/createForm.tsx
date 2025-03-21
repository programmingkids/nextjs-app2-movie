"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PlaylistOptionalDefaultsSchema,
  type PlaylistOptionalDefaults,
} from "@/db/prisma/generated/zod/index";
import { type PlaylistCreateFormProps } from "@/types/index";
import { TextInput } from "@/components/ui/form";
import { LoadingButton } from "@/components/ui/button";
import { createPlaylistAction } from "@/actions/playlist";
import { SuccessModal } from "@/components/ui/modal";
import { ErrorModal } from "@/components/ui/errorModal";

export function PlaylistCreateForm({ defaultValues }: PlaylistCreateFormProps) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setErrorShowModal] = useState(false);

  // Formの入力パーツの初期化
  const { register, handleSubmit, formState, setError, clearErrors } =
    useForm<PlaylistOptionalDefaults>({
      resolver: zodResolver(PlaylistOptionalDefaultsSchema),
      defaultValues,
    });
  const { errors, isDirty, isValid, isSubmitting } = formState;

  // onSubmitイベントのハンドラー
  const onSubmit: SubmitHandler<PlaylistOptionalDefaults> = async (
    data: PlaylistOptionalDefaults,
  ) => {
    // 送信時にエラー表示を解除
    clearErrors();
    // サーバアクションを起動
    const result = await createPlaylistAction(data);
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
    router.push("/playlist");
  };

  const onError = () => {
    setErrorShowModal(false);
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2 mb-6">
          <TextInput
            label="名前"
            name="name"
            placeholder="input name"
            type="text"
            error={errors.name?.message || errors.root?.name?.message}
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
          disabled={!isDirty || !isValid || isSubmitting}
        />
      </form>
      {showModal && (
        <SuccessModal
          mainText="プレイリストを作成しました"
          onClose={onSuccess}
        />
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
