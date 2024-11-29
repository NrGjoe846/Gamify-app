import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BookOpen } from 'lucide-react';
import { Course, Lesson } from '../types';
import { Badge } from './ui';

interface CourseNavigationProps {
  course: Course;
  currentLessonIndex: number;
  onSelectLesson: (index: number) => void;
}

export function CourseNavigation({ course, currentLessonIndex, onSelectLesson }: CourseNavigationProps) {
  return (
    <div className="w-64 bg-white/5 backdrop-blur-lg rounded-lg p-4">
      <h3 className="text-lg font-bold text-glow mb-4">Course Content</h3>
      <div className="space-y-2">
        {course.lessons.map((lesson, index) => (
          <motion.button
            key={lesson.id}
            whileHover={{ x: 4 }}
            onClick={() => onSelectLesson(index)}
            className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors
              ${currentLessonIndex === index 
                ? 'bg-white/10 text-white' 
                : 'text-gray-400 hover:bg-white/5'}`}
          >
            <BookOpen className="w-4 h-4" />
            <div className="flex-1">
              <p className="text-sm font-medium">{lesson.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="default" className="text-xs">
                  {lesson.xp} XP
                </Badge>
                <Badge 
                  variant={lesson.completed ? "success" : "default"}
                  className="text-xs"
                >
                  {lesson.difficulty}
                </Badge>
              </div>
            </div>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}