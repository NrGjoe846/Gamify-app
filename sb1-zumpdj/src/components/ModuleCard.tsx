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
      className="glass hover-glow"
    >
      <div className="p-6 rounded-xl">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${isLocked ? 'bg-gray-800' : 'bg-gradient-animate'}`}>
            {isLocked ? (
              <Lock className="w-8 h-8 text-gray-400" />
            ) : (
              <Book className="w-8 h-8 text-white" />
            )}
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-lg text-glow">{module.title}</h3>
            <p className="text-gray-400 text-sm">{module.description}</p>
            
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-300">
                  {completedLessons}/{module.lessons.length} Completed
                </span>
              </div>
              
              {isLocked && (
                <div className="text-sm text-orange-400">
                  Requires {module.requiredPoints} points
                </div>
              )}
            </div>
          </div>
        </div>

        <motion.button
          onClick={onSelect}
          disabled={isLocked}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mt-4 w-full py-2 rounded-lg text-center transition-colors ${
            isLocked
              ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-animate text-white hover-glow'
          }`}
        >
          {isLocked ? 'Locked' : 'Start Learning'}
        </motion.button>
      </div>
    </motion.div>
  );
}