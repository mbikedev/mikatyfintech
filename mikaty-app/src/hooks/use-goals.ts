import { useMemo } from "react";
import { useGoalStore } from "@/stores/goal-store";
import type { GoalWithProgress } from "@/types";
import { differenceInDays, differenceInMonths } from "date-fns";

export function useGoals() {
  const { goals, addGoal, updateGoal, deleteGoal, addContribution } = useGoalStore();

  const goalsWithProgress = useMemo((): GoalWithProgress[] => {
    const now = new Date();

    return goals.map((goal) => {
      const percentComplete = (goal.currentAmount / goal.targetAmount) * 100;
      const remaining = goal.targetAmount - goal.currentAmount;
      const daysUntilTarget = Math.max(0, differenceInDays(new Date(goal.targetDate), now));
      const monthsRemaining = Math.max(1, differenceInMonths(new Date(goal.targetDate), now));
      const requiredMonthlyContribution = remaining > 0 ? remaining / monthsRemaining : 0;

      return {
        ...goal,
        percentComplete: Math.min(percentComplete, 100),
        remaining: Math.max(remaining, 0),
        daysUntilTarget,
        requiredMonthlyContribution,
      };
    });
  }, [goals]);

  const totalSaved = useMemo(() => {
    return goals.reduce((sum, g) => sum + g.currentAmount, 0);
  }, [goals]);

  const totalTarget = useMemo(() => {
    return goals.reduce((sum, g) => sum + g.targetAmount, 0);
  }, [goals]);

  return {
    goals,
    goalsWithProgress,
    totalSaved,
    totalTarget,
    addGoal,
    updateGoal,
    deleteGoal,
    addContribution,
  };
}
