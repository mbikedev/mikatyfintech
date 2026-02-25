import { format, formatDistanceToNow, isToday, isYesterday } from "date-fns";

export function formatCurrency(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatCompactCurrency(amount: number, currency: string = "USD"): string {
  if (Math.abs(amount) >= 1000000) {
    return `${formatCurrency(amount / 1000000, currency).slice(0, -3)}M`;
  }
  if (Math.abs(amount) >= 1000) {
    return `${formatCurrency(amount / 1000, currency).slice(0, -3)}K`;
  }
  return formatCurrency(amount, currency);
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  if (isToday(d)) return "Today";
  if (isYesterday(d)) return "Yesterday";
  return format(d, "MMM d, yyyy");
}

export function formatDateShort(date: Date | string): string {
  return format(new Date(date), "MMM d");
}

export function formatRelativeDate(date: Date | string): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatPercentage(value: number): string {
  return `${Math.round(value)}%`;
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}
