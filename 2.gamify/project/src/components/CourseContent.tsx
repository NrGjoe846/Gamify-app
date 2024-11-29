import React from 'react';
import { Exercise } from './Exercise';
import { StorylineIntro } from './StorylineIntro';
import { CourseNavigation } from './CourseNavigation';
import { LessonContent } from './LessonContent';
import { useStore } from '../store/useStore';
import { Course } from '../types';

interface CourseContentProps {
  course: Course;
}

export function CourseContent({ course }: CourseContentProps) {
  const [currentLessonIndex, setCurrentLessonIndex] = React.useState(0);
  const [showStoryline, setShowStoryline] = React.useState(true);
  const [showExercises, setShowExercises] = React.useState(false);
  const { gainXp } = useStore();
  
  const currentLesson = course.lessons[currentLessonIndex];

  const handleLessonComplete = () => {
    if (currentLessonIndex < course.lessons.length - 1) {
      setCurrentLessonIndex(prev => prev + 1);
      setShowStoryline(true);
      setShowExercises(false);
      gainXp(currentLesson.xp);
    }
  };

  const handleStorylineComplete = () => {
    setShowStoryline(false);
  };

  const handleStartExercises = () => {
    setShowExercises(true);
  };

  if (!currentLesson) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        <CourseNavigation
          course={course}
          currentLessonIndex={currentLessonIndex}
          onSelectLesson={setCurrentLessonIndex}
        />
        
        <div className="flex-1">
          {showStoryline && currentLesson.storyline ? (
            <StorylineIntro
              storyline={currentLesson.storyline}
              onComplete={handleStorylineComplete}
            />
          ) : showExercises ? (
            <div className="space-y-8">
              {currentLesson.exercises.map((exercise, index) => (
                <Exercise
                  key={exercise.id}
                  exercise={exercise}
                  onComplete={index === currentLesson.exercises.length - 1 ? handleLessonComplete : undefined}
                />
              ))}
            </div>
          ) : (
            <>
              <LessonContent lesson={currentLesson} />
              <button
                onClick={handleStartExercises}
                className="mt-8 px-6 py-3 bg-gradient-animate rounded-lg text-white font-semibold hover-glow"
              >
                Start Exercises
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}