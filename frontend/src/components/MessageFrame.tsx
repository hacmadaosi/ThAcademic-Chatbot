import { cn } from "@/lib/utils";
import CustomInput from "./widgets/CustomInput";
import CustomButton from "./widgets/CustomButton";
import { Send } from "lucide-react";
import MessageCard from "./widgets/MessageCard";
import { useStateStore } from "@/stores/useStateStore";
import { toast } from "sonner";
import { useEffect } from "react";

const MessageFrame = () => {
  const {
    message,
    sendMessage,
    setMessage,
    listMessage,
    getAllMessage,
    changeWeight,
  } = useStateStore();
  // const [starting, setStarting] = useState(true);
  const refreshMessage = async () => {
    await getAllMessage("1");
  };
  useEffect(() => {
    refreshMessage();
  }, []);

  return (
    <div className="flex flex-1 flex-col py-5 items-center px-10 max-h-screen">
      <div
        className={cn(
          "flex w-fit  items-center gap-2 rounded-xl px-4 py-3",
          "shadow-[inset_1px_1px_2px_0_rgba(255,255,255,0.3),inset_-1px_-1px_2px_0_rgba(255,255,255,0.1),inset_0_0_10px_0_rgba(255,255,255,0.3)]"
        )}
      >
        <img
          src="/ultron.png"
          className="h-10 rounded-full object-cover select-none"
        />
        <span className="text-white font-semibold select-none">
          ThAcademic Chatbot
        </span>
      </div>
      <div className="flex flex-1 flex-col-reverse w-full overflow-auto hide-scrollbar">
        {listMessage.map((item) => (
          <MessageCard
            item={item}
            key={item._id}
            onClick={async () => {
              await changeWeight(item._id!.toString());
              refreshMessage();
            }}
          />
        ))}
      </div>
      <div className="flex w-full gap-4 pt-10">
        <CustomInput placeholder="Soạn nội dung..." />
        <CustomButton
          _object={Send}
          _text="Gửi"
          _variant="selected"
          onClick={async () => {
            if (!message.trim()) {
              toast.error("Hãy nhập nội dung trước khi gửi");
              return;
            }
            await sendMessage("1", message);
            setMessage("");
            await refreshMessage();
            toast.success(message);
          }}
        />
      </div>
    </div>
  );
};

export default MessageFrame;
