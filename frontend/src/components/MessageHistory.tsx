import { PanelRight, SquarePen } from "lucide-react";
import React from "react";
import CustomButton from "./widgets/CustomButton";
import { useStateStore } from "@/stores/useStateStore";
import { cn } from "@/lib/utils";
const MessageHistory = () => {
  const { openSlideBar, setStateSlideBar } = useStateStore();

  return (
    <div
      className={cn(
        "flex flex-col bg-white border-x-2 px-4 divide-y-2 space-y-4 duration-300",
        openSlideBar ? "max-w-xs" : "hidden max-w-0"
      )}
    >
      <div className="flex justify-between items-center py-1">
        <span className="font-semibold">Hộp thoại</span>
        <CustomButton _object={PanelRight} onClick={() => setStateSlideBar()} />
      </div>
      <div className="flex justify-center items-center ">
        <CustomButton
          _object={SquarePen}
          _variant="selected"
          _text="Tạo cuộc hội thoại mới"
        />
      </div>
    </div>
  );
};

export default MessageHistory;
