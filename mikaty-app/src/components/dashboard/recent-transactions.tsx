"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTransactions } from "@/hooks/use-transactions";
import { CategoryIcon } from "@/components/shared/category-icon";
import { CurrencyDisplay } from "@/components/shared/currency-display";
import { formatDate } from "@/lib/format";

export function RecentTransactions() {
  const { recentTransactions } = useTransactions();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold">Recent Transactions</CardTitle>
        <Link href="/transactions">
          <Button variant="ghost" size="sm" className="text-xs">
            View all <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center gap-3"
            >
              <CategoryIcon category={transaction.category} size="sm" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {transaction.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDate(transaction.date)}
                </p>
              </div>
              <CurrencyDisplay
                amount={transaction.type === "expense" ? -transaction.amount : transaction.amount}
                showSign
                className="text-sm"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
