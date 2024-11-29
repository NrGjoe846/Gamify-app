import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { Course } from '../types';
import { courses } from '../data/courses';
import { CourseCard } from './CourseCard';
import { Card, Button } from './ui';
import { CourseContent } from './CourseContent';

export function CourseCatalog() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchesFilter = filter === 'all' || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const selectedCourse = courses.find(course => course.id === selectedCourseId);

  if (selectedCourse) {
    return <CourseContent course={selectedCourse} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-glow mb-2">Course Catalog</h1>
          <p className="text-gray-400">Explore our comprehensive programming courses</p>
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-white/20 focus:ring-0 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="ghost" className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filter
          </Button>
        </div>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {['all', 'programming', 'web', 'mobile', 'data-science'].map((category) => (
          <Button
            key={category}
            variant={filter === category ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CourseCard
              course={course}
              onSelect={(courseId) => setSelectedCourseId(courseId)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}