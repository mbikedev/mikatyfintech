"use client";

import { DollarSign, TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { StatCard } from "@/components/shared/stat-card";
import { useTransactions } from "@/hooks/use-transactions";
import { formatCurrency } from "@/lib/format";

export function BalanceCards() {
  const { currentMonthSummary } = useTransactions();

  // Calculate a mock total balance
  const totalBalance = 24563.82;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Balance"
        value={formatCurrency(totalBalance)}
        change={12.5}
        changeLabel="vs last month"
        icon={Wallet}
      />
      <StatCard
        title="Monthly Income"
        value={formatCurrency(currentMonthSummary.totalIncome)}
        change={8.2}
        changeLabel="vs last month"
        icon={TrendingUp}
        iconColor="bg-emerald-500/10"
      />
      <StatCard
        title="Monthly Expenses"
        value={formatCurrency(currentMonthSummary.totalExpenses)}
        change={-3.1}
        changeLabel="vs last month"
        icon={TrendingDown}
        iconColor="bg-red-500/10"
      />
      <StatCard
        title="Net Savings"
        value={formatCurrency(currentMonthSummary.netSavings)}
        change={15.3}
        changeLabel="vs last month"
        icon={DollarSign}
        iconColor="bg-blue-500/10"
      />
    </div>
  );
}
