import React from 'react';
import { motion } from 'framer-motion';
import type { StorylineSegment } from '../types';

interface StorylineIntroProps {
  storyline: StorylineSegment;
  onComplete: () => void;
}

export function StorylineIntro({ storyline, onComplete }: StorylineIntroProps) {
  const [currentDialogue, setCurrentDialogue] = React.useState(0);

  const handleNext = () => {
    if (currentDialogue < storyline.dialogue.length - 1) {
      setCurrentDialogue(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-[400px] rounded-xl overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${storyline.backgroundImage})`,
          filter: 'brightness(0.7)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      
      <div className="relative h-full flex flex-col justify-end p-6">
        <motion.div
          key={currentDialogue}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white/90 rounded-lg p-4 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold mb-2">{storyline.character}</h3>
          <p className="text-gray-800 mb-4">{storyline.dialogue[currentDialogue]}</p>
          
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {currentDialogue < storyline.dialogue.length - 1 ? 'Next' : 'Start Lesson'}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}