import { Lesson } from '../types';
import { Code2, BookOpen, Cpu, Lock, Network, Shield } from 'lucide-react';

export const javaLessons: Lesson[] = [
  {
    id: 'java-intro',
    title: 'Introduction to Java',
    description: 'Learn the fundamentals of Java programming and understand its core concepts.',
    icon: 'Code2',
    difficulty: 'beginner',
    completed: false,
    xp: 100,
    tags: ['java', 'basics'],
    estimatedTime: 20,
    category: 'Java',
    level: 'Basics',
    storyline: {
      title: 'Your Journey Begins',
      description: 'Start your journey into the world of Java programming',
      character: 'CodeMaster',
      dialogue: [
        "Welcome to Java! I'm CodeMaster, and I'll be your guide.",
        "Java is one of the world's most popular programming languages.",
        "Let's start with the basics and build your foundation in Java programming!"
      ],
      backgroundImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97'
    },
    exercises: [
      {
        id: 'java-intro-1',
        type: 'multiple-choice',
        question: 'What does JVM stand for?',
        description: 'Understanding the core components of Java',
        difficulty: 'easy',
        options: [
          'Java Virtual Machine',
          'Java Variable Manager',
          'Java Version Manager',
          'Java Visual Module'
        ],
        correctAnswer: 'Java Virtual Machine',
        explanation: 'JVM (Java Virtual Machine) is a crucial component that enables Java\'s "Write Once, Run Anywhere" capability.',
        hints: [
          'Think about what makes Java platform-independent',
          'It\'s related to how Java code runs on different systems',
          'The "V" stands for "Virtual"'
        ],
        xpReward: 20
      }
    ]
  },
  // Add more lessons following the same structure for each section
];