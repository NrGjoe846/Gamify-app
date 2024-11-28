import { motion } from 'framer-motion';
import { Book, Clock, Award } from 'lucide-react';
import { Course } from '../types';
import { Card, Badge, Button } from './ui';

interface CourseCardProps {
  course: Course;
  onSelect: (courseId: string) => void;
  progress?: number;
}

export function CourseCard({ course, onSelect, progress = 0 }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-lg bg-gradient-animate">
          {course.icon}
        </div>
        <Badge variant={progress === 100 ? 'success' : 'default'}>
          {progress}% Complete
        </Badge>
      </div>

      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
      <p className="text-sm text-gray-400 mb-4">{course.description}</p>

      <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <Book className="w-4 h-4" />
          <span>{course.lessons.length} Lessons</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{course.duration}</span>
        </div>
        {course.certification && (
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4 text-yellow-500" />
            <span>Certificate</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {course.skills.slice(0, 3).map(skill => (
          <Badge key={skill} variant="default">
            {skill}
          </Badge>
        ))}
        {course.skills.length > 3 && (
          <Badge variant="default">+{course.skills.length - 3} more</Badge>
        )}
      </div>

      <Button
        variant="primary"
        className="mt-auto w-full"
        onClick={() => onSelect(course.id)}
      >
        {progress > 0 ? 'Continue Learning' : 'Start Course'}
      </Button>
    </Card>
  );
}