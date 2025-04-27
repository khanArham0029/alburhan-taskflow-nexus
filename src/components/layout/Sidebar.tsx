
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  CheckSquare, 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  MessageSquare, 
  Users, 
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-20 flex h-full flex-col border-r bg-white transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
      style={{ paddingTop: '4rem' }} // Leave space for navbar
    >
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex flex-col gap-1 px-2">
          <Link to="/">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start",
                !collapsed && "justify-start text-left"
              )}
            >
              <Home className="h-5 w-5 mr-2" />
              {!collapsed && <span>Dashboard</span>}
            </Button>
          </Link>
          <Link to="/tasks">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start",
                !collapsed && "justify-start text-left"
              )}
            >
              <CheckSquare className="h-5 w-5 mr-2" />
              {!collapsed && <span>Tasks</span>}
            </Button>
          </Link>
          <Link to="/calendar">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start",
                !collapsed && "justify-start text-left"
              )}
            >
              <Calendar className="h-5 w-5 mr-2" />
              {!collapsed && <span>Calendar</span>}
            </Button>
          </Link>
          <Link to="/teams">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start",
                !collapsed && "justify-start text-left"
              )}
            >
              <Users className="h-5 w-5 mr-2" />
              {!collapsed && <span>Teams</span>}
            </Button>
          </Link>
          <Link to="/chat">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start",
                !collapsed && "justify-start text-left"
              )}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              {!collapsed && <span>AI Assistant</span>}
            </Button>
          </Link>
        </nav>
        
        <div className="mt-auto">
          <Separator />
          <Link to="/settings">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start mt-2",
                !collapsed && "justify-start text-left"
              )}
            >
              <Settings className="h-5 w-5 mr-2" />
              {!collapsed && <span>Settings</span>}
            </Button>
          </Link>
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute -right-3 top-1/2 h-6 w-6 rounded-full border bg-background" 
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <ChevronRight className="h-3 w-3" />
        ) : (
          <ChevronLeft className="h-3 w-3" />
        )}
      </Button>
    </aside>
  );
};

export default Sidebar;
