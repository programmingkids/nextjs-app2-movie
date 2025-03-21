"use client";

import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { type DeleteProps } from "@/types/index";
import { DeleteModal } from "@/components/playlist/deleteModal";

export function Delete({ id, title }: DeleteProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="text-lg text-red-500 cursor-pointer hover:text-red-800">
        <FaTrashCan onClick={handleClick} />
      </div>
      {open && (
        <DeleteModal
          id={id}
          title={title}
          open={open}
          onClose={() => setOpen(false)}
          mainText="削除"
          cancelText="キャンセル"
          successText="削除"
        />
      )}
    </>
  );
}
