"use client";

import { PageHeader } from "@/components/shared/page-header";
import { AddExpenseDialog } from "@/components/expenses/add-expense-dialog";
import { ExpenseSummary } from "@/components/expenses/expense-summary";
import { ExpenseList } from "@/components/expenses/expense-list";

export default function ExpensesPage() {
  return (
    <div>
      <PageHeader
        title="Expenses"
        description="Track and manage your spending"
      >
        <AddExpenseDialog />
      </PageHeader>

      <ExpenseSummary />

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Recent Expenses</h2>
        <ExpenseList />
      </div>
    </div>
  );
}
