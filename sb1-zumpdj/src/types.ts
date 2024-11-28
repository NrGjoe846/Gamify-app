export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  exercises: Exercise[];
  completed: boolean;
  xp: number;
  tags: string[];
  storyline?: StorylineSegment;
  prerequisites?: string[];
  estimatedTime: number;
  category?: string;
  level?: string;
}

export interface StorylineSegment {
  title: string;
  description: string;
  character: string;
  dialogue: string[];
  backgroundImage?: string;
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'coding' | 'debugging' | 'real-world' | 'mini-game';
  question: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  options?: string[];
  correctAnswer: string;
  explanation: string;
  hints: string[];
  testCases?: TestCase[];
  xpReward: number;
  timeLimit?: number;
  realWorldScenario?: string;
  aiHints?: boolean;
  interactiveDemo?: boolean;
  category?: string;
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  description: string;
}

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
    [courseId: string]: {
      completed: string[];
      currentLesson: string;
      level: string;
    };
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