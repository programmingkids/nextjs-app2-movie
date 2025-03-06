import { type Metadata } from "next";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { type BreadcrumbList } from "@/types/index";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PlaylistCreateForm } from "@/components/playlist/createForm";
import { getAuth } from "@/hooks/auth/server";

export const metadata: Metadata = {
  title: "Playlist Create",
};

const bcList: BreadcrumbList = [
  {
    title: "Dashboard",
    href: "/dashboard",
    current: false,
    home: true,
  },
  {
    title: "Playlist",
    href: "/playlist",
    current: false,
    home: false,
  },
  {
    title: "Create",
    href: "/playlist/create",
    current: true,
    home: false,
  },
];

export default async function Page() {
  const {
    user: { id: userId },
  } = await getAuth();

  return (
    <>
      <h1 className="mb-4 p-4 text-center bg-orange-500 text-white text-lg">
        <MdOutlineFeaturedPlayList className="inline align-bottom mr-2 text-2xl" />
        Playlist Create
      </h1>
      <div className="my-4 px-6">
        <Breadcrumb {...{ bcList }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 px-6 text-start">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 col-start-1 md:col-start-2 lg:col-start-2 col-span-1 md:col-span-3 lg:col-span-1">
          <PlaylistCreateForm {...{ defaultValues: { userId } }} />
        </div>
      </div>
    </>
  );
}
