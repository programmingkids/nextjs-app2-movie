import type { Metadata } from "next";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button, LoadingButton, IconButton, CircleIconButton } from '@/components/ui/button';
import { FaBasketball } from "react-icons/fa6";
import { FaBeerMugEmpty } from "react-icons/fa6";


export const metadata: Metadata = {
  title: "Hogehoge",
};

const cn1 = [
  "bg-red-400",
  "text-white",
  "p-4",
  "m-4",
  "hover:bg-red-100",
  "hover:text-gray-500",
  "hover:cursor-pointer",
  "hover:ring",
  "hover:ring-[10px]",
  "hover:ring-orange-400",
];
const cnStr = cn1.join(" ");

const cn2 = {
  orange: [
    "bg-orange-400",
    "focus:ring",
    "focus:ring-[5px]",
    "focus:ring-orange-200",
    "active:ring",
    "active:ring-[5px]",
    "active:ring-orange-200",
    "active:bg-orange-600",
    "hover:bg-orange-700",
    "hover:ring",
    "hover:ring-[5px]",
    "hover:ring-orange-200",
    "disabled:bg-orange-100",
  ],
  rose: [
    "bg-rose-400",
    "focus:ring",
    "focus:ring-[5px]",
    "focus:ring-rose-200",
    "active:ring",
    "active:ring-[5px]",
    "active:ring-rose-200",
    "active:bg-rose-600",
    "hover:bg-rose-700",
    "hover:ring",
    "hover:ring-[5px]",
    "hover:ring-rose-200",
    "disabled:bg-rose-100",
  ],
} as const;

function getClassName(color: keyof typeof cn2) {
  const base = ["text-white", "p-4", "m-4", "outline-none", "rounded-full"];
  return cn2[color].join(" ") + " " + base.join(" ");
}

export default function Page() {
  return (
    <div>
      <h1 className="p-4 text-center text-lg bg-blue-500 text-white">Hoge</h1>
      <div className="m-5 text-wrap">{"hoge, ".repeat(100)}</div>
      <div className="my-4">
        <div className={cnStr}>hoge</div>
        <button className={getClassName("orange")}>
          <AiOutlineLoading3Quarters className="animate-spin" />
        </button>
        <button className={getClassName("rose")}>
          <AiOutlineLoading3Quarters className="animate-spin" />
        </button>
      </div>
      <div className="my-4 w-full">
        <Button type="button" label="hoge"/>
        <Button type="button" label="hoge" size="small"/>
        <Button type="button" label="hoge" size="base"/>
        <Button type="button" label="hoge" size="large" color="blue"/>
        <Button type="button" label="hoge" size="large" color="red"/>
        <Button type="button" label="hoge" size="large" color="orange"/>
        <Button type="button" label="hoge" size="large" color="amber"/>
        <Button type="button" label="hoge" size="large" color="green"/>
        <Button type="button" label="hoge" size="large" color="cyan"/>
        <Button type="button" label="hoge" size="large" color="emerald"/>
        <Button type="button" label="hoge" size="large" color="pink"/>
        <Button type="button" label="hoge" size="large" color="purple"/>
        <Button type="button" label="hoge" size="large" color="yellow"/>
        <div className="w-full">
          <Button type="button" label="hoge" size="large" color="rose" full={true}/>
        </div>
        <div className="w-[200px] m-4">
          <Button type="button" label="hoge" size="large" color="rose" full={true} className="p-1"/>
        </div>
      </div>
      
      <div className="p-4">
        <LoadingButton type="button" label="hoge" color="blue" isProcessing={true}/>
        <LoadingButton type="button" label="hoge" size="base" color="red" isProcessing={true}/>
        <LoadingButton type="button" label="hoge" size="large" color="green" isProcessing={true}/>
        <LoadingButton type="button" label="hoge" size="large" color="rose" isProcessing={true}/>
        <LoadingButton type="button" label="hoge" size="large" color="emerald" isProcessing={true}/>
        <LoadingButton type="button" label="hoge" size="large" color="stone" isProcessing={true}/>
        <LoadingButton type="button" label="hoge" size="large" color="stone" full={true} isProcessing={true}/>
      </div>
      <div className="p-4">
        <IconButton type="button" label="hoge" icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />} />
        <IconButton type="button" label="hoge" size="small" icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />} />
        <IconButton type="button" label="hoge" size="large" icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />} />
        <IconButton type="button" label="hoge" size="large" color="red" icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />} />
        <IconButton type="button" label="hoge" size="large" color="amber" icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />} />
        <IconButton type="button" label="hoge" size="large" color="orange" icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />} />
        <IconButton type="button" label="hoge" size="large" color="purple" icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />} />
        <IconButton type="button" label="hoge" size="large" color="gray" icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />} />
      </div>
      <div className="p-4">
        <CircleIconButton type="button" label="hoge" icon={<FaBeerMugEmpty />} />
        <CircleIconButton type="button" label="hoge" size="small" icon={<FaBeerMugEmpty />} />
        <CircleIconButton type="button" label="hoge" size="base" icon={<FaBeerMugEmpty />} />
        <CircleIconButton type="button" label="hoge" size="large" icon={<FaBeerMugEmpty />} />
      </div>      
      
      
      <div>
        <Link href="/signout">Signout</Link>
      </div>
    </div>
  );
}
