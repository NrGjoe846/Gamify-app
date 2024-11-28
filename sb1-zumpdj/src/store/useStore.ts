import { create } from 'zustand';
import { LessonSlice, createLessonSlice } from './slices/lessonSlice';
import { ProgressSlice, createProgressSlice } from './slices/progressSlice';
import { GameSlice, createGameSlice } from './slices/gameSlice';

export const useStore = create<LessonSlice & ProgressSlice & GameSlice>()((...args) => ({
  ...createLessonSlice(...args),
  ...createProgressSlice(...args),
  ...createGameSlice(...args)
}));