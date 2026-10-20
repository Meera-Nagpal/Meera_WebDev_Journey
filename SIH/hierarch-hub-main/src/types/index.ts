export type UserRole = 'core' | 'head' | 'executive';

export type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'overdue';

export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  avatar?: string;
  joinedAt: Date;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedBy: string;
  assignedTo: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  department?: string;
  attachments?: string[];
  completedAt?: Date;
  submissionNotes?: string;
}

export interface Department {
  id: string;
  name: string;
  headId: string;
  memberCount: number;
  description?: string;
}

export interface TaskSubmission {
  id: string;
  taskId: string;
  submittedBy: string;
  submissionText: string;
  attachments?: string[];
  submittedAt: Date;
  status: 'pending' | 'approved' | 'rejected';
  reviewNotes?: string;
  reviewedBy?: string;
  reviewedAt?: Date;
}

export interface NotificationItem {
  id: string;
  userId: string;
  type: 'task_assigned' | 'task_completed' | 'task_submitted' | 'deadline_reminder';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  actionUrl?: string;
}