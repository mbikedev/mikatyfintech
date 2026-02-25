"use client";

import { PageHeader } from "@/components/shared/page-header";
import { BalanceCards } from "@/components/dashboard/balance-cards";
import { SpendingChart } from "@/components/dashboard/spending-chart";
import { CategoryBreakdown } from "@/components/dashboard/category-breakdown";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { BudgetOverview } from "@/components/dashboard/budget-overview";
import { QuickActions } from "@/components/dashboard/quick-actions";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Your financial overview at a glance"
      />

      {/* Stat Cards */}
      <BalanceCards />

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <div className="lg:col-span-2">
          <SpendingChart />
        </div>
        <CategoryBreakdown />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <div className="lg:col-span-1">
          <RecentTransactions />
        </div>
        <BudgetOverview />
        <QuickActions />
      </div>
    </div>
  );
}
