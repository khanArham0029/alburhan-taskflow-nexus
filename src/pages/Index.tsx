
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import TasksOverview from '@/components/dashboard/TasksOverview';
import ChatInterface from '@/components/chat/ChatInterface';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TaskDialog from '@/components/tasks/TaskDialog';
import { Task } from '@/lib/types';
import { tasks } from '@/lib/data';

const Index = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col" style={{ marginLeft: 'var(--sidebar-width, 256px)' }}>
        {/* Top Navigation Bar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="container mx-auto py-6 px-4 md:px-6 flex-1">
          <DashboardHeader />
          
          <Tabs defaultValue="tasks" className="mt-6">
            <TabsList className="mb-4">
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="chat">AI Assistant</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tasks">
              <TasksOverview />
            </TabsContent>
            
            <TabsContent value="chat">
              <ChatInterface />
            </TabsContent>
          </Tabs>
        </main>
      </div>
      
      {selectedTask && (
        <TaskDialog 
          task={selectedTask} 
          open={dialogOpen} 
          onOpenChange={setDialogOpen}
        />
      )}
    </div>
  );
};

export default Index;
