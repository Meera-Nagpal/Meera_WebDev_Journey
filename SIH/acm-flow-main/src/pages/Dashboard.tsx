  import { useState } from "react";
  import { DashboardSidebar } from "@/components/DashboardSidebar";
  import { TaskCard } from "@/components/TaskCard";
  import { CreateTaskDialog } from "@/components/CreateTaskDialog";
  import { Button } from "@/components/ui/button";
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import { Plus, BarChart3, CheckCircle, Clock, AlertTriangle } from "lucide-react";

  // Mock data for demonstration
  const mockTasks = [
    {
      id: "1",
      title: "Website Redesign Project",
      description: "Complete the new ACM website redesign with modern UI/UX",
      assignedBy: "Pratham Chhabra (Technical Head)",
      assignedTo: "Techinical Department",
      deadline: "2025-11-15",
      status: "in-progress" as const,
      priority: "high" as const,
    },
    {
      id: "2",
      title: "Reel for Bvest",
      description: "Make a reel for CodeJam Talks ",
      assignedBy: "Shivangi Jha(Social Media head)",
      assignedTo: "Social Media Department",
      deadline: "2025-10-2",
      status: "pending" as const,
      priority: "medium" as const,
    },
    {
      id: "3",
      title: "Sponsership for bvest",
      description: "Reach Out to Reputed Sponsers for funding",
      assignedBy: "Sanskar(Core)",
      assignedTo: "Outreach Department",
      deadline: "2025-10-1",
      status: "late" as const,
      priority: "high" as const,
    },
    {
  id: "4",
  title: "Completed Example",
  description: "A completed task.",
  assignedBy: "Hehe",
  assignedTo: "Hehe Dept.",
  deadline: "2025-10-01",
  status: "completed" as const,
  priority: "low" as const,
}

    
  ];
  
  

  const Dashboard = () => {
    const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
    const [userRole] = useState<'core' | 'head' | 'executive'>('head'); // Mock role

    // Calculate stats
    const totalTasks = mockTasks.length;
    const completedTasks = mockTasks.filter(task => task.status === 'completed').length;
    const pendingTasks = mockTasks.filter(task => task.status === 'pending').length;
    const lateTasks = mockTasks.filter(task => task.status === 'late').length;
    const inProgressTasks = mockTasks.filter(task => task.status === 'in-progress').length;
    


    return (
    
      <div className="flex min-h-screen bg-background">
        <DashboardSidebar />
        
        <main className="flex-1 p-6 animate-fade-in">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Task Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here's an overview of your tasks and projects.
              </p>
            </div>
            
            {(userRole === 'core' || userRole === 'head') && (
              <Button 
                variant="gradient" 
                size="lg"
                onClick={() => setIsCreateTaskOpen(true)}
                className="animate-scale-in"
              >
                <Plus className="w-4 h-4 mr-2 " />
                Create Task
              </Button>
            )}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 c">
            <Card className="hover-lift cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium cursor-default">Total Tasks</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalTasks}</div>
                <p className="text-base text-muted-foreground cursor-default">
                  +2 from last week
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium cursor-default">Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{completedTasks}</div>
                <p className="text-base text-muted-foreground">
                  {Math.round((completedTasks / totalTasks) * 100)}% completion rate
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium cursor-default ">Pending</CardTitle>
                <Clock className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">{pendingTasks}</div>
                <p className="text-base text-muted-foreground cursor-default">
                  Awaiting response
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium cursor-default">Overdue</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{lateTasks}</div>
                <p className="text-base text-muted-foreground cursor-default">
                  Immediate attention needed
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tasks Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold cursor-default">Recent Tasks</h2>
              <div className="flex gap-2">
                <Badge variant="outline" className=" cursor-pointer text-base text-white status-pending bg-purple-800 animate-slide-up"
                >
                  Pending Review
                </Badge>
                <Badge variant="outline" className=" cursor-pointer text-base text-white status-in-progress bg-blue-800 animate-slide-up">
                  In Progress
                </Badge>
                <Badge variant="outline" className=" cursor-pointer p-3 text-base text-white status-late bg-red-700 animate-slide-up">
                  Overdue
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockTasks.map((task, index) => (
                <div 
                  key={task.id} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <TaskCard task={task} />
                </div>
              ))}
            </div>
          </div>
        </main>

        <CreateTaskDialog 
  open={isCreateTaskOpen} 
  onOpenChange={setIsCreateTaskOpen}
  onCreateTask={(newTask) => {
    console.log("New task created:", newTask);
   
  }}
/>

      </div>
    );
  };

  export default Dashboard;