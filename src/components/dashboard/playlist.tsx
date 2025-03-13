import Link from "next/link";
import { getAuth } from "@/hooks/auth/server";
import { getPlaylistForPlay } from "@/db/playlist";
import { Table } from "@/components/playlist/table";

export async function Playliset() {
  const {
    user: { id: userId },
  } = await getAuth();

  // ユーザIDで一覧データを取得
  const list = await getPlaylistForPlay(userId);
  console.log(list);

  return (
    <>
      <Table {...{ list }} />
    </>
  );
}
