export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: [
    "/transactions/:path*",
    "/expenses/:path*",
    "/budgets/:path*",
    "/goals/:path*",
    "/settings/:path*",
  ],
};
