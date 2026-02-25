"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";
import { useBudgets } from "@/hooks/use-budgets";
import { CATEGORIES } from "@/data/categories";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";

export function BudgetOverview() {
  const { budgetsWithProgress } = useBudgets();
  const topBudgets = budgetsWithProgress.slice(0, 4);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold">Budget Overview</CardTitle>
        <Link href="/budgets">
          <Button variant="ghost" size="sm" className="text-xs">
            Manage <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topBudgets.map((budget) => {
            const categoryConfig = CATEGORIES[budget.category];
            return (
              <div key={budget.id}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-foreground">
                    {categoryConfig.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatCurrency(budget.spent)} / {formatCurrency(budget.monthlyLimit)}
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
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
