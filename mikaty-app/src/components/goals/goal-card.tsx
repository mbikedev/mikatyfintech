"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GoalProgressRing } from "./goal-progress-ring";
import { formatCurrency, formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Plus, Calendar } from "lucide-react";
import type { GoalWithProgress } from "@/types";

interface GoalCardProps {
  goal: GoalWithProgress;
  onAddFunds?: (goalId: string) => void;
}

export function GoalCard({ goal, onAddFunds }: GoalCardProps) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-base font-semibold text-foreground">{goal.name}</h3>
            {goal.description && (
              <p className="text-xs text-muted-foreground mt-0.5">{goal.description}</p>
            )}
          </div>
          {goal.isCompleted ? (
            <Badge className="bg-emerald-500/10 text-emerald-500">Completed</Badge>
          ) : (
            <Badge variant="secondary" className="text-xs">
              <Calendar className="h-3 w-3 mr-1" />
              {goal.daysUntilTarget}d left
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-4">
          <GoalProgressRing progress={goal.percentComplete} />
          <div className="flex-1 space-y-1">
            <div className="flex items-baseline justify-between">
              <span className="text-lg font-bold text-foreground">
                {formatCurrency(goal.currentAmount)}
              </span>
              <span className="text-sm text-muted-foreground">
                / {formatCurrency(goal.targetAmount)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              {formatCurrency(goal.remaining)} remaining
            </p>
            {!goal.isCompleted && goal.requiredMonthlyContribution > 0 && (
              <p className="text-xs text-muted-foreground">
                ~{formatCurrency(goal.requiredMonthlyContribution)}/mo needed
              </p>
            )}
          </div>
        </div>

        {!goal.isCompleted && onAddFunds && (
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-4"
            onClick={() => onAddFunds(goal.id)}
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Funds
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
