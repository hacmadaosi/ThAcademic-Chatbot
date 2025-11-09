export interface Message {
  _id?: string | number;
  user_id?: string;
  user_msg: string;
  bot_msg?: string;
  timestamp?: string;
  weights?: number;
}
