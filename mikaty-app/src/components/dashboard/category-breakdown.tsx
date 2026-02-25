"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { CATEGORIES } from "@/data/categories";
import { formatCurrency } from "@/lib/format";
import type { Category } from "@/types";

const categoryData: { name: string; value: number; category: Category; color: string }[] = [
  { name: "Food & Dining", value: 423, category: "food", color: CATEGORIES.food.color },
  { name: "Housing", value: 1800, category: "housing", color: CATEGORIES.housing.color },
  { name: "Transport", value: 187, category: "transport", color: CATEGORIES.transport.color },
  { name: "Entertainment", value: 156, category: "entertainment", color: CATEGORIES.entertainment.color },
  { name: "Shopping", value: 312, category: "shopping", color: CATEGORIES.shopping.color },
  { name: "Utilities", value: 178, category: "utilities", color: CATEGORIES.utilities.color },
  { name: "Subscriptions", value: 71, category: "subscriptions", color: CATEGORIES.subscriptions.color },
];

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
        <p className="text-sm font-medium text-foreground">{payload[0].name}</p>
        <p className="text-xs text-muted-foreground">{formatCurrency(payload[0].value)}</p>
      </div>
    );
  }
  return null;
}

export function CategoryBreakdown() {
  const total = categoryData.reduce((sum, d) => sum + d.value, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">Spending by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="h-[200px] w-[200px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-foreground">{formatCurrency(total)}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 w-full">
            {categoryData.map((item) => (
              <div key={item.category} className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-muted-foreground truncate">{item.name}</span>
                <span className="text-xs font-medium text-foreground ml-auto">
                  {Math.round((item.value / total) * 100)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
