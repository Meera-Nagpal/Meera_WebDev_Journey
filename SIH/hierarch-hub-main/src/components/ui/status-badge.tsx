import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { TaskStatus } from "@/types";
import { Clock, CheckCircle, AlertCircle, Play } from "lucide-react";

const statusBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
  {
    variants: {
      status: {
        pending: "bg-warning/10 text-warning ring-warning/20",
        "in-progress": "bg-primary/10 text-primary ring-primary/20",
        completed: "bg-success/10 text-success ring-success/20",
        overdue: "bg-destructive/10 text-destructive ring-destructive/20",
      },
    },
    defaultVariants: {
      status: "pending",
    },
  }
);

interface StatusBadgeProps extends VariantProps<typeof statusBadgeVariants> {
  status: TaskStatus;
  className?: string;
}

const statusConfig: Record<TaskStatus, { label: string; icon: React.ComponentType<any> }> = {
  pending: { label: "Pending", icon: Clock },
  "in-progress": { label: "In Progress", icon: Play },
  completed: { label: "Completed", icon: CheckCircle },
  overdue: { label: "Overdue", icon: AlertCircle },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const { label, icon: Icon } = statusConfig[status];
  
  return (
    <span className={cn(statusBadgeVariants({ status }), className)}>
      <Icon className="h-3 w-3" />
      {label}
    </span>
  );
}