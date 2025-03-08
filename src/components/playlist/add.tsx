"use client";

import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { type AddProps } from "@/types/index";
import { CircleIconButton } from "@/components/ui/button";
import { AddModal } from "@/components/playlist/addModal";

export function Add({ videoId, title }: AddProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <CircleIconButton
        color="blue"
        icon={<FaRegBookmark />}
        text="hoge"
        onClick={handleClick}
      />
      {open && (
        <AddModal
          videoId={videoId}
          title={title}
          open={open}
          onClose={() => setOpen(false)}
          mainText="プレイリスト"
          cancelText="キャンセル"
          successText="追加"
        />
      )}
    </>
  );
}
