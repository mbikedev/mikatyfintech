import { useMemo } from "react";
import { useBudgetStore } from "@/stores/budget-store";
import type { BudgetWithProgress } from "@/types";
import { differenceInDays, endOfMonth } from "date-fns";

export function useBudgets() {
  const { budgets, addBudget, updateBudget, deleteBudget } = useBudgetStore();

  const budgetsWithProgress = useMemo((): BudgetWithProgress[] => {
    const now = new Date();
    const monthEnd = endOfMonth(now);
    const daysRemaining = differenceInDays(monthEnd, now);

    return budgets
      .filter((b) => b.isActive)
      .map((budget) => {
        const percentUsed = (budget.spent / budget.monthlyLimit) * 100;
        const remaining = budget.monthlyLimit - budget.spent;
        let status: "on_track" | "warning" | "over_budget" = "on_track";
        if (percentUsed >= 100) status = "over_budget";
        else if (percentUsed >= budget.alertThreshold) status = "warning";

        return {
          ...budget,
          percentUsed,
          remaining,
          status,
          daysRemaining,
        };
      });
  }, [budgets]);

  const totalBudget = useMemo(() => {
    return budgets.filter((b) => b.isActive).reduce((sum, b) => sum + b.monthlyLimit, 0);
  }, [budgets]);

  const totalSpent = useMemo(() => {
    return budgets.filter((b) => b.isActive).reduce((sum, b) => sum + b.spent, 0);
  }, [budgets]);

  return {
    budgets,
    budgetsWithProgress,
    totalBudget,
    totalSpent,
    addBudget,
    updateBudget,
    deleteBudget,
  };
}
