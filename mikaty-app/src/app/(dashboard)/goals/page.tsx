"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";
import { GoalCard } from "@/components/goals/goal-card";
import { CreateGoalDialog } from "@/components/goals/create-goal-dialog";
import { AddFundsDialog } from "@/components/goals/add-funds-dialog";
import { useGoals } from "@/hooks/use-goals";
import { formatCurrency, formatPercentage } from "@/lib/format";
import { Target, DollarSign, TrendingUp, CheckCircle2 } from "lucide-react";

export default function GoalsPage() {
  const { goalsWithProgress, totalSaved, totalTarget } = useGoals();
  const [addFundsGoalId, setAddFundsGoalId] = useState<string | null>(null);

  const selectedGoal = goalsWithProgress.find((g) => g.id === addFundsGoalId);
  const completedCount = goalsWithProgress.filter((g) => g.isCompleted).length;
  const overallProgress = totalTarget > 0 ? (totalSaved / totalTarget) * 100 : 0;

  return (
    <div>
      <PageHeader title="Savings Goals" description="Track your progress toward financial goals">
        <CreateGoalDialog />
      </PageHeader>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Saved"
          value={formatCurrency(totalSaved)}
          icon={DollarSign}
          iconColor="bg-emerald-500/10"
        />
        <StatCard
          title="Total Target"
          value={formatCurrency(totalTarget)}
          icon={Target}
          iconColor="bg-blue-500/10"
        />
        <StatCard
          title="Overall Progress"
          value={formatPercentage(overallProgress)}
          icon={TrendingUp}
          iconColor="bg-purple-500/10"
        />
        <StatCard
          title="Completed"
          value={completedCount.toString()}
          icon={CheckCircle2}
          iconColor="bg-amber-500/10"
        />
      </div>

      {/* Goal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {goalsWithProgress.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onAddFunds={(id) => setAddFundsGoalId(id)}
          />
        ))}
      </div>

      {/* Add Funds Dialog */}
      <AddFundsDialog
        goalId={addFundsGoalId}
        goalName={selectedGoal?.name || ""}
        open={!!addFundsGoalId}
        onOpenChange={(open) => !open && setAddFundsGoalId(null)}
      />
    </div>
  );
}
