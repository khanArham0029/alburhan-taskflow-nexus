
export type TeamType = "Production" | "Content" | "Graphic" | "Operations";

export type PriorityType = "Low" | "Medium" | "High";

export type StatusType = "To Do" | "In Progress" | "Done";

export interface Member {
  id: string;
  name: string;
  avatar?: string;
  team: TeamType;
  role: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignee: Member;
  team: TeamType;
  status: StatusType;
  priority: PriorityType;
  dueDate: string;
  createdAt: string;
  projectId?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  team: TeamType;
  startDate: string;
  endDate: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: string;
}

export interface ChatSession {
  id: string;
  messages: ChatMessage[];
  title: string;
  createdAt: string;
}
