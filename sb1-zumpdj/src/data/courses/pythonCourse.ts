import { Code2, BookOpen, Database, ChartBar } from 'lucide-react';
import type { Course } from '../../types';

export const pythonCourse: Course = {
  id: 'python',
  title: 'Python Programming',
  description: 'Learn Python for data science, web development, and automation',
  icon: '<Code2 className="w-6 h-6 text-white" />',
  category: 'programming',
  difficulty: 'beginner',
  duration: '10 weeks',
  certification: true,
  skills: [
    'Python Basics',
    'Data Analysis',
    'Web Scraping',
    'Machine Learning',
    'Django',
    'Flask'
  ],
  prerequisites: [],
  lessons: [
    {
      id: 'python-basics',
      title: 'Python Fundamentals',
      description: 'Get started with Python programming',
      icon: '<BookOpen className="w-6 h-6" />',
      difficulty: 'beginner',
      completed: false,
      xp: 100,
      tags: ['basics', 'syntax'],
      estimatedTime: 120,
      exercises: [
        {
          id: 'python-basics-1',
          type: 'multiple-choice',
          question: 'What is Python?',
          description: 'Understanding Python programming language',
          difficulty: 'easy',
          options: [
            'An interpreted language',
            'A compiled language',
            'A markup language',
            'A query language'
          ],
          correctAnswer: 'An interpreted language',
          explanation: 'Python is an interpreted, high-level programming language.',
          hints: ['Think about how Python code is executed', 'It doesn\'t need compilation'],
          xpReward: 20
        }
      ]
    }
  ],
  projects: [
    {
      id: 'python-data-analysis',
      title: 'Data Analysis Dashboard',
      description: 'Create a data visualization dashboard using Python and Streamlit',
      difficulty: 'medium',
      skills: ['Pandas', 'Streamlit', 'Data Visualization'],
      estimatedHours: 12,
      xpReward: 450
    }
  ]
};