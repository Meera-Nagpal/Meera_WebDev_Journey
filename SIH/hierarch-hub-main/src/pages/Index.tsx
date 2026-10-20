import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { RecentTasks } from "@/components/dashboard/recent-tasks";
import { TaskAssignmentQuick } from "@/components/dashboard/task-assignment-quick";
import { HierarchyChart } from "@/components/dashboard/hierarchy-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@/data/mockData";
import { RoleBadge } from "@/components/ui/role-badge";
import { Calendar, Clock, TrendingUp } from "lucide-react";

const Index = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric", 
    month: "long",
    day: "numeric",
  });

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-6 p-6 overflow-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome back, {currentUser.name.split(" ")[0]} 👋
              </h1>
              <p className="text-muted-foreground">
                Here's what's happening with your organization today.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <RoleBadge role={currentUser.role} />
              <div className="text-right">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {currentDate}
                </div>
              </div>
            </div>
          </div>
          <Separator />
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <StatsCards />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Task Assignment - Available for Core and Heads */}
          {(currentUser.role === "core" || currentUser.role === "head") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <TaskAssignmentQuick />
            </motion.div>
          )}

          {/* Recent Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={currentUser.role === "executive" ? "lg:col-span-2" : "lg:col-span-2"}
          >
            <RecentTasks />
          </motion.div>
        </div>

        {/* Organization Hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <HierarchyChart />
        </motion.div>

        {/* Quick Actions for Different Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid gap-4 md:grid-cols-3"
        >
          <Card className="interactive-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Tasks</span>
                  <Badge variant="secondary">12</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Team Members</span>
                  <Badge variant="outline">25</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Completion Rate</span>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-success" />
                    <Badge className="bg-success/10 text-success">85%</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="interactive-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">Task completed</span>
                  <span className="text-xs text-muted-foreground">2h ago</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">New assignment</span>
                  <span className="text-xs text-muted-foreground">4h ago</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">Team meeting</span>
                  <span className="text-xs text-muted-foreground">1d ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="interactive-card bg-gradient-primary text-primary-foreground">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">All Systems</span>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    Operational
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Server Health</span>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    100%
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Last Backup</span>
                  <span className="text-xs opacity-75">2 hours ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Index;