import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hogehoge",
};

export default function Page() {
  return (
    <div>
      <h1 className="p-4 text-center text-lg bg-blue-500 text-white">Hoge</h1>
      <div className="m-5 text-wrap">{"hoge, ".repeat(100)}</div>
      <div>
        <Link href="/signout">Signout</Link>
      </div>
    </div>
  );
}
