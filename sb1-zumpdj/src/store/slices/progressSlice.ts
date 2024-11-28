import { StateCreator } from 'zustand';
import { UserProgress } from '../../types';

export interface ProgressSlice {
  userProgress: UserProgress;
  gainXp: (amount: number) => void;
  updateStreak: () => void;
  updateLearningPath: (strengths: string[], weaknesses: string[]) => void;
  setDailyGoal: (goal: number) => void;
  updateDailyProgress: (progress: number) => void;
  selectCourse: (courseId: string) => void;
}

const generateLearningPath = (weaknesses: string[]): string[] => {
  return weaknesses.map(weakness => `improve-${weakness}`);
};

export const createProgressSlice: StateCreator<ProgressSlice> = (set) => ({
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
    dailyProgress: 0,
    currentCourse: 'java',
    courseProgress: {
      java: {
        completed: [],
        currentLesson: 'java-intro',
        level: 'Basics'
      }
    }
  },
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
        learningPath: generateLearningPath(weaknesses)
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
    })),
  selectCourse: (courseId: string) =>
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        currentCourse: courseId
      }
    }))
});