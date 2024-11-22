import React from 'react';
import { Header } from './components/Header';
import { LessonCard } from './components/LessonCard';
import { Exercise } from './components/Exercise';
import { StorylineIntro } from './components/StorylineIntro';
import { DailyProgress } from './components/DailyProgress';
import { useStore } from './store/useStore';
import { motion } from 'framer-motion';

export function App() {
  const { lessons, completeLesson } = useStore();
  const [selectedLesson, setSelectedLesson] = React.useState<string | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = React.useState(0);
  const [showStoryline, setShowStoryline] = React.useState(false);

  const handleLessonSelect = (lessonId: string) => {
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson?.storyline) {
      setSelectedLesson(lessonId);
      setShowStoryline(true);
    } else {
      setSelectedLesson(lessonId);
    }
  };

  const handleLessonComplete = (lessonId: string) => {
    completeLesson(lessonId);
    setSelectedLesson(null);
    setCurrentExerciseIndex(0);
    setShowStoryline(false);
  };

  const currentLesson = lessons.find(lesson => lesson.id === selectedLesson);
  const currentExercise = currentLesson?.exercises[currentExerciseIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        {selectedLesson && showStoryline && currentLesson?.storyline ? (
          <StorylineIntro
            storyline={currentLesson.storyline}
            onComplete={() => setShowStoryline(false)}
          />
        ) : selectedLesson && currentExercise ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Exercise
              exercise={currentExercise}
              onComplete={() => {
                if (currentExerciseIndex + 1 < (currentLesson?.exercises.length ?? 0)) {
                  setCurrentExerciseIndex(prev => prev + 1);
                } else {
                  handleLessonComplete(selectedLesson);
                }
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Learn to Code</h1>
                <p className="text-lg text-gray-600">Master programming concepts one lesson at a time</p>
              </div>
            </div>

            <DailyProgress />
            
            <div className="grid gap-4 md:grid-cols-2">
              {lessons.map((lesson, index) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <LessonCard
                    lesson={lesson}
                    isLocked={index > 0 && !lessons[index - 1].completed}
                    onClick={() => handleLessonSelect(lesson.id)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}