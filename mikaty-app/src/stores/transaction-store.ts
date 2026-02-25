import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Transaction, TransactionFilters } from "@/types";
import { mockTransactions } from "@/data/mock-transactions";

interface TransactionStore {
  transactions: Transaction[];
  filters: TransactionFilters;
  addTransaction: (transaction: Omit<Transaction, "id" | "createdAt" | "updatedAt">) => void;
  updateTransaction: (id: string, updates: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;
  setFilters: (filters: Partial<TransactionFilters>) => void;
  clearFilters: () => void;
}

export const useTransactionStore = create<TransactionStore>()(
  persist(
    (set) => ({
      transactions: mockTransactions,
      filters: {},

      addTransaction: (transaction) =>
        set((state) => ({
          transactions: [
            {
              ...transaction,
              id: `txn-${Date.now()}`,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            ...state.transactions,
          ],
        })),

      updateTransaction: (id, updates) =>
        set((state) => ({
          transactions: state.transactions.map((t) =>
            t.id === id ? { ...t, ...updates, updatedAt: new Date() } : t
          ),
        })),

      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        })),

      setFilters: (filters) =>
        set((state) => ({
          filters: { ...state.filters, ...filters },
        })),

      clearFilters: () => set({ filters: {} }),
    }),
    {
      name: "mikaty-transactions",
    }
  )
);
