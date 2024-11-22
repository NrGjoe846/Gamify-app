import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import type { Exercise as ExerciseType } from '../types';
import { useStore } from '../store/useStore';
import { CodeEditor } from './CodeEditor';

interface ExerciseProps {
  exercise: ExerciseType;
  onComplete: () => void;
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
      setTimeout(() => {
        onComplete();
      }, 1500);
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
      className="max-w-2xl mx-auto p-6"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{exercise.question}</h2>
        <p className="text-gray-600 mb-4">{exercise.description}</p>
        <div className="flex items-center gap-2 text-sm">
          <span className={`px-2 py-1 rounded-full ${
            exercise.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
            exercise.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {exercise.difficulty}
          </span>
          <span className="text-blue-600">+{exercise.xpReward} XP</span>
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
                w-full p-4 rounded-lg border-2 text-left transition-all
                ${answer === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
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
            className="flex-1 py-3 px-6 rounded-lg bg-green-500 text-white font-semibold
                     hover:bg-green-600 disabled:bg-gray-300 transition-colors"
          >
            Check Answer
          </motion.button>
          
          {exercise.hints && exercise.hints.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={showHint}
              className="px-4 rounded-lg border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-50"
            >
              <Lightbulb className="w-5 h-5" />
            </motion.button>
          )}
        </div>

        {currentHint > -1 && exercise.hints && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg bg-yellow-50 border border-yellow-200"
          >
            <p className="text-yellow-800">
              <span className="font-semibold">Hint {currentHint + 1}:</span> {exercise.hints[currentHint]}
            </p>
          </motion.div>
        )}
      </div>
      
      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-4 rounded-lg flex items-center gap-3
                    ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}
        >
          {isCorrect ? (
            <CheckCircle className="w-6 h-6 text-green-500" />
          ) : (
            <XCircle className="w-6 h-6 text-red-500" />
          )}
          <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
            {isCorrect ? 'Correct!' : exercise.explanation}
          </p>
        </motion.div>
      )}

      {exercise.type === 'coding' && exercise.testCases && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Test Cases:</h3>
          <div className="space-y-2">
            {exercise.testCases.map((testCase, index) => (
              <div key={index} className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                <p className="text-sm text-gray-600">{testCase.description}</p>
                <p className="text-sm">
                  <span className="font-mono text-blue-600">Input: {testCase.input}</span>
                  <span className="mx-2">→</span>
                  <span className="font-mono text-green-600">Expected: {testCase.expectedOutput}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}