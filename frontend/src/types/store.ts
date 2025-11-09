import type { Message } from "./message";

export interface StateStore {
  openSlideBar: boolean;
  reply: string;
  setStateSlideBar: () => void;
  loading: boolean;
  setReply: (setReply: string) => void;
  message: string;
  setMessage: (message: string) => void;
  listMessage: Message[];
  sendMessage: (userId: string, message: string) => Promise<void>;
  getAllMessage: (userId: string) => Promise<void>;
  changeWeight: (_id: string) => Promise<void>;
}
