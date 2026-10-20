import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { CreateTaskDialog } from "./CreateTaskDialog";


export interface Task {
  id: string;
  title: string;
  description: string;  
  assignedBy: string;
  assignedTo: string;
  deadline?: string;
  status: 'pending' | 'in-progress' | 'completed' | 'late';
  priority: 'low' | 'medium' | 'high';
}

export const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCreateTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
    setDialogOpen(false);
  };
    
  

  return (
    <div>
      <button onClick={() => setDialogOpen(true)}>Add Task</button>
      <CreateTaskDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onCreateTask={handleCreateTask}
      />
      
    </div>
  );
};
