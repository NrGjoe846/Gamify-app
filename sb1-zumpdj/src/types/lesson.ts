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