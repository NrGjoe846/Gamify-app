import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import type { Exercise as ExerciseType } from '../types';
import { useStore } from '../store/useStore';
import { CodeEditor } from './CodeEditor';

interface ExerciseProps {
  exercise: ExerciseType;
  onComplete?: () => void;
}

export function Exercise({ exercise, onComplete }: ExerciseProps) {
  const [answer, setAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const { loseHeart, gainXp } = useStore();

  const handleSubmit = () => {
    const correct = answer === exercise.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (!correct) {
      loseHeart();
    } else {
      gainXp(exercise.xpReward);
      if (onComplete) {
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }
  };

  const showHint = () => {
    if (currentHint < exercise.hints.length - 1) {
      setCurrentHint(prev => prev + 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto glass p-6 rounded-xl"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-glow mb-2">{exercise.question}</h2>
        <p className="text-gray-400 mb-4">{exercise.description}</p>
        <div className="flex items-center gap-2 text-sm">
          <span className={`px-2 py-1 rounded-full ${
            exercise.difficulty === 'easy' ? 'bg-green-900/50 text-green-400' :
            exercise.difficulty === 'medium' ? 'bg-yellow-900/50 text-yellow-400' :
            'bg-red-900/50 text-red-400'
          }`}>
            {exercise.difficulty}
          </span>
          <span className="text-blue-400">+{exercise.xpReward} XP</span>
        </div>
      </div>

      {exercise.type === 'multiple-choice' ? (
        <div className="space-y-4">
          {exercise.options?.map((option) => (
            <motion.button
              key={option}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setAnswer(option)}
              className={`
                w-full p-4 rounded-lg glass transition-all hover-glow
                ${answer === option ? 'border-2 border-primary bg-primary/20' : 'border border-gray-800'}
              `}
            >
              {option}
            </motion.button>
          ))}
        </div>
      ) : (
        <CodeEditor
          code={answer}
          onChange={setAnswer}
          language="javascript"
        />
      )}
      
      <div className="mt-6 space-y-4">
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={!answer || showFeedback}
            className="flex-1 py-3 px-6 rounded-lg bg-gradient-animate text-white font-semibold
                     disabled:opacity-50 disabled:cursor-not-allowed hover-glow"
          >
            Check Answer
          </motion.button>
          
          {exercise.hints && exercise.hints.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={showHint}
              className="px-4 rounded-lg glass text-yellow-400 hover-glow"
            >
              <Lightbulb className="w-5 h-5" />
            </motion.button>
          )}
        </div>

        {currentHint > -1 && exercise.hints && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg glass border border-yellow-500/20"
          >
            <p className="text-yellow-400">
              <span className="font-semibold">Hint {currentHint + 1}:</span> {exercise.hints[currentHint]}
            </p>
          </motion.div>
        )}

        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-4 rounded-lg glass flex items-center gap-3 ${
              isCorrect ? 'border-green-500/20' : 'border-red-500/20'
            }`}
          >
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : (
              <XCircle className="w-6 h-6 text-red-500" />
            )}
            <p className={isCorrect ? 'text-green-400' : 'text-red-400'}>
              {isCorrect ? 'Correct!' : exercise.explanation}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}