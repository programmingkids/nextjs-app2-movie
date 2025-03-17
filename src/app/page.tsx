import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { APPNAME } from "@/config/data";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ButtonLink } from "@/components/ui/link";

export const metadata: Metadata = {
  title: `Home | ${APPNAME}`,
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-16 mb-16">
        <h1 className="p-5 text-center text-2xl font-semibold">動画アプリ</h1>
        <ul className="flex justify-center gap-10 mt-10">
          <ButtonLink text="Signin" href="/signin" color="blue" size="large" />
          <ButtonLink text="Signup" href="/signup" color="blue" size="large" />
        </ul>
      </div>
      <Footer />
    </>
  );
}
