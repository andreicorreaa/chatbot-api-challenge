export interface Message {
  id: string;
  conversationId: string;
  timestamp: Date;
  from: string;
  to: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}
