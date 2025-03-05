import { type Metadata } from "next";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { PlaylistCreateForm } from "@/components/playlist/createForm";
import { getAuth } from "@/hooks/auth/server";

export const metadata: Metadata = {
  title: "Playlist Create",
};

export default async function Page() {
  const {
    user: { id: userId },
  } = await getAuth();

  return (
    <>
      <h1 className="mb-4 p-4 text-center bg-orange-500 text-white text-lg">
        <HiMiniAcademicCap className="inline align-bottom mr-2 text-2xl" />
        Playlist Create
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 px-6 text-start">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 col-start-1 md:col-start-2 lg:col-start-2 col-span-1 md:col-span-3 lg:col-span-1">
          <PlaylistCreateForm {...{ defaultValues: { userId } }} />
        </div>
      </div>
    </>
  );
}
