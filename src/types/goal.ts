import { Currency } from "./common";

export interface Goal {
  id: string;
  userId: string;
  name: string;
  description?: string;
  targetAmount: number;
  currentAmount: number;
  currency: Currency;
  targetDate: Date;
  icon: string;
  color: string;
  isCompleted: boolean;
  contributions: GoalContribution[];
  createdAt: Date;
  updatedAt: Date;
}

export interface GoalContribution {
  id: string;
  goalId: string;
  amount: number;
  note?: string;
  date: Date;
}

export interface GoalWithProgress extends Goal {
  percentComplete: number;
  remaining: number;
  daysUntilTarget: number;
  requiredMonthlyContribution: number;
}
