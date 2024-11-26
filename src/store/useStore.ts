import { create } from 'zustand';
import { Lesson, UserProgress } from '../types';

interface StoreState {
  currentLesson: number;
  lessons: Lesson[];
  userProgress: UserProgress;
  hearts: number;
  completeLesson: (lessonId: string) => void;
  loseHeart: () => void;
  gainXp: (amount: number) => void;
  updateStreak: () => void;
  updateLearningPath: (strengths: string[], weaknesses: string[]) => void;
  setDailyGoal: (goal: number) => void;
  updateDailyProgress: (progress: number) => void;
}

const initialLessons: Lesson[] = [
  {
    id: 'java-basics',
    title: 'Java Fundamentals',
    description: 'Learn the core concepts of Java programming',
    icon: 'Code',
    difficulty: 'beginner',
    completed: false,
    xp: 100,
    tags: ['java', 'basics'],
    estimatedTime: 30,
    storyline: {
      title: 'The Code Master\'s Journey',
      description: 'Begin your journey to master Java programming',
      character: 'CodeMaster',
      dialogue: [
        "Welcome to Java programming! I'm your guide, CodeMaster.",
        "Let's start with the fundamentals that every Java developer needs to know.",
        "Are you ready to begin your journey?"
      ],
      backgroundImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97'
    },
    exercises: [
      {
        id: 'variables-101',
        type: 'coding',
        question: 'Create a variable to store a person\'s age',
        description: 'Declare an integer variable named "age" and assign it the value 25',
        difficulty: 'easy',
        correctAnswer: 'int age = 25;',
        explanation: 'In Java, we use "int" to declare integer variables.',
        hints: [
          'Use the "int" keyword',
          'Variable names should be descriptive',
          'Don\'t forget the semicolon'
        ],
        xpReward: 20,
        testCases: [
          {
            input: '',
            expectedOutput: 'int age = 25;',
            description: 'Variable declaration'
          }
        ]
      }
    ]
  },
  {
    id: 'java-oop',
    title: 'Object-Oriented Programming',
    description: 'Master classes, objects, and inheritance',
    icon: 'Box',
    difficulty: 'intermediate',
    completed: false,
    xp: 150,
    tags: ['java', 'oop'],
    estimatedTime: 45,
    exercises: [
      {
        id: 'class-basics',
        type: 'coding',
        question: 'Create a simple class',
        description: 'Create a class named "Person" with name and age properties',
        difficulty: 'medium',
        correctAnswer: `
class Person {
    String name;
    int age;
}`,
        explanation: 'Classes are blueprints for objects, containing properties and methods.',
        hints: [
          'Use the "class" keyword',
          'Properties are variables inside a class',
          'No need for methods yet'
        ],
        xpReward: 30
      }
    ]
  }
];

export const useStore = create<StoreState>((set) => ({
  currentLesson: 0,
  hearts: 5,
  lessons: initialLessons,
  userProgress: {
    userId: '1',
    currentStreak: 0,
    totalXp: 0,
    level: 1,
    completedLessons: [],
    achievements: [],
    lastActive: new Date(),
    learningPath: [],
    strengths: [],
    weaknesses: [],
    dailyGoal: 100,
    dailyProgress: 0
  },
  completeLesson: (lessonId: string) =>
    set((state) => ({
      lessons: state.lessons.map((lesson) =>
        lesson.id === lessonId ? { ...lesson, completed: true } : lesson
      ),
      userProgress: {
        ...state.userProgress,
        completedLessons: [...state.userProgress.completedLessons, lessonId],
        totalXp: state.userProgress.totalXp + (state.lessons.find(l => l.id === lessonId)?.xp || 0),
        dailyProgress: state.userProgress.dailyProgress + (state.lessons.find(l => l.id === lessonId)?.xp || 0)
      }
    })),
  loseHeart: () =>
    set((state) => ({
      hearts: Math.max(0, state.hearts - 1)
    })),
  gainXp: (amount: number) =>
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        totalXp: state.userProgress.totalXp + amount,
        level: Math.floor((state.userProgress.totalXp + amount) / 1000) + 1,
        dailyProgress: state.userProgress.dailyProgress + amount
      }
    })),
  updateStreak: () =>
    set((state) => {
      const lastActive = new Date(state.userProgress.lastActive);
      const today = new Date();
      const diffDays = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));
      
      return {
        userProgress: {
          ...state.userProgress,
          currentStreak: diffDays === 1 ? state.userProgress.currentStreak + 1 : 1,
          lastActive: today
        }
      };
    }),
  updateLearningPath: (strengths: string[], weaknesses: string[]) =>
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        strengths,
        weaknesses,
        learningPath: generateLearningPath(strengths, weaknesses)
      }
    })),
  setDailyGoal: (goal: number) =>
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        dailyGoal: goal
      }
    })),
  updateDailyProgress: (progress: number) =>
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        dailyProgress: progress
      }
    }))
}));

function generateLearningPath(strengths: string[], weaknesses: string[]): string[] {
  // Prioritize lessons based on user's weaknesses while maintaining a balanced progression
  return weaknesses;
}