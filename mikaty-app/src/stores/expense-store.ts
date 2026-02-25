import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Expense } from "@/types";

// Derive expenses from transactions, but also allow standalone expense entries
interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, "id" | "createdAt">) => void;
  deleteExpense: (id: string) => void;
}

export const useExpenseStore = create<ExpenseStore>()(
  persist(
    (set) => ({
      expenses: [],

      addExpense: (expense) =>
        set((state) => ({
          expenses: [
            {
              ...expense,
              id: `exp-${Date.now()}`,
              createdAt: new Date(),
            },
            ...state.expenses,
          ],
        })),

      deleteExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((e) => e.id !== id),
        })),
    }),
    {
      name: "mikaty-expenses",
    }
  )
);
