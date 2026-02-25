import { Currency } from "./common";

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  currency: Currency;
  createdAt: Date;
}
