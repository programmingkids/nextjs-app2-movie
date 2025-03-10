import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { type SpinnerProps } from "@/types/ui";
import { createSpinnerClassName } from "@/lib/ui";

export function LoadingSpinner({ color }: SpinnerProps) {
  const cn = createSpinnerClassName(color);
  return (
    <div className="text-center">
      <AiOutlineLoading3Quarters className={cn} />
    </div>
  );
}
