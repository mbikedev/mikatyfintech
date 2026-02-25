"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ArrowLeftRight, PiggyBank, Target } from "lucide-react";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/expenses">
            <Button variant="outline" className="w-full h-auto py-3 flex flex-col gap-1">
              <Plus className="h-5 w-5" />
              <span className="text-xs">Add Expense</span>
            </Button>
          </Link>
          <Link href="/transactions">
            <Button variant="outline" className="w-full h-auto py-3 flex flex-col gap-1">
              <ArrowLeftRight className="h-5 w-5" />
              <span className="text-xs">Transactions</span>
            </Button>
          </Link>
          <Link href="/budgets">
            <Button variant="outline" className="w-full h-auto py-3 flex flex-col gap-1">
              <PiggyBank className="h-5 w-5" />
              <span className="text-xs">Budgets</span>
            </Button>
          </Link>
          <Link href="/goals">
            <Button variant="outline" className="w-full h-auto py-3 flex flex-col gap-1">
              <Target className="h-5 w-5" />
              <span className="text-xs">Goals</span>
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
