import { motion } from 'framer-motion';
import { Trophy, Flame, Star, Heart } from 'lucide-react';
import { Card } from './ui/Card';
import { ProgressBar } from './ui/ProgressBar';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { useStore } from '../store/useStore';

export function LearningDashboard() {
  const { userProgress, lessons } = useStore();
  const { totalXp, level, currentStreak, dailyProgress, dailyGoal } = userProgress;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/20 to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-yellow-500/20">
              <Trophy className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Level</p>
              <p className="text-xl font-bold text-glow">{level}</p>
            </div>
          </Card>

          <Card className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-blue-500/20">
              <Star className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total XP</p>
              <p className="text-xl font-bold text-glow">{totalXp}</p>
            </div>
          </Card>

          <Card className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-orange-500/20">
              <Flame className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Streak</p>
              <p className="text-xl font-bold text-glow">{currentStreak} days</p>
            </div>
          </Card>

          <Card className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-red-500/20">
              <Heart className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Lives</p>
              <p className="text-xl font-bold text-glow">5</p>
            </div>
          </Card>
        </div>

        {/* Daily Progress */}
        <Card className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold text-glow mb-1">Daily Goal</h2>
              <p className="text-sm text-gray-400">Keep your streak alive!</p>
            </div>
            <Badge variant="success">
              {dailyProgress} / {dailyGoal} XP
            </Badge>
          </div>
          <ProgressBar value={dailyProgress} max={dailyGoal} />
        </Card>

        {/* Learning Paths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-gradient-animate">
                    {lesson.icon}
                  </div>
                  <Badge variant={lesson.completed ? 'success' : 'default'}>
                    {lesson.completed ? 'Completed' : `${lesson.xp} XP`}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold mb-2">{lesson.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{lesson.description}</p>
                <div className="flex gap-2 mb-4">
                  {lesson.tags.map(tag => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                  ))}
                </div>
                <Button 
                  variant={lesson.completed ? 'secondary' : 'primary'}
                  className="w-full"
                  disabled={index > 0 && !lessons[index - 1].completed}
                >
                  {lesson.completed ? 'Review' : 'Start Learning'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}