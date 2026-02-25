"use client";

import { DollarSign, Receipt, TrendingDown, Calendar } from "lucide-react";
import { StatCard } from "@/components/shared/stat-card";
import { useTransactions } from "@/hooks/use-transactions";
import { formatCurrency } from "@/lib/format";
import { useMemo } from "react";
import { startOfMonth, endOfMonth, isWithinInterval } from "date-fns";

export function ExpenseSummary() {
  const { allTransactions } = useTransactions();

  const stats = useMemo(() => {
    const now = new Date();
    const monthStart = startOfMonth(now);
    const monthEnd = endOfMonth(now);

    const monthExpenses = allTransactions.filter(
      (t) =>
        t.type === "expense" &&
        isWithinInterval(new Date(t.date), { start: monthStart, end: monthEnd })
    );

    const totalSpent = monthExpenses.reduce((sum, t) => sum + t.amount, 0);
    const daysInMonth = monthEnd.getDate();
    const dayOfMonth = now.getDate();
    const avgDaily = dayOfMonth > 0 ? totalSpent / dayOfMonth : 0;
    const transactionCount = monthExpenses.length;

    // Find highest category
    const categoryTotals = monthExpenses.reduce<Record<string, number>>((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

    const highestCategory = Object.entries(categoryTotals).sort(
      ([, a], [, b]) => b - a
    )[0];

    return {
      totalSpent,
      avgDaily,
      transactionCount,
      highestCategoryAmount: highestCategory ? highestCategory[1] : 0,
    };
  }, [allTransactions]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Spent"
        value={formatCurrency(stats.totalSpent)}
        change={-3.1}
        changeLabel="vs last month"
        icon={DollarSign}
        iconColor="bg-red-500/10"
      />
      <StatCard
        title="Daily Average"
        value={formatCurrency(stats.avgDaily)}
        icon={Calendar}
        iconColor="bg-blue-500/10"
      />
      <StatCard
        title="Transactions"
        value={stats.transactionCount.toString()}
        icon={Receipt}
        iconColor="bg-purple-500/10"
      />
      <StatCard
        title="Highest Category"
        value={formatCurrency(stats.highestCategoryAmount)}
        icon={TrendingDown}
        iconColor="bg-amber-500/10"
      />
    </div>
  );
}
