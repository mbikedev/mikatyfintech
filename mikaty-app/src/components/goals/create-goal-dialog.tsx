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
import { Plus } from "lucide-react";
import { useGoalStore } from "@/stores/goal-store";

const goalSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  targetAmount: z.string().min(1, "Target amount is required"),
  targetDate: z.string().min(1, "Target date is required"),
});

type GoalFormData = z.infer<typeof goalSchema>;

export function CreateGoalDialog() {
  const [open, setOpen] = useState(false);
  const addGoal = useGoalStore((s) => s.addGoal);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GoalFormData>({
    resolver: zodResolver(goalSchema),
  });

  const onSubmit = (data: GoalFormData) => {
    addGoal({
      userId: "1",
      name: data.name,
      description: data.description,
      targetAmount: parseFloat(data.targetAmount),
      currentAmount: 0,
      currency: "USD",
      targetDate: new Date(data.targetDate),
      icon: "Target",
      color: "text-primary",
      isCompleted: false,
    });
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Goal
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Savings Goal</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Goal Name</Label>
            <Input
              id="name"
              placeholder="e.g., Emergency Fund"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (optional)</Label>
            <Input
              id="description"
              placeholder="What's this goal for?"
              {...register("description")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetAmount">Target Amount ($)</Label>
            <Input
              id="targetAmount"
              type="number"
              step="0.01"
              placeholder="10000.00"
              {...register("targetAmount")}
            />
            {errors.targetAmount && (
              <p className="text-xs text-destructive">{errors.targetAmount.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetDate">Target Date</Label>
            <Input
              id="targetDate"
              type="date"
              {...register("targetDate")}
            />
            {errors.targetDate && (
              <p className="text-xs text-destructive">{errors.targetDate.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full">Create Goal</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
