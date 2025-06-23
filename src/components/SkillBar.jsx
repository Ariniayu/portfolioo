import { motion } from 'framer-motion';

const SkillBar = ({ skill, level, color }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{skill}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-2.5 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default SkillBar;