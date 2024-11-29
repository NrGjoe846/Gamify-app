import React from 'react';
import { motion } from 'framer-motion';
import { Lesson } from '../types';
import { Card } from './ui';

interface LessonContentProps {
  lesson: Lesson;
}

export function LessonContent({ lesson }: LessonContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-glow mb-4">{lesson.title}</h2>
        <p className="text-gray-400 text-lg">{lesson.description}</p>
      </div>

      <Card className="prose prose-invert max-w-none">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-glow">Key Concepts</h3>
          <ul className="list-disc pl-6 space-y-2">
            {lesson.tags.map((tag) => (
              <li key={tag} className="text-gray-300">
                {tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')}
              </li>
            ))}
          </ul>
        </div>
      </Card>

      <Card className="prose prose-invert max-w-none">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-glow">Learning Time</h3>
          <p className="text-gray-300">
            Estimated time to complete: {lesson.estimatedTime} minutes
          </p>
          <p className="text-gray-300">
            XP Reward: {lesson.xp} points
          </p>
        </div>
      </Card>
    </motion.div>
  );
}