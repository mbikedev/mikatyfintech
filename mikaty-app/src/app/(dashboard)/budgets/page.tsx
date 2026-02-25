"use client";

import { PageHeader } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";
import { BudgetCard } from "@/components/budgets/budget-card";
import { CreateBudgetDialog } from "@/components/budgets/create-budget-dialog";
import { BudgetChart } from "@/components/budgets/budget-chart";
import { useBudgets } from "@/hooks/use-budgets";
import { formatCurrency, formatPercentage } from "@/lib/format";
import { PiggyBank, DollarSign, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function BudgetsPage() {
  const { budgetsWithProgress, totalBudget, totalSpent } = useBudgets();

  const overBudgetCount = budgetsWithProgress.filter((b) => b.status === "over_budget").length;
  const onTrackCount = budgetsWithProgress.filter((b) => b.status === "on_track").length;

  return (
    <div>
      <PageHeader title="Budgets" description="Set and track your spending limits">
        <CreateBudgetDialog />
      </PageHeader>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Budget"
          value={formatCurrency(totalBudget)}
          icon={PiggyBank}
        />
        <StatCard
          title="Total Spent"
          value={formatCurrency(totalSpent)}
          change={totalBudget > 0 ? -Math.round((totalSpent / totalBudget) * 100 - 100) : 0}
          changeLabel="of budget"
          icon={DollarSign}
          iconColor="bg-blue-500/10"
        />
        <StatCard
          title="On Track"
          value={onTrackCount.toString()}
          icon={CheckCircle2}
          iconColor="bg-emerald-500/10"
        />
        <StatCard
          title="Over Budget"
          value={overBudgetCount.toString()}
          icon={AlertTriangle}
          iconColor="bg-red-500/10"
        />
      </div>

      {/* Chart */}
      <div className="mb-6">
        <BudgetChart />
      </div>

      {/* Budget Cards Grid */}
      <h2 className="text-lg font-semibold text-foreground mb-4">Your Budgets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {budgetsWithProgress.map((budget) => (
          <BudgetCard key={budget.id} budget={budget} />
        ))}
      </div>
    </div>
  );
}
