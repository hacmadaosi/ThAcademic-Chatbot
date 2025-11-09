import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  _object: LucideIcon;
  _variant?: "default" | "selected";
  _text?: string;
  onClick?: () => void;
  size?: number;
  className?: string;
}

const CustomButton = ({
  _object: Icon,
  _variant = "default",
  onClick,
  _text,
  size,
  className,
}: ButtonProps) => {
  const colors = {
    default: "text-black",
    selected: "bg-sky-400 text-white",
  };

  return (
    <div
      className={cn(
        "p-3 rounded-xl active:scale-90 hover:cursor-pointer flex justify-center items-center select-none",
        colors[_variant],
        _text && "gap-2 px-4 rounded-lg",
        cn(className)
      )}
      onClick={onClick}
    >
      <Icon size={size} />
      <span className="text-sm ">{_text} </span>
    </div>
  );
};

export default CustomButton;
