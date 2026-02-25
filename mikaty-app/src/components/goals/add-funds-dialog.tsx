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
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGoalStore } from "@/stores/goal-store";

const fundsSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  note: z.string().optional(),
});

type FundsFormData = z.infer<typeof fundsSchema>;

interface AddFundsDialogProps {
  goalId: string | null;
  goalName: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddFundsDialog({ goalId, goalName, open, onOpenChange }: AddFundsDialogProps) {
  const addContribution = useGoalStore((s) => s.addContribution);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FundsFormData>({
    resolver: zodResolver(fundsSchema),
  });

  const onSubmit = (data: FundsFormData) => {
    if (!goalId) return;
    addContribution(goalId, {
      amount: parseFloat(data.amount),
      note: data.note,
      date: new Date(),
    });
    reset();
    onOpenChange(false);
  };

  const quickAmounts = [10, 25, 50, 100];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Funds to {goalName}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount ($)</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              placeholder="0.00"
              {...register("amount")}
            />
            {errors.amount && (
              <p className="text-xs text-destructive">{errors.amount.message}</p>
            )}
          </div>

          {/* Quick amount buttons */}
          <div className="flex gap-2">
            {quickAmounts.map((amount) => (
              <Button
                key={amount}
                type="button"
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => {
                  const input = document.getElementById("amount") as HTMLInputElement;
                  if (input) {
                    input.value = amount.toString();
                    input.dispatchEvent(new Event("input", { bubbles: true }));
                  }
                }}
              >
                ${amount}
              </Button>
            ))}
          </div>

          <div className="space-y-2">
            <Label htmlFor="note">Note (optional)</Label>
            <Input
              id="note"
              placeholder="Monthly contribution"
              {...register("note")}
            />
          </div>

          <Button type="submit" className="w-full">Add Funds</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
