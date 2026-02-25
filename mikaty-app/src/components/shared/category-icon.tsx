import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/data/categories";
import type { Category } from "@/types";

interface CategoryIconProps {
  category: Category;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function CategoryIcon({ category, size = "md", className }: CategoryIconProps) {
  const config = CATEGORIES[category];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "h-6 w-6 p-1",
    md: "h-8 w-8 p-1.5",
    lg: "h-10 w-10 p-2",
  };

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  return (
    <div
      className={cn(
        "rounded-lg flex items-center justify-center shrink-0",
        config.bgColor,
        sizeClasses[size],
        className
      )}
      style={{ color: config.color }}
    >
      <Icon className={iconSizes[size]} />
    </div>
  );
}
