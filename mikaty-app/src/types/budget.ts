import { Currency, Category } from "./common";

export interface Budget {
  id: string;
  userId: string;
  category: Category;
  monthlyLimit: number;
  currency: Currency;
  spent: number;
  alertThreshold: number;
  period: "monthly" | "weekly";
  startDate: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface BudgetWithProgress extends Budget {
  percentUsed: number;
  remaining: number;
  status: "on_track" | "warning" | "over_budget";
  daysRemaining: number;
}
