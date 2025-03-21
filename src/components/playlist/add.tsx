"use client";

import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { type AddProps } from "@/types/index";
import { CircleIconButton } from "@/components/ui/button";
import { AddModal } from "@/components/playlist/addModal";

export function Add({ videoId, title }: AddProps) {

  const handleClick = () => {
  };

  return (
    <>
      <CircleIconButton
        type="button"
        label="playlist"
        color="blue"
        icon={<FaRegBookmark />}
        onClick={handleClick}
      />
    </>
  );
}
