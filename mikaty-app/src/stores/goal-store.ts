import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Goal, GoalContribution } from "@/types";
import { mockGoals } from "@/data/mock-goals";

interface GoalStore {
  goals: Goal[];
  addGoal: (goal: Omit<Goal, "id" | "createdAt" | "updatedAt" | "contributions">) => void;
  updateGoal: (id: string, updates: Partial<Goal>) => void;
  deleteGoal: (id: string) => void;
  addContribution: (goalId: string, contribution: Omit<GoalContribution, "id" | "goalId">) => void;
}

export const useGoalStore = create<GoalStore>()(
  persist(
    (set) => ({
      goals: mockGoals,

      addGoal: (goal) =>
        set((state) => ({
          goals: [
            ...state.goals,
            {
              ...goal,
              id: `goal-${Date.now()}`,
              contributions: [],
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
        })),

      updateGoal: (id, updates) =>
        set((state) => ({
          goals: state.goals.map((g) =>
            g.id === id ? { ...g, ...updates, updatedAt: new Date() } : g
          ),
        })),

      deleteGoal: (id) =>
        set((state) => ({
          goals: state.goals.filter((g) => g.id !== id),
        })),

      addContribution: (goalId, contribution) =>
        set((state) => ({
          goals: state.goals.map((g) =>
            g.id === goalId
              ? {
                  ...g,
                  currentAmount: g.currentAmount + contribution.amount,
                  contributions: [
                    ...g.contributions,
                    {
                      ...contribution,
                      id: `contrib-${Date.now()}`,
                      goalId,
                    },
                  ],
                  updatedAt: new Date(),
                }
              : g
          ),
        })),
    }),
    {
      name: "mikaty-goals",
    }
  )
);
