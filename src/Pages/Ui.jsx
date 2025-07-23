import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import SkillBar from '../components/SkillBar';
import InteractiveGallery from '../components/InteractiveGallery';
import projects from '../data/project.jsx';

const UIUX = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

 

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.div 
      className="min-h-screen bg-gray-900 text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Futuristic Hero Section with Glow Effect */}
      <motion.section 
        className="relative h-[80vh] flex items-center justify-center overflow-hidden"
        style={{ y: yBg, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        
        {/* Animated Glow Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-500 filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-500 filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            x: [50, -50, 50],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            UI/UX <span className="text-white">Design</span> <span className='text-yellow-400'>&</span> WEBSITE <span className="text-white">Portfolio on Progres</span> <br />
            
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
          </motion.p>
        </div>
      </motion.section>

      {/* Projects Filter with Futuristic Style */}
      <motion.div className="flex justify-center gap-4 py-12 px-4 ">
        
        {['all','uiux', 'Website'].map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
              activeFilter === filter 
                ? 'bg-cyan-500/10 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/20' 
                : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid with Hover Effects */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10% py-12 bg-gray-900"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="w-full group"
            >
              <ProjectCard 
                project={project} 
                isHovered={hoveredProject === project.id}
                darkMode
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      


    </motion.div>
  );
};

export default UIUX;