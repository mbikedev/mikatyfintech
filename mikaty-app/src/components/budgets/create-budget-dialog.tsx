"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useBudgetStore } from "@/stores/budget-store";
import { CATEGORIES } from "@/data/categories";
import type { Category } from "@/types";

const budgetSchema = z.object({
  category: z.string().min(1, "Category is required"),
  monthlyLimit: z.string().min(1, "Budget amount is required"),
  alertThreshold: z.string(),
});

type BudgetFormData = z.infer<typeof budgetSchema>;

export function CreateBudgetDialog() {
  const [open, setOpen] = useState(false);
  const addBudget = useBudgetStore((s) => s.addBudget);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<BudgetFormData>({
    resolver: zodResolver(budgetSchema),
    defaultValues: { alertThreshold: "80" },
  });

  const onSubmit = (data: BudgetFormData) => {
    addBudget({
      userId: "1",
      category: data.category as Category,
      monthlyLimit: parseFloat(data.monthlyLimit),
      currency: "USD",
      spent: 0,
      alertThreshold: parseInt(data.alertThreshold),
      period: "monthly",
      startDate: new Date(),
      isActive: true,
    });
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Budget
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Budget</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label>Category</Label>
            <Select onValueChange={(val) => setValue("category", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(CATEGORIES)
                  .filter(([key]) => !["salary", "freelance", "investment"].includes(key))
                  .map(([key, config]) => (
                    <SelectItem key={key} value={key}>
                      {config.label}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-xs text-destructive">{errors.category.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthlyLimit">Monthly Budget ($)</Label>
            <Input
              id="monthlyLimit"
              type="number"
              step="0.01"
              placeholder="500.00"
              {...register("monthlyLimit")}
            />
            {errors.monthlyLimit && (
              <p className="text-xs text-destructive">{errors.monthlyLimit.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="alertThreshold">Alert at (%)</Label>
            <Input
              id="alertThreshold"
              type="number"
              min="50"
              max="100"
              placeholder="80"
              {...register("alertThreshold")}
            />
          </div>

          <Button type="submit" className="w-full">Create Budget</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
