import { useMemo } from "react";
import { useTransactionStore } from "@/stores/transaction-store";
import type { Transaction, TransactionSummary } from "@/types";
import { startOfMonth, endOfMonth, isWithinInterval } from "date-fns";

export function useTransactions() {
  const { transactions, filters, setFilters, clearFilters, addTransaction, deleteTransaction } =
    useTransactionStore();

  const filteredTransactions = useMemo(() => {
    let result = [...transactions];

    if (filters.type) {
      result = result.filter((t) => t.type === filters.type);
    }
    if (filters.categories && filters.categories.length > 0) {
      result = result.filter((t) => filters.categories!.includes(t.category));
    }
    if (filters.search) {
      const search = filters.search.toLowerCase();
      result = result.filter(
        (t) =>
          t.description.toLowerCase().includes(search) ||
          t.merchant?.toLowerCase().includes(search)
      );
    }
    if (filters.amountMin !== undefined) {
      result = result.filter((t) => t.amount >= filters.amountMin!);
    }
    if (filters.amountMax !== undefined) {
      result = result.filter((t) => t.amount <= filters.amountMax!);
    }
    if (filters.dateRange) {
      result = result.filter((t) =>
        isWithinInterval(new Date(t.date), {
          start: filters.dateRange!.from,
          end: filters.dateRange!.to,
        })
      );
    }

    // Sort by date descending
    result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return result;
  }, [transactions, filters]);

  const currentMonthSummary = useMemo((): TransactionSummary => {
    const now = new Date();
    const monthStart = startOfMonth(now);
    const monthEnd = endOfMonth(now);

    const monthTransactions = transactions.filter((t) =>
      isWithinInterval(new Date(t.date), { start: monthStart, end: monthEnd })
    );

    const totalIncome = monthTransactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = monthTransactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      totalIncome,
      totalExpenses,
      netSavings: totalIncome - totalExpenses,
      transactionCount: monthTransactions.length,
    };
  }, [transactions]);

  const recentTransactions = useMemo((): Transaction[] => {
    return [...transactions]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, [transactions]);

  return {
    transactions: filteredTransactions,
    allTransactions: transactions,
    currentMonthSummary,
    recentTransactions,
    filters,
    setFilters,
    clearFilters,
    addTransaction,
    deleteTransaction,
  };
}
