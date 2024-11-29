import { Globe, Layout, Code2, Palette } from 'lucide-react';
import type { Course } from '../../types';

export const webDevCourse: Course = {
  id: 'web-dev',
  title: 'Web Development',
  description: 'Master modern web development with HTML, CSS, and JavaScript',
  icon: '<Globe className="w-6 h-6 text-white" />',
  category: 'web',
  difficulty: 'beginner',
  duration: '16 weeks',
  certification: true,
  skills: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Node.js',
    'Responsive Design'
  ],
  prerequisites: [],
  lessons: [
    {
      id: 'html-basics',
      title: 'HTML Fundamentals',
      description: 'Learn the building blocks of web pages',
      icon: '<Layout className="w-6 h-6" />',
      difficulty: 'beginner',
      completed: false,
      xp: 100,
      tags: ['html', 'basics'],
      estimatedTime: 90,
      exercises: [
        {
          id: 'html-basics-1',
          type: 'coding',
          question: 'Create a simple HTML page',
          description: 'Build a webpage with basic HTML elements',
          difficulty: 'easy',
          correctAnswer: '<!DOCTYPE html>\n<html>\n<head>\n<title>My Page</title>\n</head>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>',
          explanation: 'This is the basic structure of an HTML document.',
          hints: ['Start with DOCTYPE declaration', 'Remember to include head and body sections'],
          xpReward: 20
        }
      ]
    }
  ],
  projects: [
    {
      id: 'portfolio-website',
      title: 'Personal Portfolio',
      description: 'Build a responsive portfolio website showcasing your projects',
      difficulty: 'medium',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      estimatedHours: 20,
      xpReward: 600
    }
  ]
};