
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6">
        <div className="flex items-center mr-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-alburhan-purple">TaskFlow Nexus</span>
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative w-full max-w-sm hidden md:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tasks, projects..."
              className="w-full rounded-md pl-8"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
