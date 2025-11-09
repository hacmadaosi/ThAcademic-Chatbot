import type { Message } from "@/types/message";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import CustomButton from "./CustomButton";
interface MessageProp {
  item: Message;
  onClick?: () => void;
}

const MessageCard = ({ item, onClick }: MessageProp) => {
  return (
    <div className="my-1 flex flex-col gap-2 animate-fadeIn">
      <div className="flex gap-4 flex-row-reverse">
        <img
          src="/person.png"
          className="h-10 rounded-full object-cover select-none"
        />
        <div className="flex flex-col  bg-white px-4 py-2 rounded-sm text-sm">
          {item.user_msg}
          <div className="flex justify-between items-center">
            <span className="font-light text-gray-500 select-none text-xs mb-1">
              {new Date(item.timestamp!).toLocaleString("vi-VN", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                // Đặt múi giờ về Asia/Ho_Chi_Minh (GMT+7)
                timeZone: "Asia/Ho_Chi_Minh",
              })}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <img
          src="/ultron.png"
          className="h-10 rounded-full object-cover select-none"
        />
        <div className="flex flex-col bg-white px-4 py-2 rounded-sm text-sm">
          {item.bot_msg}
          <div className="flex items-center">
            <CustomButton
              _object={item.weights == 0 ? ThumbsUp : ThumbsDown}
              size={12}
              className={
                item.weights == 0 ? "p-1 text-green-500," : "p-1 text-red-500"
              }
              onClick={onClick}
              _text={
                item.weights == 0 ? "Thu hồi đánh giá" : "Đánh giá tiêu cực"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
