"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiOutlineXMark } from "react-icons/hi2";
import {
  type Playlist,
  type PlaylistOptionalDefaults,
  PlaylistOptionalDefaultsSchema,
} from "@/db/prisma/generated/zod/index";
import {
  type AddModalProps,
  type PlaylistAddModalType,
  PlaylistAddModalSchema,
} from "@/types/index";
import { useAuth } from "@/hooks/auth/client";
import { Button, LoadingButton } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/spinner";
import { getPlaylistAction, createPlaylistAction } from "@/actions/playlist";
import { createVideoAction } from "@/actions/video";
import { TextInputNoLabel } from "@/components/ui/form";

export function AddModal({
  videoId,
  title,
  open,
  onClose,
  mainText,
  successText,
  cancelText,
}: AddModalProps) {
  // ログインユーザID
  const [userId, setUserId] = useState<string>("");
  const { user } = useAuth();

  // Refオブジェクトを作成する
  const modalRef = useRef<HTMLDivElement>(null);
  // キーダウンイベントハンドラー
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // ESCでモーダルを閉じる
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (user) {
      // ログインユーザIDを設定する
      setUserId(user.id);
    }
  }, [user]);

  useEffect(() => {
    // モーダルにフォーカスを設定する
    modalRef.current?.focus();
  }, [open]);

  return open ? (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={0}
      role="dialog"
      aria-modal
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-50 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-800/50"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      ref={modalRef}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative p-4 w-full max-w-2xl max-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="bg-white rounded-lg">
          <div className="flex justify-center relative p-4 md:p-5 rounded-t-lg border-b bg-gray-100">
            <h3 className="text-xl font-semibold">{mainText}</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center absolute right-5"
              data-modal-hide="static-modal"
              onClick={onClose}
            >
              <HiOutlineXMark />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-5">
            <div className="mb-4 pr-2 text-gray-700 truncate">{title}</div>
            <div className="text-center">
              <PlaylisetSelectBox {...{ videoId, title, onClose }} />
            </div>
          </div>
          <hr className="h-px border-gray-300" />
          <div className="p-5">
            {userId && (
              <NewPlaylistAddVideoBox
                {...{ videoId, title, onClose, defaultValues: { userId } }}
              />
            )}
          </div>
          <hr className="h-px border-gray-300" />
          <div className="grid grid-cols-2 gap-4 p-5">
            <Button
              type="button"
              onClick={onClose}
              label={cancelText}
              color="gray"
              className="col-start-2"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

// プレリストのセレクトボックスから選択してビデオを追加
export function PlaylisetSelectBox({
  videoId,
  title,
  onClose,
}: {
  videoId: string;
  title: string;
  onClose: () => void;
}) {
  const [playlist, setPlaylist] = useState<Playlist[]>([]);

  // Formの入力パーツの初期化
  const { register, handleSubmit, formState, setError, clearErrors } =
    useForm<PlaylistAddModalType>({
      resolver: zodResolver(PlaylistAddModalSchema),
    });
  const { errors, isDirty, isValid, isSubmitting } = formState;

  // onSubmitイベントのハンドラー
  const onSubmit: SubmitHandler<PlaylistAddModalType> = async (
    data: PlaylistAddModalType,
  ) => {
    const { id } = playlist[data.index];
    // サーバアクションを起動
    // プレイリストにビデオを追加
    await createVideoAction({
      videoId,
      title,
      seq: 0,
      playlistId: id,
    });
    onClose();
  };

  useEffect(() => {
    (async () => {
      const playlist = await getPlaylistAction();
      setPlaylist(playlist);
    })();
  }, []);

  return playlist.length > 0 ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select
        {...register("index", { valueAsNumber: true })}
        size={3}
        className="text-gray-800 text-lg mb-2 w-full border border-1 border-gray-400 focus:outline-none"
      >
        {playlist.map((e, i) => (
          <option key={i} value={i} className="p-2">
            {e.name}
          </option>
        ))}
      </select>
      <div className="mb-4 text-left text-red-500">{errors.index?.message}</div>
      <div>
        <LoadingButton
          label="登録"
          type="submit"
          disabled={!isDirty || !isValid || isSubmitting}
          isProcessing={isSubmitting}
          color="blue"
          full
        />
      </div>
    </form>
  ) : (
    <LoadingSpinner color="orange" />
  );
}

// 新規プレイリストを作成してビデオを追加
export function NewPlaylistAddVideoBox({
  videoId,
  title,
  onClose,
  defaultValues,
}: {
  videoId: string;
  title: string;
  onClose: () => void;
  defaultValues: {
    userId: string;
  };
}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

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
    // プレイリストを新規追加
    const result = await createPlaylistAction(data);
    // 新規追加プレイリストにビデオを追加
    if (result.success) {
      const id = result.data!.id;
      await createVideoAction({
        videoId,
        title,
        seq: 0,
        playlistId: id,
      });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 pl-1">
        <Button
          type="button"
          label="新規プレイリスト作成してビデオを追加する"
          onClick={handleClick}
          size="small"
          color="teal"
          className="rounded-full px-6"
        />
      </div>
      {open && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <TextInputNoLabel
              name="name"
              placeholder="input name"
              type="text"
              error={errors.name?.message || errors.root?.name?.message}
              register={register}
              formState={formState}
            />
            <div className="mb-4 text-left text-red-500">
              {errors.name?.message}
            </div>
          </div>
          <div>
            <LoadingButton
              label="登録"
              type="submit"
              disabled={!isDirty || !isValid || isSubmitting}
              isProcessing={isSubmitting}
              color="blue"
              full
            />
          </div>
        </div>
      )}
    </form>
  );
}
