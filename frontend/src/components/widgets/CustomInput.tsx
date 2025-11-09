import { cn } from "@/lib/utils";
import { useStateStore } from "@/stores/useStateStore";

interface InputProp {
  placeholder?: string;
}

const CustomInput = ({ placeholder }: InputProp) => {
  const { setMessage, message } = useStateStore();

  return (
    <div
      className={cn(
        "w-full flex items-center px-4 rounded-sm",
        "shadow-[inset_1px_1px_2px_0_rgba(255,255,255,0.3),inset_-1px_-1px_2px_0_rgba(255,255,255,0.1),inset_0_0_10px_0_rgba(255,255,255,0.3)]"
      )}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none text-white w-full"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
    </div>
  );
};

export default CustomInput;
