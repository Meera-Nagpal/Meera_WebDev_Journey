import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Send, X } from "lucide-react";
import { mockUsers, currentUser } from "@/data/mockData";
import { UserRole } from "@/types";
import { RoleBadge } from "@/components/ui/role-badge";
import { useToast } from "@/hooks/use-toast";

export function TaskAssignmentQuick() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [priority, setPriority] = useState("");
  const { toast } = useToast();

  // Filter users based on hierarchy permissions
  const getAssignableUsers = () => {
    if (currentUser.role === "core") {
      return mockUsers.filter(u => u.role === "head" || u.role === "executive");
    } else if (currentUser.role === "head") {
      return mockUsers.filter(u => u.role === "executive" && u.department === currentUser.department);
    }
    return [];
  };

  const assignableUsers = getAssignableUsers();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !assignedTo || !priority) return;

    // Mock task assignment
    toast({
      title: "Task Assigned Successfully",
      description: `"${title}" has been assigned to ${mockUsers.find(u => u.id === assignedTo)?.name}`,
    });

    // Reset form
    setTitle("");
    setDescription("");
    setAssignedTo("");
    setPriority("");
    setIsOpen(false);
  };

  const selectedUser = mockUsers.find(u => u.id === assignedTo);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Quick Task Assignment</CardTitle>
          {!isOpen && (
            <Button
              onClick={() => setIsOpen(true)}
              size="sm"
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              New Task
            </Button>
          )}
        </div>
      </CardHeader>

      {isOpen && (
        <CardContent>
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Create New Task</h3>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-3">
              <Input
                placeholder="Task title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <Textarea
                placeholder="Task description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Assign to
                  </label>
                  <Select value={assignedTo} onValueChange={setAssignedTo} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select user..." />
                    </SelectTrigger>
                    <SelectContent>
                      {assignableUsers.map((user) => (
                        <SelectItem key={user.id} value={user.id}>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback className="text-xs">
                                {user.name.split(" ").map(n => n[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span>{user.name}</span>
                            <RoleBadge role={user.role} className="ml-auto" />
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Priority
                  </label>
                  <Select value={priority} onValueChange={setPriority} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">
                        <Badge variant="secondary">Low</Badge>
                      </SelectItem>
                      <SelectItem value="medium">
                        <Badge variant="outline">Medium</Badge>
                      </SelectItem>
                      <SelectItem value="high">
                        <Badge className="bg-warning text-warning-foreground">High</Badge>
                      </SelectItem>
                      <SelectItem value="urgent">
                        <Badge variant="destructive">Urgent</Badge>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {selectedUser && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={selectedUser.avatar} />
                    <AvatarFallback>
                      {selectedUser.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{selectedUser.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {selectedUser.department}
                    </p>
                  </div>
                  <RoleBadge role={selectedUser.role} className="ml-auto" />
                </motion.div>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <Button type="submit" className="gap-2 flex-1">
                <Send className="h-4 w-4" />
                Assign Task
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </motion.form>
        </CardContent>
      )}
    </Card>
  );
}