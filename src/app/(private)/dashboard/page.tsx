import type { Metadata } from "next";
import Link from "next/link";
import { getAuth } from "@/hooks/auth/server";

export const metadata: Metadata = {
  title: "ダッシュボード",
};

export default async function Page() {
  const { userName, email, avatarUrl } = await getAuth();

  return (
    <div>
      <h1 className="p-4 text-center text-lg bg-blue-500 text-white">
        ダッシュボード
      </h1>
      <div className="mx-auto w-80 text-left m-4">
        <div>name: {userName}</div>
        <div>email: {email}</div>
      </div>
    </div>
  );
}
