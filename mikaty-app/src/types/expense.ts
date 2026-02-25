import { Currency, Category, PaymentMethod } from "./common";

export interface Expense {
  id: string;
  userId: string;
  amount: number;
  currency: Currency;
  category: Category;
  description: string;
  date: Date;
  paymentMethod: PaymentMethod;
  isRecurring: boolean;
  recurringFrequency?: "weekly" | "monthly" | "yearly";
  createdAt: Date;
}
