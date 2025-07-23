import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, isHovered }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg bg-black bg-opacity-60"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {isHovered && (
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
            >
           <Link
              to={`/ui/projects/${project.id}`} // Sesuaikan path dengan route
              className="px-6 py-2 bg-white text-purple-700 font-semibold rounded-full"
            >
              View Project
            </Link>
          </motion.div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 border-1 border-gray-500 bg-gray-800 text-gray-100 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;