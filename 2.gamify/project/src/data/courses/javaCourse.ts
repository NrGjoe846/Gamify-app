import { Code2, BookOpen, Database, Server, Binary, Cpu } from 'lucide-react';
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
      id: 'java-intro',
      title: 'Introduction to Java',
      description: 'Learn the fundamentals of Java and its core concepts',
      icon: '<BookOpen className="w-6 h-6" />',
      difficulty: 'beginner',
      completed: false,
      xp: 100,
      tags: ['basics', 'fundamentals'],
      estimatedTime: 60,
      exercises: [
        {
          id: 'java-intro-1',
          type: 'multiple-choice',
          question: 'What does JVM stand for?',
          description: 'Understanding Java Virtual Machine',
          difficulty: 'easy',
          options: [
            'Java Virtual Machine',
            'Java Virtual Manager',
            'Java Versatile Machine',
            'Java Variable Manager'
          ],
          correctAnswer: 'Java Virtual Machine',
          explanation: 'JVM (Java Virtual Machine) is responsible for running Java applications and provides platform independence.',
          hints: ['Think about platform independence', 'It\'s related to running Java programs'],
          xpReward: 20
        },
        {
          id: 'java-intro-2',
          type: 'multiple-choice',
          question: 'What is JDK primarily used for?',
          description: 'Understanding Java Development Kit',
          difficulty: 'easy',
          options: [
            'Running Java programs',
            'Compiling and running Java programs',
            'Managing Java libraries',
            'Debugging applications'
          ],
          correctAnswer: 'Compiling and running Java programs',
          explanation: 'JDK (Java Development Kit) includes tools needed for Java development, including the compiler.',
          hints: ['Think about what developers need', 'It includes development tools'],
          xpReward: 20
        }
      ]
    },
    {
      id: 'java-datatypes',
      title: 'Data Types and Variables',
      description: 'Master Java data types and variable declarations',
      icon: '<Binary className="w-6 h-6" />',
      difficulty: 'beginner',
      completed: false,
      xp: 120,
      tags: ['datatypes', 'variables'],
      estimatedTime: 90,
      exercises: [
        {
          id: 'datatypes-1',
          type: 'multiple-choice',
          question: 'Which of the following is a non-primitive data type?',
          description: 'Understanding Java data types',
          difficulty: 'easy',
          options: [
            'int',
            'float',
            'String',
            'char'
          ],
          correctAnswer: 'String',
          explanation: 'String is a class in Java, making it a non-primitive data type.',
          hints: ['Think about objects vs simple values', 'Classes are non-primitive'],
          xpReward: 25
        }
      ]
    },
    {
      id: 'java-operators',
      title: 'Operators in Java',
      description: 'Learn about different types of operators in Java',
      icon: '<Cpu className="w-6 h-6" />',
      difficulty: 'beginner',
      completed: false,
      xp: 150,
      tags: ['operators', 'basics'],
      estimatedTime: 120,
      exercises: [
        {
          id: 'operators-1',
          type: 'multiple-choice',
          question: 'Which operator checks equality in Java?',
          description: 'Understanding comparison operators',
          difficulty: 'easy',
          options: [
            '=',
            '==',
            '!=',
            '>='
          ],
          correctAnswer: '==',
          explanation: 'The == operator is used to check if two values are equal, while = is used for assignment.',
          hints: ['Assignment vs comparison', 'Think about comparing values'],
          xpReward: 30
        }
      ]
    },
    {
      id: 'java-control',
      title: 'Control Statements',
      description: 'Master control flow statements in Java',
      icon: '<Server className="w-6 h-6" />',
      difficulty: 'beginner',
      completed: false,
      xp: 200,
      tags: ['control-flow', 'loops'],
      estimatedTime: 150,
      exercises: [
        {
          id: 'control-1',
          type: 'multiple-choice',
          question: 'Which loop executes at least once even if the condition is false?',
          description: 'Understanding loop behavior',
          difficulty: 'easy',
          options: [
            'for',
            'while',
            'do-while',
            'if'
          ],
          correctAnswer: 'do-while',
          explanation: 'The do-while loop always executes its body at least once before checking the condition.',
          hints: ['Think about condition checking timing', 'One loop checks after execution'],
          xpReward: 35
        }
      ]
    },
    {
      id: 'java-oop',
      title: 'Object-Oriented Programming',
      description: 'Learn OOP principles in Java',
      icon: '<Database className="w-6 h-6" />',
      difficulty: 'beginner',
      completed: false,
      xp: 250,
      tags: ['oop', 'classes'],
      estimatedTime: 180,
      exercises: [
        {
          id: 'oop-1',
          type: 'multiple-choice',
          question: 'Which principle is focused on reusing existing code?',
          description: 'Understanding OOP principles',
          difficulty: 'easy',
          options: [
            'Polymorphism',
            'Inheritance',
            'Encapsulation',
            'Abstraction'
          ],
          correctAnswer: 'Inheritance',
          explanation: 'Inheritance allows a class to inherit properties and methods from another class, enabling code reuse.',
          hints: ['Think about code reuse', 'Parent-child class relationships'],
          xpReward: 40
        }
      ]
    }
  ],
  projects: [
    {
      id: 'java-basics-project',
      title: 'Student Management System',
      description: 'Build a console-based student management system using Java basics',
      difficulty: 'easy',
      skills: ['Java Basics', 'OOP', 'Control Flow'],
      estimatedHours: 8,
      xpReward: 300
    }
  ]
};