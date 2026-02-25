"use client";

import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTransactions } from "@/hooks/use-transactions";
import { CategoryIcon } from "@/components/shared/category-icon";
import { CurrencyDisplay } from "@/components/shared/currency-display";
import { formatDate } from "@/lib/format";
import { format } from "date-fns";

export function ExpenseList() {
  const { allTransactions } = useTransactions();

  const expensesByDate = useMemo(() => {
    const expenses = allTransactions
      .filter((t) => t.type === "expense")
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const grouped: Record<string, typeof expenses> = {};
    expenses.forEach((expense) => {
      const dateKey = format(new Date(expense.date), "yyyy-MM-dd");
      if (!grouped[dateKey]) grouped[dateKey] = [];
      grouped[dateKey].push(expense);
    });

    return Object.entries(grouped).slice(0, 10); // Last 10 days with expenses
  }, [allTransactions]);

  return (
    <div className="space-y-4">
      {expensesByDate.map(([dateKey, expenses]) => (
        <div key={dateKey}>
          <p className="text-sm font-medium text-muted-foreground mb-2">
            {formatDate(dateKey)}
          </p>
          <Card>
            <CardContent className="p-0 divide-y divide-border">
              {expenses.map((expense) => (
                <div
                  key={expense.id}
                  className="flex items-center gap-3 p-3"
                >
                  <CategoryIcon category={expense.category} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {expense.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {expense.merchant || expense.paymentMethod.replace("_", " ")}
                    </p>
                  </div>
                  <CurrencyDisplay
                    amount={-expense.amount}
                    showSign
                    className="text-sm"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
