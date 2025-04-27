
import { Member, Task, Project, ChatSession, TeamType, PriorityType, StatusType } from './types';

export const members: Member[] = [
  {
    id: '1',
    name: 'Ahmed Al-Farsi',
    avatar: '/placeholder.svg',
    team: 'Production',
    role: 'Production Manager'
  },
  {
    id: '2',
    name: 'Sara Al-Nasser',
    avatar: '/placeholder.svg',
    team: 'Content',
    role: 'Content Strategist'
  },
  {
    id: '3',
    name: 'Mohammed Al-Qahtani',
    avatar: '/placeholder.svg',
    team: 'Graphic',
    role: 'Lead Designer'
  },
  {
    id: '4',
    name: 'Layla Al-Rashid',
    avatar: '/placeholder.svg',
    team: 'Operations',
    role: 'Operations Director'
  },
  {
    id: '5',
    name: 'Omar Al-Mahmoud',
    avatar: '/placeholder.svg',
    team: 'Production',
    role: 'Video Producer'
  },
  {
    id: '6',
    name: 'Noor Al-Khalid',
    avatar: '/placeholder.svg',
    team: 'Content',
    role: 'Content Writer'
  },
  {
    id: '7',
    name: 'Khalid Al-Otaibi',
    avatar: '/placeholder.svg',
    team: 'Graphic',
    role: 'UI/UX Designer'
  },
  {
    id: '8',
    name: 'Fatima Al-Sulaiman',
    avatar: '/placeholder.svg',
    team: 'Operations',
    role: 'Project Coordinator'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'Annual Conference',
    description: 'Planning and execution of the annual AlBurhan Institute academic conference',
    team: 'Operations',
    startDate: '2025-05-15',
    endDate: '2025-06-30'
  },
  {
    id: '2',
    name: 'New Website Launch',
    description: 'Redesign and development of the Institute website',
    team: 'Graphic',
    startDate: '2025-04-01',
    endDate: '2025-07-15'
  },
  {
    id: '3',
    name: 'Educational Series',
    description: 'Production of 10-part educational video series',
    team: 'Production',
    startDate: '2025-04-10',
    endDate: '2025-09-30'
  },
  {
    id: '4',
    name: 'Research Publication',
    description: 'Content development for quarterly research publication',
    team: 'Content',
    startDate: '2025-05-01',
    endDate: '2025-06-01'
  }
];

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Script first episode of educational series',
    description: 'Create the script for the first episode focusing on historical context',
    assignee: members[1], // Sara
    team: 'Content',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2025-04-30',
    createdAt: '2025-04-15',
    projectId: '3'
  },
  {
    id: '2',
    title: 'Design conference brochure',
    description: 'Create the design for the annual conference brochure including speakers and agenda',
    assignee: members[2], // Mohammed
    team: 'Graphic',
    status: 'To Do',
    priority: 'Medium',
    dueDate: '2025-05-20',
    createdAt: '2025-04-18',
    projectId: '1'
  },
  {
    id: '3',
    title: 'Set up filming equipment',
    description: 'Prepare and test all filming equipment for the educational series shoot',
    assignee: members[0], // Ahmed
    team: 'Production',
    status: 'To Do',
    priority: 'High',
    dueDate: '2025-05-05',
    createdAt: '2025-04-20',
    projectId: '3'
  },
  {
    id: '4',
    title: 'Coordinate speaker logistics',
    description: 'Arrange travel and accommodation for all conference speakers',
    assignee: members[3], // Layla
    team: 'Operations',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: '2025-05-30',
    createdAt: '2025-04-17',
    projectId: '1'
  },
  {
    id: '5',
    title: 'Record voiceovers',
    description: 'Record voiceovers for the first 3 episodes of the educational series',
    assignee: members[4], // Omar
    team: 'Production',
    status: 'To Do',
    priority: 'Medium',
    dueDate: '2025-05-12',
    createdAt: '2025-04-22',
    projectId: '3'
  },
  {
    id: '6',
    title: 'Write research summary',
    description: 'Create executive summary of the quarterly research findings',
    assignee: members[5], // Noor
    team: 'Content',
    status: 'Done',
    priority: 'High',
    dueDate: '2025-04-25',
    createdAt: '2025-04-10',
    projectId: '4'
  },
  {
    id: '7',
    title: 'Design new homepage wireframes',
    description: 'Create wireframes for the new institute website homepage',
    assignee: members[6], // Khalid
    team: 'Graphic',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2025-04-28',
    createdAt: '2025-04-15',
    projectId: '2'
  },
  {
    id: '8',
    title: 'Create conference schedule',
    description: 'Finalize and publish the detailed conference schedule',
    assignee: members[7], // Fatima
    team: 'Operations',
    status: 'To Do',
    priority: 'Low',
    dueDate: '2025-06-10',
    createdAt: '2025-04-20',
    projectId: '1'
  },
  {
    id: '9',
    title: 'Edit research papers',
    description: 'Review and edit final drafts of research papers for quarterly publication',
    assignee: members[1], // Sara
    team: 'Content',
    status: 'To Do',
    priority: 'Medium',
    dueDate: '2025-05-15',
    createdAt: '2025-04-19',
    projectId: '4'
  },
  {
    id: '10',
    title: 'Create motion graphics',
    description: 'Design intro and transition motion graphics for educational series',
    assignee: members[2], // Mohammed
    team: 'Graphic',
    status: 'To Do',
    priority: 'Medium',
    dueDate: '2025-05-10',
    createdAt: '2025-04-21',
    projectId: '3'
  },
  {
    id: '11',
    title: 'Develop content strategy',
    description: 'Create 6-month content strategy for institute social media',
    assignee: members[5], // Noor
    team: 'Content',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2025-05-05',
    createdAt: '2025-04-15',
    projectId: '2'
  },
  {
    id: '12',
    title: 'Budget planning',
    description: 'Prepare detailed budget plan for next quarter',
    assignee: members[3], // Layla
    team: 'Operations',
    status: 'Done',
    priority: 'High',
    dueDate: '2025-04-22',
    createdAt: '2025-04-10',
    projectId: '1'
  }
];

export const chatSessions: ChatSession[] = [
  {
    id: '1',
    title: 'Content Ideas for Research Publication',
    createdAt: '2025-04-20',
    messages: [
      {
        id: '1',
        content: 'What topics should we cover in our upcoming research publication?',
        sender: 'user',
        timestamp: '2025-04-20T09:30:00'
      },
      {
        id: '2',
        content: 'Based on current trends and your institute\'s focus areas, consider covering: 1) Innovations in educational technology, 2) Impact of cultural education on community development, 3) Research methodologies in qualitative studies, and 4) International collaboration in academic research. Would you like me to elaborate on any of these topics?',
        sender: 'assistant',
        timestamp: '2025-04-20T09:30:30'
      }
    ]
  },
  {
    id: '2',
    title: 'Conference Planning Assistance',
    createdAt: '2025-04-19',
    messages: [
      {
        id: '1',
        content: 'Can you help me organize the timeline for our conference planning?',
        sender: 'user',
        timestamp: '2025-04-19T14:20:00'
      },
      {
        id: '2',
        content: 'Here\'s a suggested timeline for your conference planning:\n\n3-4 months before: Finalize venue, speakers, and theme\n2-3 months before: Open registration and begin marketing\n1-2 months before: Confirm all logistics, catering, and technical requirements\n2-4 weeks before: Send final communications to attendees and speakers\n1 week before: Final walkthrough and team briefing\n\nWould you like me to help with any specific aspect of this timeline?',
        sender: 'assistant',
        timestamp: '2025-04-19T14:21:00'
      }
    ]
  }
];

export const getTeamColor = (team: TeamType): string => {
  switch (team) {
    case 'Production':
      return 'team-production';
    case 'Content':
      return 'team-content';
    case 'Graphic':
      return 'team-graphic';
    case 'Operations':
      return 'team-operations';
    default:
      return 'badge-outline';
  }
};

export const getPriorityColor = (priority: PriorityType): string => {
  switch (priority) {
    case 'Low':
      return 'priority-low';
    case 'Medium':
      return 'priority-medium';
    case 'High':
      return 'priority-high';
    default:
      return 'badge-outline';
  }
};

export const getStatusColor = (status: StatusType): string => {
  switch (status) {
    case 'To Do':
      return 'status-todo';
    case 'In Progress':
      return 'status-inprogress';
    case 'Done':
      return 'status-done';
    default:
      return 'badge-outline';
  }
};

export const teams: TeamType[] = ['Production', 'Content', 'Graphic', 'Operations'];
export const priorities: PriorityType[] = ['Low', 'Medium', 'High'];
export const statuses: StatusType[] = ['To Do', 'In Progress', 'Done'];
