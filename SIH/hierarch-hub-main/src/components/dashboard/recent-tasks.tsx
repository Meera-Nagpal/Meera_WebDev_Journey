import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusBadge } from "@/components/ui/status-badge";
import { mockTasks, mockUsers } from "@/data/mockData";
import { formatDistanceToNow } from "date-fns";

export function RecentTasks() {
  const recentTasks = mockTasks
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
    .slice(0, 5);

  const getUserById = (id: string) => mockUsers.find(u => u.id === id);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Recent Tasks
          <Badge variant="secondary" className="ml-auto">
            {recentTasks.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentTasks.map((task, index) => {
          const assignedUser = getUserById(task.assignedTo);
          
          return (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={assignedUser?.avatar} />
                <AvatarFallback>
                  {assignedUser?.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium leading-none">
                    {task.title}
                  </h4>
                  <StatusBadge status={task.status} />
                </div>
                
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {task.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Assigned to {assignedUser?.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(task.updatedAt, { addSuffix: true })}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </CardContent>
    </Card>
  );
}