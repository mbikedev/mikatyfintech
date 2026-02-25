import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import {
  BarChart3,
  PiggyBank,
  Receipt,
  Target,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Get insights into your spending patterns with real-time charts and reports.",
  },
  {
    icon: Receipt,
    title: "Expense Tracking",
    description: "Log and categorize expenses effortlessly. Know exactly where your money goes.",
  },
  {
    icon: PiggyBank,
    title: "Budget Management",
    description: "Set spending limits by category and get alerts before you overspend.",
  },
  {
    icon: Target,
    title: "Savings Goals",
    description: "Set financial goals and track your progress with visual indicators.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your financial data stays on your device. No third-party access.",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "See changes reflected instantly as you manage your finances.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
              M
            </div>
            <span className="text-lg font-bold text-foreground">Mikaty</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm">Sign in</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
          <Zap className="h-3 w-3 text-primary" />
          <span>Free and open source</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-3xl mx-auto">
          Your all-in-one{" "}
          <span className="text-primary">finance companion</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Track expenses, manage budgets, and achieve your financial goals. Mikaty gives you the tools to take control of your money.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/signup">
            <Button size="lg" className="gap-2">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline">
              Sign In
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Everything you need to manage your money
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Powerful features designed to give you complete control over your finances.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
            >
              <div className="rounded-lg bg-primary/10 w-10 h-10 flex items-center justify-center mb-4">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-border p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Start tracking your finances today
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Join thousands of users who have taken control of their financial future with Mikaty.
          </p>
          <Link href="/signup">
            <Button size="lg" className="gap-2">
              Create Free Account
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-xs">
              M
            </div>
            <span className="text-sm text-muted-foreground">Mikaty - All-in-one Finance App</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  );
}
