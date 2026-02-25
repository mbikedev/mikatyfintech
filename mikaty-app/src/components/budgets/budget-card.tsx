"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CATEGORIES } from "@/data/categories";
import { formatCurrency, formatPercentage } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { BudgetWithProgress } from "@/types";

interface BudgetCardProps {
  budget: BudgetWithProgress;
}

export function BudgetCard({ budget }: BudgetCardProps) {
  const categoryConfig = CATEGORIES[budget.category];
  const Icon = categoryConfig.icon;

  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className={cn("rounded-lg p-2", categoryConfig.bgColor)}
              style={{ color: categoryConfig.color }}
            >
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{categoryConfig.label}</p>
              <p className="text-xs text-muted-foreground">{budget.period}</p>
            </div>
          </div>
          <Badge
            variant="secondary"
            className={cn(
              "text-xs",
              budget.status === "on_track" && "bg-emerald-500/10 text-emerald-500",
              budget.status === "warning" && "bg-amber-500/10 text-amber-500",
              budget.status === "over_budget" && "bg-red-500/10 text-red-500"
            )}
          >
            {budget.status === "on_track" ? "On Track" : budget.status === "warning" ? "Warning" : "Over Budget"}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {formatCurrency(budget.spent)} of {formatCurrency(budget.monthlyLimit)}
            </span>
            <span className="font-medium text-foreground">
              {formatPercentage(budget.percentUsed)}
            </span>
          </div>
          <Progress
            value={Math.min(budget.percentUsed, 100)}
            className={cn(
              "h-2",
              budget.status === "over_budget" && "[&>div]:bg-red-500",
              budget.status === "warning" && "[&>div]:bg-amber-500",
              budget.status === "on_track" && "[&>div]:bg-emerald-500"
            )}
          />
          <p className="text-xs text-muted-foreground">
            {budget.remaining > 0
              ? `${formatCurrency(budget.remaining)} remaining · ${budget.daysRemaining} days left`
              : `${formatCurrency(Math.abs(budget.remaining))} over budget`}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
