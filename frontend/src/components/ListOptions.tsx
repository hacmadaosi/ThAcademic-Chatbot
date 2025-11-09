import { listIconButon } from "@/lib/data";
import { useState } from "react";
import CustomButton from "./widgets/CustomButton";
import { useStateStore } from "@/stores/useStateStore";
import { PanelRight } from "lucide-react";
import { toast } from "sonner";

const ListOptions = () => {
  const [selectedIcon] = useState("message");
  const { openSlideBar } = useStateStore();

  return (
    <div className="flex flex-col px-4 space-y-7 bg-white justify-center ">
      {!openSlideBar && (
        <CustomButton
          _object={PanelRight}
          onClick={() => {
            // setStateSlideBar();
            toast.warning("Tính năng đang phát triển, Hãy thử lại sau!");
          }}
        />
      )}

      {listIconButon.map((item) => (
        <CustomButton
          _object={item.Icon}
          key={item.id}
          _variant={item.id === selectedIcon ? "selected" : "default"}
          onClick={() => {
            // setSelectedIcon(item.id);
            toast.warning("Tính năng đang phát triển, Hãy thử lại sau!");
          }}
        />
      ))}
    </div>
  );
};

export default ListOptions;
