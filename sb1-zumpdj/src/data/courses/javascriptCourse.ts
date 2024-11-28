import { Code2, Braces, Server, Globe } from 'lucide-react';
import type { Course } from '../../types';

export const javascriptCourse: Course = {
  id: 'javascript',
  title: 'JavaScript Mastery',
  description: 'Deep dive into modern JavaScript and popular frameworks',
  icon: '<Braces className="w-6 h-6 text-white" />',
  category: 'programming',
  difficulty: 'intermediate',
  duration: '14 weeks',
  certification: true,
  skills: [
    'ES6+',
    'React',
    'Node.js',
    'TypeScript',
    'Testing',
    'State Management'
  ],
  prerequisites: ['HTML', 'CSS'],
  lessons: [
    {
      id: 'js-basics',
      title: 'JavaScript Fundamentals',
      description: 'Master JavaScript core concepts',
      icon: '<Code2 className="w-6 h-6" />',
      difficulty: 'beginner',
      completed: false,
      xp: 100,
      tags: ['javascript', 'basics'],
      estimatedTime: 120,
      exercises: [
        {
          id: 'js-basics-1',
          type: 'coding',
          question: 'Create a function that reverses a string',
          description: 'Implement string manipulation in JavaScript',
          difficulty: 'easy',
          correctAnswer: 'function reverseString(str) {\n  return str.split("").reverse().join("");\n}',
          explanation: 'This function splits a string into an array, reverses it, and joins it back.',
          hints: ['Use array methods', 'Think about string to array conversion'],
          xpReward: 25
        }
      ]
    }
  ],
  projects: [
    {
      id: 'js-todo-app',
      title: 'Task Management App',
      description: 'Build a full-stack todo application with React and Node.js',
      difficulty: 'medium',
      skills: ['React', 'Node.js', 'Express', 'MongoDB'],
      estimatedHours: 25,
      xpReward: 700
    }
  ]
};