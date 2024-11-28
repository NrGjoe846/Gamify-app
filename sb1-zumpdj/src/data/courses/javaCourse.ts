import { Code2, BookOpen, Database, Server } from 'lucide-react';
import type { Course } from '../../types';

export const javaCourse: Course = {
  id: 'java',
  title: 'Java Programming',
  description: 'Master Java from basics to advanced concepts with hands-on projects and real-world applications',
  icon: '<Code2 className="w-6 h-6 text-white" />',
  category: 'programming',
  difficulty: 'beginner',
  duration: '12 weeks',
  certification: true,
  skills: [
    'Object-Oriented Programming',
    'Data Structures',
    'Algorithms',
    'Spring Framework',
    'Database Integration',
    'API Development'
  ],
  prerequisites: [],
  lessons: [
    {
      id: 'java-basics',
      title: 'Java Fundamentals',
      description: 'Learn the core concepts of Java programming',
      icon: '<BookOpen className="w-6 h-6" />',
      difficulty: 'beginner',
      completed: false,
      xp: 100,
      tags: ['basics', 'syntax'],
      estimatedTime: 120,
      exercises: [
        {
          id: 'java-basics-1',
          type: 'multiple-choice',
          question: 'What is JVM?',
          description: 'Understanding Java Virtual Machine',
          difficulty: 'easy',
          options: [
            'Java Virtual Machine',
            'Java Variable Method',
            'Java Visual Monitor',
            'Java Version Manager'
          ],
          correctAnswer: 'Java Virtual Machine',
          explanation: 'JVM (Java Virtual Machine) is a crucial component that enables Java\'s "Write Once, Run Anywhere" capability.',
          hints: ['Think about platform independence', 'It\'s related to running Java programs'],
          xpReward: 20
        }
      ]
    }
  ],
  projects: [
    {
      id: 'java-chat-app',
      title: 'Real-time Chat Application',
      description: 'Build a chat application using Java sockets and JavaFX',
      difficulty: 'medium',
      skills: ['Sockets', 'JavaFX', 'Multithreading'],
      estimatedHours: 15,
      xpReward: 500
    }
  ]
};