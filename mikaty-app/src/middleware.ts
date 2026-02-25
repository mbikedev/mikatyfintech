export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/transactions/:path*",
    "/expenses/:path*",
    "/budgets/:path*",
    "/goals/:path*",
    "/settings/:path*",
  ],
};
