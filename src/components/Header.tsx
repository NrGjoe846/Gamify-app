import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Flame, Trophy, Star } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Header() {
  const { hearts, userProgress } = useStore();
  const { totalXp, level, currentStreak } = userProgress;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Flame className="w-8 h-8 text-orange-500" />
          <span className="font-bold text-xl">CodeLingo</span>
        </motion.div>
        
        <div className="flex items-center gap-6">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="font-semibold">Level {level}</span>
          </motion.div>

          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">{totalXp} XP</span>
          </motion.div>

          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="font-semibold">{currentStreak} days</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-6 h-6 fill-red-500 text-red-500" />
            <span className="font-semibold">{hearts}</span>
          </motion.div>
        </div>
      </div>
    </header>
  );
}