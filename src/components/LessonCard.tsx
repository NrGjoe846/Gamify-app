import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Lock, Star } from 'lucide-react';
import type { Lesson } from '../types';

interface LessonCardProps {
  lesson: Lesson;
  isLocked: boolean;
  onClick: () => void;
}

export function LessonCard({ lesson, isLocked, onClick }: LessonCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={isLocked}
      className={`
        relative w-full p-6 rounded-xl shadow-sm border-2 
        ${isLocked ? 'bg-gray-50 border-gray-200' : 'bg-white border-blue-100 hover:border-blue-300'}
        transition-all duration-200
      `}
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${isLocked ? 'bg-gray-100' : 'bg-blue-50'}`}>
          {lesson.completed ? (
            <CheckCircle className="w-8 h-8 text-green-500" />
          ) : isLocked ? (
            <Lock className="w-8 h-8 text-gray-400" />
          ) : (
            <div className="w-8 h-8 text-blue-500">{lesson.icon}</div>
          )}
        </div>
        
        <div className="flex-1 text-left">
          <h3 className={`font-semibold ${isLocked ? 'text-gray-400' : 'text-gray-900'}`}>
            {lesson.title}
          </h3>
          <p className={`text-sm ${isLocked ? 'text-gray-400' : 'text-gray-600'}`}>
            {lesson.description}
          </p>
          
          <div className="flex items-center gap-2 mt-2">
            <span className={`text-sm px-2 py-0.5 rounded-full ${
              lesson.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
              lesson.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {lesson.difficulty}
            </span>
            
            <div className="flex items-center gap-1 text-sm text-yellow-500">
              <Star className="w-4 h-4" />
              <span>{lesson.xp} XP</span>
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}