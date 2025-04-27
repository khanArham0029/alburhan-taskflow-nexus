
import React from 'react';
import { CalendarClock, Clock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getTeamColor, getPriorityColor } from '@/lib/data';
import { Task } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { format, isAfter, parseISO } from 'date-fns';

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const teamColorClass = getTeamColor(task.team);
  const priorityColorClass = getPriorityColor(task.priority);
  const dueDate = parseISO(task.dueDate);
  const isOverdue = isAfter(new Date(), dueDate) && task.status !== 'Done';
  const displayDate = format(dueDate, 'MMM d');

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="task-card animate-fade-in">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-sm leading-tight mb-1">{task.title}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2">{task.description}</p>
        </div>
      </div>
      
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
            <AvatarFallback className="text-xs">{getInitials(task.assignee.name)}</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">{task.assignee.name}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={priorityColorClass}>
            {task.priority}
          </Badge>
        </div>
      </div>
      
      <div className="mt-3 flex items-center justify-between">
        <Badge variant="outline" className={teamColorClass}>
          {task.team}
        </Badge>
        
        <div className="flex items-center">
          <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
          <span className={`text-xs ${isOverdue ? 'text-destructive' : 'text-muted-foreground'}`}>
            {isOverdue ? 'Overdue' : displayDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
