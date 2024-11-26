import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Flame } from 'lucide-react';
import { ModuleCard } from './ModuleCard';
import { useLessonStore } from '../store/lessonStore';

export function LearningHub() {
  const { modules, userProgress } = useLessonStore();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Java Learning Path</h1>
          <p className="text-gray-600">Master Java programming through interactive lessons</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <span className="text-2xl font-bold">{userProgress.level}</span>
            </div>
            <span className="text-sm text-gray-600">Level</span>
          </div>

          <div className="text-center">
            <div className="flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-500" />
              <span className="text-2xl font-bold">{userProgress.points}</span>
            </div>
            <span className="text-sm text-gray-600">Points</span>
          </div>

          <div className="text-center">
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-orange-500" />
              <span className="text-2xl font-bold">{userProgress.currentStreak}</span>
            </div>
            <span className="text-sm text-gray-600">Day Streak</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module, index) => (
          <ModuleCard
            key={module.id}
            module={module}
            isLocked={userProgress.points < module.requiredPoints}
            onSelect={() => {/* Handle module selection */}}
          />
        ))}
      </div>
    </div>
  );
}