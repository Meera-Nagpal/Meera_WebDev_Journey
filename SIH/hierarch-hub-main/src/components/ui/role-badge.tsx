import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { UserRole } from "@/types";

const roleBadgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset transition-colors",
  {
    variants: {
      role: {
        core: "bg-gradient-to-r from-purple-500 to-purple-600 text-white ring-purple-500/20",
        head: "bg-gradient-to-r from-blue-500 to-blue-600 text-white ring-blue-500/20",
        executive: "bg-gradient-to-r from-green-500 to-green-600 text-white ring-green-500/20",
      },
    },
    defaultVariants: {
      role: "executive",
    },
  }
);

interface RoleBadgeProps extends VariantProps<typeof roleBadgeVariants> {
  role: UserRole;
  className?: string;
}

const roleLabels: Record<UserRole, string> = {
  core: "Core Member",
  head: "Department Head", 
  executive: "Department Executive",
};

export function RoleBadge({ role, className }: RoleBadgeProps) {
  return (
    <span className={cn(roleBadgeVariants({ role }), className)}>
      {roleLabels[role]}
    </span>
  );
}