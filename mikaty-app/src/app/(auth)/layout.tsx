import Image from "next/image";
import { APP_NAME } from "@/lib/constants";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center bg-gradient-to-br from-primary/20 via-background to-background p-12">
        <div className="max-w-md text-center">
          <Image src="/images/mikaty-logo.webp" alt="MikatyFintech" width={64} height={64} className="h-16 w-16 rounded-2xl object-contain mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-4">{APP_NAME}</h1>
          <p className="text-lg text-muted-foreground">
            Your all-in-one finance companion. Track expenses, manage budgets, and achieve your financial goals.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center items-center p-6 md:p-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <Image src="/images/mikaty-logo.webp" alt="MikatyFintech" width={40} height={40} className="h-10 w-10 rounded-xl object-contain" />
            <span className="text-xl font-bold text-foreground">{APP_NAME}</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
