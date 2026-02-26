"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useLanguage } from "@/components/providers/language-provider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  BarChart3,
  PiggyBank,
  Receipt,
  Target,
  Shield,
  Zap,
  ArrowRight,
  Menu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const featureIcons: LucideIcon[] = [BarChart3, Receipt, PiggyBank, Target, Shield, Zap];

const navLinks = [
  { key: "services" as const, href: "#services" },
  { key: "entreprise" as const, href: "#entreprise" },
  { key: "contact" as const, href: "#contact" },
  { key: "faq" as const, href: "#faq" },
];

export default function LandingPage() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="MikatyFintech" width={32} height={32} className="h-8 w-8 rounded-lg object-contain" />
              <span className="text-lg font-bold text-foreground">MikatyFintech</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav[link.key]}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <Link href="/login" className="hidden sm:inline-flex">
              <Button variant="ghost" size="sm">{t.nav.signIn}</Button>
            </Link>
            <Link href="/signup" className="hidden sm:inline-flex">
              <Button size="sm">{t.nav.getStarted}</Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-72 p-0">
          <SheetHeader className="px-4 py-4">
            <SheetTitle className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="MikatyFintech" width={32} height={32} className="h-8 w-8 rounded-lg object-contain" />
              <span className="text-lg font-bold">MikatyFintech</span>
            </SheetTitle>
          </SheetHeader>
          <Separator />
          <nav className="space-y-1 px-3 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </nav>
          <Separator />
          <div className="px-3 py-4 space-y-3">
            <div className="flex items-center gap-2 px-3">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full">{t.nav.signIn}</Button>
            </Link>
            <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full">{t.nav.getStarted}</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
          <Zap className="h-3 w-3 text-primary" />
          <span>{t.hero.badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-3xl mx-auto">
          {t.hero.titleStart}{" "}
          <span className="text-primary">{t.hero.titleHighlight}</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t.hero.description}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/signup">
            <Button size="lg" className="gap-2">
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline">
              {t.hero.ctaSecondary}
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            {t.features.title}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            {t.features.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
              >
                <div className="rounded-lg bg-primary/10 w-10 h-10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-border p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            {t.cta.title}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            {t.cta.description}
          </p>
          <Link href="/signup">
            <Button size="lg" className="gap-2">
              {t.cta.button}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="MikatyFintech" width={24} height={24} className="h-6 w-6 rounded object-contain" />
            <span className="text-sm text-muted-foreground">{t.footer.tagline}</span>
          </div>
          <p className="text-xs text-muted-foreground">
            {t.footer.builtWith}
          </p>
        </div>
      </footer>
    </div>
  );
}
