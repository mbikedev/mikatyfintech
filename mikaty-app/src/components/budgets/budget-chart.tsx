"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useBudgets } from "@/hooks/use-budgets";
import { CATEGORIES } from "@/data/categories";
import { formatCurrency } from "@/lib/format";

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
        <p className="text-sm font-medium text-foreground mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: {formatCurrency(entry.value)}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export function BudgetChart() {
  const { budgetsWithProgress } = useBudgets();

  const chartData = budgetsWithProgress.map((budget) => ({
    name: CATEGORIES[budget.category].label.split(" ")[0], // Short name
    budget: budget.monthlyLimit,
    actual: budget.spent,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">Budget vs Actual</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 28%, 17%)" />
              <XAxis
                dataKey="name"
                stroke="hsl(215, 16%, 47%)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(215, 16%, 47%)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ fontSize: "12px", color: "hsl(215, 16%, 57%)" }}
              />
              <Bar
                dataKey="budget"
                name="Budget"
                fill="hsl(215, 28%, 27%)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="actual"
                name="Actual"
                fill="hsl(160, 84%, 44%)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
