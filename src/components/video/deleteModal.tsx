"use client";

import { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiOutlineXMark } from "react-icons/hi2";
import { type DeleteModalProps } from "@/types/index";
import { deleteVideoAction } from "@/actions/video";

export function DeleteModal({
  id,
  title,
  open,
  onClose,
  mainText,
  successText,
  cancelText,
}: DeleteModalProps) {
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
    // モーダルにフォーカスを設定する
    modalRef.current?.focus();
  }, [open]);

  // Formの入力パーツの初期化
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: { id },
  });

  // onSubmitイベントのハンドラー
  const onSubmit: SubmitHandler<{ id: number }> = async () => {
    await deleteVideoAction(id);
    onClose();
  };

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
            <div className="text-center">
              <div className="pb-4 font-bold">{title}</div>
              <div className="pb-8">ID: {id}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-5 border-t rounded-b-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <button
                data-modal-hide="static-modal"
                type="submit"
                className="w-full p-3 rounded bg-red-500 text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 disabled:bg-red-300 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {successText}
              </button>
            </form>
            <button
              data-modal-hide="static-modal"
              type="button"
              className="w-full text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={onClose}
            >
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
