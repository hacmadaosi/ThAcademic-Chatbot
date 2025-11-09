import api from "@/lib/axios";

export const messageService = {
  sendMessage: async (userId: string, message: string) => {
    const res = await api.post(
      "/message",
      { userId, message },
      { withCredentials: true }
    );
    return res.data.bot_msg;
  },

  getAllMessage: async (userId: string) => {
    const res = await api.get(`/message/${userId}`);
    return res.data;
  },

  changeWeight: async (_id: string) => {
    await api.post("/weight", { _id }, { withCredentials: true });
  },
};
