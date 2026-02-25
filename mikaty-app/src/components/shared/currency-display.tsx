import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/format";

interface CurrencyDisplayProps {
  amount: number;
  currency?: string;
  className?: string;
  showSign?: boolean;
}

export function CurrencyDisplay({ amount, currency = "USD", className, showSign }: CurrencyDisplayProps) {
  const isNegative = amount < 0;
  const isPositive = amount > 0;

  return (
    <span
      className={cn(
        "font-medium tabular-nums",
        showSign && isPositive && "text-emerald-500",
        showSign && isNegative && "text-red-500",
        className
      )}
    >
      {showSign && isPositive && "+"}
      {formatCurrency(amount, currency)}
    </span>
  );
}
