export type Currency = "USD" | "EUR" | "GBP" | "MAD";

export type TransactionType = "income" | "expense" | "transfer";

export type TransactionStatus = "completed" | "pending" | "failed";

export type Category =
  | "food"
  | "transport"
  | "housing"
  | "utilities"
  | "entertainment"
  | "shopping"
  | "health"
  | "education"
  | "travel"
  | "subscriptions"
  | "salary"
  | "freelance"
  | "investment"
  | "gift"
  | "other";

export type PaymentMethod =
  | "cash"
  | "credit_card"
  | "debit_card"
  | "bank_transfer"
  | "mobile_payment";

export interface DateRange {
  from: Date;
  to: Date;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
