import React from 'react';
import { motion } from 'framer-motion';
import { Target, Trophy } from 'lucide-react';
import { useStore } from '../store/useStore';

export function DailyProgress() {
  const { userProgress } = useStore();
  const { dailyProgress, dailyGoal } = userProgress;
  const progress = Math.min((dailyProgress / dailyGoal) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold">Daily Goal</h3>
        </div>
        <span className="text-sm text-gray-600">{dailyProgress} / {dailyGoal} XP</span>
      </div>

      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {progress >= 100 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-3 flex items-center gap-2 text-green-600"
        >
          <Trophy className="w-4 h-4" />
          <span className="text-sm font-medium">Daily goal completed!</span>
        </motion.div>
      )}
    </motion.div>
  );
}