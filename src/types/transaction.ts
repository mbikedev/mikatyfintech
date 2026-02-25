import {
  TransactionType,
  TransactionStatus,
  Category,
  Currency,
  PaymentMethod,
  DateRange,
} from "./common";

export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  currency: Currency;
  category: Category;
  description: string;
  merchant?: string;
  date: Date;
  status: TransactionStatus;
  paymentMethod: PaymentMethod;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TransactionFilters {
  dateRange?: DateRange;
  categories?: Category[];
  type?: TransactionType;
  amountMin?: number;
  amountMax?: number;
  search?: string;
  status?: TransactionStatus;
}

export interface TransactionSummary {
  totalIncome: number;
  totalExpenses: number;
  netSavings: number;
  transactionCount: number;
}
