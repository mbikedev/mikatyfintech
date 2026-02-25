import {
  Utensils, Car, Home, Zap, Tv, ShoppingBag,
  Heart, GraduationCap, Plane, CreditCard,
  Briefcase, Code, TrendingUp, Gift, MoreHorizontal,
} from "lucide-react";
import type { Category } from "@/types";
import type { LucideIcon } from "lucide-react";

export interface CategoryConfig {
  label: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export const CATEGORIES: Record<Category, CategoryConfig> = {
  food: { label: "Food & Dining", icon: Utensils, color: "#f97316", bgColor: "bg-orange-500/10" },
  transport: { label: "Transportation", icon: Car, color: "#3b82f6", bgColor: "bg-blue-500/10" },
  housing: { label: "Housing", icon: Home, color: "#8b5cf6", bgColor: "bg-violet-500/10" },
  utilities: { label: "Utilities", icon: Zap, color: "#eab308", bgColor: "bg-yellow-500/10" },
  entertainment: { label: "Entertainment", icon: Tv, color: "#ec4899", bgColor: "bg-pink-500/10" },
  shopping: { label: "Shopping", icon: ShoppingBag, color: "#06b6d4", bgColor: "bg-cyan-500/10" },
  health: { label: "Health", icon: Heart, color: "#ef4444", bgColor: "bg-red-500/10" },
  education: { label: "Education", icon: GraduationCap, color: "#14b8a6", bgColor: "bg-teal-500/10" },
  travel: { label: "Travel", icon: Plane, color: "#a855f7", bgColor: "bg-purple-500/10" },
  subscriptions: { label: "Subscriptions", icon: CreditCard, color: "#f43f5e", bgColor: "bg-rose-500/10" },
  salary: { label: "Salary", icon: Briefcase, color: "#22c55e", bgColor: "bg-green-500/10" },
  freelance: { label: "Freelance", icon: Code, color: "#10b981", bgColor: "bg-emerald-500/10" },
  investment: { label: "Investment", icon: TrendingUp, color: "#6366f1", bgColor: "bg-indigo-500/10" },
  gift: { label: "Gift", icon: Gift, color: "#f59e0b", bgColor: "bg-amber-500/10" },
  other: { label: "Other", icon: MoreHorizontal, color: "#6b7280", bgColor: "bg-gray-500/10" },
};
