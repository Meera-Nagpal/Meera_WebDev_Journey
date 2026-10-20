import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  CheckSquare,
  Users,
  Bell,
  LogOut,
  Airplay,
  Settings,
  User,
  BadgeIndianRupeeIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Mock user data
const mockUser = {
  name: "Meera Nagpal",
  email: "Meera123@gmail.com",
  role: "Executive",
  department: "Technical",
  avatar: "/avatar.jpg",
  initials: "PC",
  notifications: 2,
};

const navigationItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "My Tasks",
    href: "/tasks",
    icon: CheckSquare,
  },
  {
    title: "Team Members",
    href: "/team",
    icon: Users,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
    badge: mockUser.notifications,
    badgeColor:"bg-red-500 text-white"
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
   {
    title: "Meetings",
    href: "/meetings",
    icon: Airplay,
    badge: 5,
    badgeColor:"bg-green-500 text-white",
    
  },
  
];

export const DashboardSidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getRoleBadgeColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'core member':
        return 'gradient-accent';
      case 'department head':
        return 'gradient-primary';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div className={cn(
      "flex flex-col bg-card border-r border-border transition-all duration-300",
      isCollapsed ? "w-16" : "w-72"
    )}>
      {/* Header */}
      <div className="p-6  -top-2 pb-3 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="max-w-lg h-14 rounded-lg flex items-center justify-center tech-glow bg-gradient-to-r from-blue-500 to-indigo-600">
            <img src="/Acmlogo.png" alt="ACM Logo" className="w-20 h-10 object-contain" />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="font-bold text-lg">ACM</h2>
              <p className=" text-sm text-gray font-semibold">Association for Computing and Machinery</p>
            </div>
          )}
        </div>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 ring-2 mb-12 ring-primary/20">
            <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
            <AvatarFallback className="gradient-primary text-white font-bold">
              {mockUser.initials}
            </AvatarFallback>
          </Avatar>
          
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="font-bold text-lg truncate">{mockUser.name}</p>
              <p className="text-sm  truncate mb-2">
                {mockUser.email}
              </p>
              <Badge 
                variant="outline" 
                className={cn("text-sm", getRoleBadgeColor(mockUser.role))}
              >
                {mockUser.role}
              </Badge>
              <p className="text-sm font-semibold mt-1">
                {mockUser.department}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link key={item.href} to={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-11 transition-all",
                  isActive && "bg-primary/10 text-primary border-primary/20",
                  !isCollapsed ? "px-3" : "px-0 justify-center"
                )}
              >
                <Icon className="w-5 h-5" />
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-left">{item.title}</span>
                    {item.badge && (
                      <Badge className={cn("ml-auto text-xs",item.badgeColor)}>
                        {item.badge}
                      </Badge>
                      
                    )}
                  </>
                )}
              </Button>
            </Link>
          );
        })}
      </nav>

      <Separator />

      {/* Footer Actions */}
      <div className="p-4 space-y-2">
        {/* Theme Toggle */}
        <div className={cn(
          "flex w-full",
          !isCollapsed ? "justify-start px-3" : "justify-center"
        )}>
          <ThemeToggle />
        </div>
        
        <Link to="/login">
          <Button
            variant="ghost"
            className={cn(
              "w-full gap-3 h-11 justify-start hover:bg-accent",
              !isCollapsed ? "px-3" : "px-0 justify-center"
            )}
          >
            <User className="w-5 h-5" />
            {!isCollapsed && <span>Profile</span>}
          </Button>
        </Link>
         <Link to="/">
        <Button
          variant="ghost"
          
          className={cn(
            "w-full gap-3 h-11 text-red-600 hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-950 dark:hover:text-red-300",
            !isCollapsed ? "justify-start px-3" : "px-0 justify-center"
          )}
          
        >
          
          <LogOut className="w-5 h-5" />
         
          {!isCollapsed && <span>Logout</span>}
        
        </Button>
        </Link>
      </div>
    </div>
  );
};