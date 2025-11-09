import { messageService } from "@/services/messageService";
import type { StateStore } from "@/types/store";
import { toast } from "sonner";
import { create } from "zustand";

export const useStateStore = create<StateStore>((set, get) => ({
  openSlideBar: true,
  loading: false,
  message: "",
  reply: "",
  listMessage: [],

  setStateSlideBar: () => {
    set({ openSlideBar: !get().openSlideBar });
  },

  setReply(reply) {
    set({ reply });
  },

  setMessage(message) {
    set({ message });
  },

  sendMessage: async (userId, message) => {
    try {
      set({ loading: true });
      const { bot_msg } = await messageService.sendMessage(userId, message);
      get().setReply(bot_msg);
    } catch (error) {
      console.error(error);
      toast.error("Gửi không thành công!");
    } finally {
      set({ loading: false });
    }
  },
  getAllMessage: async (userId) => {
    try {
      set({ loading: true });
      const data = await messageService.getAllMessage(userId);
      set({ listMessage: [...data].reverse(), loading: false });
    } catch (error) {
      console.error(error);
      toast.error("Không thể tải cuộc hội thoại. Hãy thử lại!");
    }
  },
  changeWeight: async (_id) => {
    try {
      set({ loading: true });
      await messageService.changeWeight(_id);
    } catch (error) {
      console.error(error);
      toast.error("Lỗi khi đánh giá phản hồi!");
    } finally {
      set({ loading: false });
    }
  },
}));
