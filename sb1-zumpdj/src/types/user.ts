export interface UserProgress {
  userId: string;
  currentStreak: number;
  totalXp: number;
  level: number;
  completedLessons: string[];
  achievements: Achievement[];
  lastActive: Date;
  learningPath: string[];
  strengths: string[];
  weaknesses: string[];
  preferredLearningStyle?: 'visual' | 'practical' | 'theoretical';
  dailyGoal: number;
  dailyProgress: number;
  currentCourse?: string;
  courseProgress: {
    [courseId: string]: CourseProgress;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface CourseProgress {
  completed: string[];
  currentLesson: string;
  level: string;
}