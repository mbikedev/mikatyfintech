import {
  LayoutDashboard, ArrowLeftRight, Receipt, PiggyBank, Target, Settings,
} from "lucide-react";

export const APP_NAME = "Mikaty";
export const APP_DESCRIPTION = "All-in-one Finance App for Your Money";

export const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Transactions", href: "/transactions", icon: ArrowLeftRight },
  { label: "Expenses", href: "/expenses", icon: Receipt },
  { label: "Budgets", href: "/budgets", icon: PiggyBank },
  { label: "Goals", href: "/goals", icon: Target },
  { label: "Settings", href: "/settings", icon: Settings },
] as const;

export const PAYMENT_METHODS = [
  { value: "cash", label: "Cash" },
  { value: "credit_card", label: "Credit Card" },
  { value: "debit_card", label: "Debit Card" },
  { value: "bank_transfer", label: "Bank Transfer" },
  { value: "mobile_payment", label: "Mobile Payment" },
] as const;

export const CURRENCIES = [
  { value: "USD", label: "US Dollar", symbol: "$" },
  { value: "EUR", label: "Euro", symbol: "€" },
  { value: "GBP", label: "British Pound", symbol: "£" },
  { value: "MAD", label: "Moroccan Dirham", symbol: "MAD" },
] as const;
