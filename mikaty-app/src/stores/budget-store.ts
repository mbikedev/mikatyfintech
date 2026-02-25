import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Budget } from "@/types";
import { mockBudgets } from "@/data/mock-budgets";

interface BudgetStore {
  budgets: Budget[];
  addBudget: (budget: Omit<Budget, "id" | "createdAt" | "updatedAt">) => void;
  updateBudget: (id: string, updates: Partial<Budget>) => void;
  deleteBudget: (id: string) => void;
}

export const useBudgetStore = create<BudgetStore>()(
  persist(
    (set) => ({
      budgets: mockBudgets,

      addBudget: (budget) =>
        set((state) => ({
          budgets: [
            ...state.budgets,
            {
              ...budget,
              id: `bgt-${Date.now()}`,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
        })),

      updateBudget: (id, updates) =>
        set((state) => ({
          budgets: state.budgets.map((b) =>
            b.id === id ? { ...b, ...updates, updatedAt: new Date() } : b
          ),
        })),

      deleteBudget: (id) =>
        set((state) => ({
          budgets: state.budgets.filter((b) => b.id !== id),
        })),
    }),
    {
      name: "mikaty-budgets",
    }
  )
);
