
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { tasks, statuses, getStatusColor } from '@/lib/data';
import TaskCard from '@/components/tasks/TaskCard';

const TasksOverview = () => {
  // Group tasks by status
  const tasksByStatus = statuses.reduce((acc, status) => {
    acc[status] = tasks.filter(task => task.status === status);
    return acc;
  }, {} as Record<string, typeof tasks>);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statuses.map(status => (
        <Card key={status} className="overflow-hidden">
          <CardHeader className="py-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium">
                <div className="flex items-center gap-2">
                  <span className={`inline-block w-3 h-3 rounded-full ${getStatusColor(status)}`}></span>
                  {status}
                </div>
              </CardTitle>
              <span className="text-muted-foreground text-sm">
                {tasksByStatus[status].length} tasks
              </span>
            </div>
          </CardHeader>
          <CardContent className="p-3 max-h-[calc(100vh-300px)] overflow-y-auto">
            <div className="flex flex-col gap-3">
              {tasksByStatus[status].map(task => (
                <TaskCard key={task.id} task={task} />
              ))}
              {tasksByStatus[status].length === 0 && (
                <div className="text-center py-6 text-muted-foreground text-sm">
                  No tasks in this category
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TasksOverview;
