import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, Clock, AlertTriangle, Users } from "lucide-react";
import { mockTasks } from "@/data/mockData";

const statsData = [
  {
    title: "Total Tasks",
    value: mockTasks.length,
    icon: CheckSquare,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "In Progress", 
    value: mockTasks.filter(t => t.status === "in-progress").length,
    icon: Clock,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    title: "Completed",
    value: mockTasks.filter(t => t.status === "completed").length,
    icon: CheckSquare,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    title: "Overdue",
    value: mockTasks.filter(t => t.status === "overdue").length,
    icon: AlertTriangle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="interactive-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.title === "Overdue" && stat.value > 0 
                  ? "Needs attention" 
                  : "Active tasks"}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}