import { type Playlist } from "@/db/prisma/generated/zod/index";
import { getPlaylistForPlay } from "@/db/playlist";
import { getAuth } from "@/hooks/auth/server";
import { PlaylistItem } from "@/components/dashboard/playlistItem";

export async function Playlist() {
  const {
    user: { id: userId },
  } = await getAuth();

  // ユーザIDでプレリストを取得

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      </div>
    </div>
  );
}
