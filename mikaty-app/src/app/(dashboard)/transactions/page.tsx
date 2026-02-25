"use client";

import { PageHeader } from "@/components/shared/page-header";
import { TransactionFilters } from "@/components/transactions/transaction-filters";
import { TransactionTable } from "@/components/transactions/transaction-table";
import { useTransactions } from "@/hooks/use-transactions";
import { formatCurrency } from "@/lib/format";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, ArrowLeftRight } from "lucide-react";

export default function TransactionsPage() {
  const { currentMonthSummary, transactions } = useTransactions();

  return (
    <div>
      <PageHeader
        title="Transactions"
        description="View and manage your transaction history"
      />

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="rounded-lg p-2 bg-emerald-500/10">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Income</p>
              <p className="text-lg font-bold text-foreground">{formatCurrency(currentMonthSummary.totalIncome)}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="rounded-lg p-2 bg-red-500/10">
              <TrendingDown className="h-4 w-4 text-red-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Expenses</p>
              <p className="text-lg font-bold text-foreground">{formatCurrency(currentMonthSummary.totalExpenses)}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="rounded-lg p-2 bg-blue-500/10">
              <ArrowLeftRight className="h-4 w-4 text-blue-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Transactions</p>
              <p className="text-lg font-bold text-foreground">{transactions.length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <TransactionFilters />
      <TransactionTable />
    </div>
  );
}
