import { create } from 'zustand';
import { Lesson, Module, UserProgress } from '../types';

interface LessonStore {
  modules: Module[];
  currentModule: number;
  userProgress: UserProgress;
  setCurrentModule: (moduleId: number) => void;
  completeLesson: (moduleId: number, lessonId: string) => void;
  earnPoints: (points: number) => void;
  unlockAchievement: (achievementId: string) => void;
}

const initialModules: Module[] = [
  {
    id: 1,
    title: 'Basics',
    description: 'Core Java fundamentals and syntax',
    lessons: [
      {
        id: 'basics-1',
        title: 'Variables & Data Types',
        description: 'Understanding Java variables and primitive data types',
        content: 'Learn about integers, doubles, booleans, and strings...',
        points: 100,
        quizzes: [
          {
            question: 'Which keyword is used to declare a constant in Java?',
            options: ['var', 'let', 'final', 'const'],
            correctAnswer: 'final'
          }
        ],
        codingChallenge: {
          instructions: 'Create variables of each primitive type',
          template: '// Declare your variables here\n\n',
          solution: 'int number = 42;\nboolean isValid = true;\ndouble price = 19.99;\nchar grade = \'A\';'
        }
      }
    ],
    requiredPoints: 0
  },
  {
    id: 2,
    title: 'Intermediate',
    description: 'Object-oriented programming concepts',
    lessons: [
      {
        id: 'intermediate-1',
        title: 'Classes & Objects',
        description: 'Learn about classes, objects, and inheritance',
        content: 'Understanding object-oriented programming principles...',
        points: 150,
        quizzes: [
          {
            question: 'What keyword is used to inherit from a class?',
            options: ['extends', 'implements', 'inherits', 'using'],
            correctAnswer: 'extends'
          }
        ],
        codingChallenge: {
          instructions: 'Create a class with inheritance',
          template: 'class Animal {\n  // Add your code here\n}',
          solution: 'class Animal {\n  private String name;\n  public void makeSound() {}\n}'
        }
      }
    ],
    requiredPoints: 500
  }
];

export const useLessonStore = create<LessonStore>((set) => ({
  modules: initialModules,
  currentModule: 0,
  userProgress: {
    completedLessons: [],
    points: 0,
    level: 1,
    achievements: [],
    currentStreak: 0,
    lastActive: new Date()
  },
  setCurrentModule: (moduleId) => set({ currentModule: moduleId }),
  completeLesson: (moduleId, lessonId) =>
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        completedLessons: [...state.userProgress.completedLessons, lessonId],
        lastActive: new Date()
      }
    })),
  earnPoints: (points) =>
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        points: state.userProgress.points + points,
        level: Math.floor((state.userProgress.points + points) / 1000) + 1
      }
    })),
  unlockAchievement: (achievementId) =>
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        achievements: [...state.userProgress.achievements, achievementId]
      }
    }))
}));
