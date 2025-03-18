import type { Metadata } from "next";
import Link from "next/link";
import {
  Button,
  LoadingButton,
  IconButton,
  CircleIconButton,
} from "@/components/ui/button";
import { ButtonLink, IconButtonLink } from "@/components/ui/link";
import { LoadingSpinner } from "@/components/ui/spinner";
import { FaBasketball } from "react-icons/fa6";
import { FaBeerMugEmpty } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "styletest",
};

export default function Page() {
  return (
    <div>
      <h1 className="p-4 text-center text-lg bg-blue-500 text-white">
        StyleTest
      </h1>
      <div className="my-4 w-full">
        <Button type="button" label="hoge" />
        <Button type="button" label="hoge" size="small" />
        <Button type="button" label="hoge" size="base" />
        <Button type="button" label="hoge" size="large" color="blue" />
        <Button type="button" label="hoge" size="large" color="red" />
        <Button type="button" label="hoge" size="large" color="orange" />
        <Button type="button" label="hoge" size="large" color="amber" />
        <Button type="button" label="hoge" size="large" color="green" />
        <Button type="button" label="hoge" size="large" color="cyan" />
        <Button type="button" label="hoge" size="large" color="emerald" />
        <Button type="button" label="hoge" size="large" color="pink" />
        <Button type="button" label="hoge" size="large" color="purple" />
        <Button type="button" label="hoge" size="large" color="yellow" />
        <div className="w-full">
          <Button
            type="button"
            label="hoge"
            size="large"
            color="rose"
            full={true}
          />
        </div>
        <div className="w-[200px] m-4">
          <Button
            type="button"
            label="hoge"
            size="large"
            color="rose"
            full={true}
            className="p-1"
          />
        </div>
      </div>

      <div className="p-4">
        <LoadingButton
          type="button"
          label="hoge"
          color="blue"
          isProcessing={true}
        />
        <LoadingButton
          type="button"
          label="hoge"
          size="base"
          color="red"
          isProcessing={true}
        />
        <LoadingButton
          type="button"
          label="hoge"
          size="large"
          color="green"
          isProcessing={true}
        />
        <LoadingButton
          type="button"
          label="hoge"
          size="large"
          color="rose"
          isProcessing={true}
        />
        <LoadingButton
          type="button"
          label="hoge"
          size="large"
          color="emerald"
          isProcessing={true}
        />
        <LoadingButton
          type="button"
          label="hoge"
          size="large"
          color="stone"
          isProcessing={true}
        />
        <LoadingButton
          type="button"
          label="hoge"
          size="large"
          color="stone"
          full={true}
          isProcessing={true}
        />
      </div>
      <div className="p-4">
        <IconButton
          type="button"
          label="hoge"
          icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />}
        />
        <IconButton
          type="button"
          label="hoge"
          size="small"
          icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />}
        />
        <IconButton
          type="button"
          label="hoge"
          size="large"
          icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />}
        />
        <IconButton
          type="button"
          label="hoge"
          size="large"
          color="red"
          icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />}
        />
        <IconButton
          type="button"
          label="hoge"
          size="large"
          color="amber"
          icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />}
        />
        <IconButton
          type="button"
          label="hoge"
          size="large"
          color="orange"
          icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />}
        />
        <IconButton
          type="button"
          label="hoge"
          size="large"
          color="purple"
          icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />}
        />
        <IconButton
          type="button"
          label="hoge"
          size="large"
          color="gray"
          icon={<FaBasketball className="inline-block h-4 w-4 mr-3" />}
        />
      </div>
      <div className="p-4">
        <CircleIconButton
          type="button"
          label="hoge"
          icon={<FaBeerMugEmpty />}
        />
        <CircleIconButton
          type="button"
          label="hoge"
          size="small"
          icon={<FaBeerMugEmpty />}
        />
        <CircleIconButton
          type="button"
          label="hoge"
          size="base"
          icon={<FaBeerMugEmpty />}
        />
        <CircleIconButton
          type="button"
          label="hoge"
          size="large"
          icon={<FaBeerMugEmpty />}
        />
      </div>
      <div className="p-4">
        <ButtonLink text="hoge" href="/dashboard" />
        <ButtonLink text="hoge" href="/dashboard" size="small" />
        <ButtonLink text="hoge" href="/dashboard" size="base" />
        <ButtonLink text="hoge" href="/dashboard" size="large" />
        <ButtonLink text="hoge" href="/dashboard" size="large" color="red" />
        <ButtonLink text="hoge" href="/dashboard" size="large" color="yellow" />
        <ButtonLink text="hoge" href="/dashboard" size="large" color="green" />
        <ButtonLink text="hoge" href="/dashboard" size="large" color="amber" />
        <ButtonLink text="hoge" href="/dashboard" size="large" color="rose" />
        <ButtonLink
          text="hoge"
          href="/dashboard"
          size="large"
          color="rose"
          full
        />
      </div>
      <div className="p-4">
        <IconButtonLink
          text="hoge"
          href="/dashboard"
          icon={<FaBeerMugEmpty className="inline mr-2" />}
        />
        <IconButtonLink
          text="hoge"
          href="/dashboard"
          size="small"
          icon={<FaBeerMugEmpty className="inline mr-2" />}
        />
        <IconButtonLink
          text="hoge"
          href="/dashboard"
          size="base"
          icon={<FaBeerMugEmpty className="inline mr-2" />}
        />
        <IconButtonLink
          text="hoge"
          href="/dashboard"
          size="large"
          icon={<FaBeerMugEmpty className="inline mr-2" />}
        />
        <IconButtonLink
          text="hoge"
          href="/dashboard"
          size="large"
          color="red"
          icon={<FaBeerMugEmpty className="inline mr-2" />}
        />
        <IconButtonLink
          text="hoge"
          href="/dashboard"
          size="large"
          color="yellow"
          icon={<FaBeerMugEmpty className="inline mr-2" />}
        />
        <IconButtonLink
          text="hoge"
          href="/dashboard"
          size="large"
          color="green"
          icon={<FaBeerMugEmpty className="inline mr-2" />}
        />
        <IconButtonLink
          text="hoge"
          href="/dashboard"
          size="large"
          color="amber"
          icon={<FaBeerMugEmpty className="inline mr-2" />}
        />
        <IconButtonLink
          text="hoge"
          href="/dashboard"
          size="large"
          color="rose"
          icon={<FaBeerMugEmpty className="inline mr-2" />}
        />
        <IconButtonLink
          text="hoge"
          href="/dashboard"
          size="large"
          color="rose"
          full
          icon={<FaBeerMugEmpty className="inline mr-2" />}
        />
      </div>
      <div className="p-4">
        <LoadingSpinner />
        <LoadingSpinner size="small" />
        <LoadingSpinner size="base" />
        <LoadingSpinner size="large" />
        <LoadingSpinner size="large" color="red" />
        <LoadingSpinner size="large" color="pink" />
        <LoadingSpinner size="large" color="rose" />
        <LoadingSpinner size="large" color="yellow" />
        <LoadingSpinner size="large" color="orange" />
        <LoadingSpinner size="large" color="amber" />
        <LoadingSpinner size="large" color="green" />
        <LoadingSpinner size="large" color="purple" />
        <LoadingSpinner size="large" color="cyan" />
        <LoadingSpinner size="large" color="indigo" />
        <LoadingSpinner size="large" color="emerald" />
      </div>
    </div>
  );
}
