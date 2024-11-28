import { StateCreator } from 'zustand';
import { Lesson } from '../../types';
import { javaLessons } from '../../data/javaLessons';

export interface LessonSlice {
  currentLesson: number;
  lessons: Lesson[];
  completeLesson: (lessonId: string) => void;
}

export const createLessonSlice: StateCreator<LessonSlice> = (set) => ({
  currentLesson: 0,
  lessons: javaLessons,
  completeLesson: (lessonId: string) =>
    set((state) => ({
      lessons: state.lessons.map((lesson) =>
        lesson.id === lessonId ? { ...lesson, completed: true } : lesson
      )
    }))
});