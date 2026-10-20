import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, Clock, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CreateTaskDialog } from "./CreateTaskDialog";
import { useNavigate, useParams } from "react-router-dom";


const task = [
  {
    id: "1",
    title: "Website Redesign Project",
    description: "Complete the new ACM website redesign with modern UI/UX",
    assignedBy: " (Core)",
    assignedTo: "Design Team",
    deadline: "2025-10-30",
    status: "in-progress",
    priority: "medium",
  },
  {
    id: "2",
    title: "Event Photography",
    description: "Capture photos for the upcoming tech conference",
    assignedBy: "Mike Chen (Head)",
    assignedTo: "Media Team",
    deadline: "2025-10-30",
    status: "pending",
    priority: "low",
  },
  {
    id: "3",
    title: "Budget Report",
    description: "Prepare quarterly budget analysis report",
    assignedBy: "Satvik Phour (Core)",
    assignedTo: "Finance Team",
    deadline: "2025-10-30",
    status: "late",
    priority: "high",
  },
 
];


interface Task {
  id: string;
  title: string;
  description: string;  
  assignedBy: string;
  assignedTo: string;
  deadline?: string;
  status: 'pending' | 'in-progress' | 'completed' | 'late';
  priority: 'low' | 'medium' | 'high';
}

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-600" />;
      case 'late':
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-yellow-600" />;
    }
  };
  
  // Handler to add a task
  
  
const navigate = useNavigate();


  const getStatusBadgeClass = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 'status-completed';
      case 'in-progress':
        return 'status-in-progress';
      case 'late':
        return 'status-late';
      default:
        return 'status-pending';
    }
  };
  

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500';
      case 'medium':
        return 'border-l-yellow-500';
      default:
        return 'border-l-green-500';
    }
  };

  const formatDeadline = (deadline?: string) => {
    if (!deadline) return 'No deadline';
    const date = new Date(deadline);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    
    <Card className={`hover-lift transition-all border-l-4 ${getPriorityColor(task.priority)}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg leading-tight pr-2">{task.title}</CardTitle>
          <div className="flex items-center gap-2">
            {getStatusIcon(task.status)}
            <Badge variant="outline" className={getStatusBadgeClass(task.status)}>
              {task.status.replace('-', ' ')}
            </Badge>
          </div>
        </div>
        <CardDescription className="text-sm leading-relaxed">
          {task.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <User className="w-4 h-4" />
            <span>
              <span className="font-medium">From:</span> {task.assignedBy}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <User className="w-4 h-4" />
            <span>
              <span className="font-medium">To:</span> {task.assignedTo}
            </span>
          </div>
          
          {task.deadline && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>
                <span className="font-medium">Due:</span> {task.deadline}    
              </span>
            </div>
          )}
        </div>

        <div className="flex gap-2 pt-2">
          {task.status === 'pending' && (
            <>
              <Button variant="default" size="sm" className="flex-1"
              onClick={() => navigate("/reject-task/:taskId")}>
                Accept
                
              </Button>
             <Button 
                  type="button" 
                  variant="destructive"
                  onClick={() => navigate("/reject-task/:taskId")}
                  className="flex-1"
                >
                  Reject
                </Button>
             
            </>
          )}
          
          {task.status === 'in-progress' && (
           
            <Button variant="default" size="sm" className="w-full cursor-pointer">
              Mark Complete
            </Button>
           
          )}
          
          <Link to="/NotFound">
          <Button variant="default" size="sm" className="flex-1"
              onClick={() => navigate("/NotFound")}>
                Accept
                
              </Button>
          <Button variant="ghost" size="sm" className="px-3 cursor-pointer">
            View Details
          </Button>
          
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};