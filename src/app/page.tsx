import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { APPNAME } from "@/config/data";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: `Home | ${APPNAME}`,
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-16 mb-16">
        <h1 className="p-5 bg-orange-500 text-center text-white text-2xl font-semibold">
          PLAYLIST
        </h1>
        <ul className="text-center m-4">
          <li className="m-5">
            <Link href="/signin" className="text-blue-500 underline m-4">
              Signin
            </Link>
          </li>
          <li>
            <Link href="/signup" className="text-blue-500 underline m-4">
              Signup
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
