import React from 'react';
import { motion } from 'framer-motion';
import { Book, Lock, CheckCircle } from 'lucide-react';
import { Module } from '../types';
import { useLessonStore } from '../store/lessonStore';

interface ModuleCardProps {
  module: Module;
  isLocked: boolean;
  onSelect: () => void;
}

export function ModuleCard({ module, isLocked, onSelect }: ModuleCardProps) {
  const { userProgress } = useLessonStore();
  const completedLessons = module.lessons.filter(lesson => 
    userProgress.completedLessons.includes(lesson.id)
  ).length;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative rounded-xl p-6 ${
        isLocked ? 'bg-gray-100' : 'bg-white'
      } shadow-sm border-2 transition-all duration-200`}
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${isLocked ? 'bg-gray-200' : 'bg-blue-50'}`}>
          {isLocked ? (
            <Lock className="w-8 h-8 text-gray-400" />
          ) : (
            <Book className="w-8 h-8 text-blue-500" />
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-lg">{module.title}</h3>
          <p className="text-gray-600 text-sm">{module.description}</p>
          
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm">
                {completedLessons}/{module.lessons.length} Completed
              </span>
            </div>
            
            {isLocked && (
              <div className="text-sm text-orange-600">
                Requires {module.requiredPoints} points
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={onSelect}
        disabled={isLocked}
        className={`mt-4 w-full py-2 rounded-lg text-center ${
          isLocked
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {isLocked ? 'Locked' : 'Start Learning'}
      </button>
    </motion.div>
  );
}
