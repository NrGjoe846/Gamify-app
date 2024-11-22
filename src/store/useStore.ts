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
    id: '1',
    title: 'Variables & Data Types',
    description: 'Master the fundamentals of storing and manipulating data',
    icon: 'Variable',
    difficulty: 'beginner',
    completed: false,
    xp: 100,
    tags: ['javascript', 'basics'],
    estimatedTime: 15,
    storyline: {
      title: 'The Lost Robot',
      description: 'Help ROB-E learn about variables to restore its memory banks!',
      character: 'ROB-E',
      dialogue: [
        "Hey there! I'm ROB-E, and I seem to have lost my memory...",
        "Can you help me understand how to store information using these things called 'variables'?",
        "With your help, I might just remember who I am!"
      ],
      backgroundImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e'
    },
    exercises: [
      {
        id: '1-1',
        type: 'multiple-choice',
        question: 'Which keyword is used for constants in modern JavaScript?',
        description: 'Help ROB-E understand how to store unchangeable data!',
        difficulty: 'easy',
        options: ['var', 'let', 'const', 'variable'],
        correctAnswer: 'const',
        explanation: 'const is used to declare constants that cannot be reassigned.',
        hints: [
          'Think about what we use when the value won\'t change',
          'It\'s short for "constant"',
          'This type of variable cannot be reassigned once declared'
        ],
        xpReward: 20,
        aiHints: true,
        interactiveDemo: true
      },
      {
        id: '1-2',
        type: 'real-world',
        question: 'Create a Temperature Converter',
        description: 'ROB-E needs to understand Earth temperatures! Create a converter.',
        difficulty: 'medium',
        correctAnswer: 'const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;',
        explanation: 'This function converts Celsius to Fahrenheit using the standard formula.',
        hints: [
          'Start with declaring a function using const',
          'Use arrow function syntax for modern JavaScript',
          'The formula is (C × 9/5) + 32'
        ],
        xpReward: 50,
        testCases: [
          {
            input: '0',
            expectedOutput: '32',
            description: 'Freezing point of water'
          },
          {
            input: '100',
            expectedOutput: '212',
            description: 'Boiling point of water'
          }
        ],
        realWorldScenario: 'You\'re building a weather app that needs to convert temperatures for users from different countries.',
        aiHints: true
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
    dailyGoal: 50,
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
  // This is a placeholder implementation
  // In a real app, this would use AI to generate a personalized learning path
  return weaknesses;
}