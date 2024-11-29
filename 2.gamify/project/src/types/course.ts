import { Lesson } from './lesson';

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'programming' | 'web' | 'mobile' | 'data-science';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lessons: Lesson[];
  prerequisites?: string[];
  duration: string;
  skills: string[];
  projects: Project[];
  certification?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  skills: string[];
  estimatedHours: number;
  xpReward: number;
}