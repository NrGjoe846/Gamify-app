import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Flame } from 'lucide-react';
import { ModuleCard } from './ModuleCard';
import { useLessonStore } from '../store/lessonStore';

export function LearningHub() {
  const { modules, userProgress } = useLessonStore();

  return (
    <div className="min-h-screen bg-gradient-animate">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div 
          className="glass rounded-xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <h1 className="text-3xl font-bold text-glow mb-2">Java Learning Path</h1>
              <p className="text-gray-400">Master Java programming through interactive lessons</p>
            </div>

            <div className="flex items-center gap-6">
              <motion.div 
                className="text-center hover-glow p-4 rounded-lg glass"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <span className="text-2xl font-bold text-glow">{userProgress.level}</span>
                </div>
                <span className="text-sm text-gray-400">Level</span>
              </motion.div>

              <motion.div 
                className="text-center hover-glow p-4 rounded-lg glass"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-500" />
                  <span className="text-2xl font-bold text-glow">{userProgress.points}</span>
                </div>
                <span className="text-sm text-gray-400">Points</span>
              </motion.div>

              <motion.div 
                className="text-center hover-glow p-4 rounded-lg glass"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <Flame className="w-6 h-6 text-orange-500" />
                  <span className="text-2xl font-bold text-glow">{userProgress.currentStreak}</span>
                </div>
                <span className="text-sm text-gray-400">Day Streak</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

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
    </div>
  );
}