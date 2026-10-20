import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { RoleBadge } from "@/components/ui/role-badge";
import { mockUsers, mockDepartments } from "@/data/mockData";
import { ArrowDown, Users } from "lucide-react";

export function HierarchyChart() {
  const coreMembers = mockUsers.filter(u => u.role === "core");
  const departmentHeads = mockUsers.filter(u => u.role === "head");
  const executives = mockUsers.filter(u => u.role === "executive");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Organization Hierarchy
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Core Members */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mb-3">
              <Badge className="role-core text-sm px-3 py-1">
                Core Members
              </Badge>
            </div>
            <div className="flex justify-center gap-4">
              {coreMembers.map((member) => (
                <motion.div
                  key={member.id}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:shadow-md transition-shadow"
                >
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.email}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>

          {/* Department Heads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="mb-3">
              <Badge className="role-head text-sm px-3 py-1">
                Department Heads
              </Badge>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {mockDepartments.map((dept) => {
                const head = departmentHeads.find(h => h.id === dept.headId);
                const deptExecutives = executives.filter(e => e.department === dept.name);
                
                return (
                  <motion.div
                    key={dept.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                  >
                    <div className="text-center mb-3">
                      <h3 className="font-medium text-sm">{dept.name}</h3>
                      <p className="text-xs text-muted-foreground">{dept.description}</p>
                    </div>
                    
                    {head && (
                      <div className="flex flex-col items-center gap-2 mb-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={head.avatar} />
                          <AvatarFallback>
                            {head.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                          <p className="text-sm font-medium">{head.name}</p>
                          <RoleBadge role={head.role} />
                        </div>
                      </div>
                    )}

                    {/* Department Executives */}
                    {deptExecutives.length > 0 && (
                      <>
                        <div className="flex justify-center mb-2">
                          <ArrowDown className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="space-y-2">
                          {deptExecutives.map((exec) => (
                            <div
                              key={exec.id}
                              className="flex items-center gap-2 p-2 rounded bg-muted/50"
                            >
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={exec.avatar} />
                                <AvatarFallback className="text-xs">
                                  {exec.name.split(" ").map(n => n[0]).join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-xs font-medium">{exec.name}</span>
                              <RoleBadge role={exec.role} className="ml-auto" />
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}