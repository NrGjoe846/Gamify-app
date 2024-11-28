import React from 'react';
import { motion } from 'framer-motion';
import { Target, Trophy, Star } from 'lucide-react';
import { useStore } from '../store/useStore';

export function DailyProgress() {
  const { userProgress } = useStore();
  const { dailyProgress, dailyGoal } = userProgress;
  const progress = Math.min((dailyProgress / dailyGoal) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-content-primary">Daily Goal</h3>
            <p className="text-sm text-content-secondary">Keep your streak alive!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-success/10 px-4 py-2 rounded-full">
          <Star className="w-4 h-4 text-success" />
          <span className="font-semibold text-success">{dailyProgress} / {dailyGoal} XP</span>
        </div>
      </div>

      <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-success"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {progress >= 100 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-4 flex items-center gap-2 bg-success/10 p-3 rounded-lg"
        >
          <Trophy className="w-5 h-5 text-success" />
          <span className="font-medium text-success">Daily goal completed! +50 XP Bonus!</span>
        </motion.div>
      )}
    </motion.div>
  );
}