import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import SkillBar from '../components/SkillBar';
import InteractiveGallery from '../components/InteractiveGallery';
import adamokap from '../assets/ui/adamokap.png';
import wonderful from '../assets/ui/wonderful.png';
import pos from '../assets/ui/pos.png'

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

  const projects = [
    {
      id: 1,
      title: "Aplikasi Fintech Mobile",
      category: "mobile",
      description: "Redesign UX untuk aplikasi perbankan digital",
      tags: ["Figma", "User Research", "Prototyping"],
      image: adamokap,
      link: "/projects/fintech"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      category: "web",
      description: "Sistem dashboard dengan data visualization",
      tags: ["Sketch", "UI Design", "Design System"],
      image:wonderful,
      link: "/projects/dashboard"
    },
    {
      id: 3,
      title: "AR Shopping Experience",
      category: "other",
      description: "Augmented reality for e-commerce",
      tags: ["Unity", "3D Modeling", "UX Flow"],
      image: pos,
      link: "/projects/ar-shopping"
    },
  ];

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
            UI/UX <span className="text-white">Design</span> & WEB <span className="text-white">Dev</span> <br />
            <span className="text-white">Portfolio</span> on PROCESS
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
              Explore Work
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section with Neon Accents */}
      {/* <section className="py-16 bg-gray-800 px-4 md:px-10%">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="border-b-4 border-cyan-400 pb-2">Design Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <SkillBar skill="User Research" level={90} color="#06b6d4" glow />
          <SkillBar skill="Wireframing" level={85} color="#8b5cf6" glow />
          <SkillBar skill="Prototyping" level={88} color="#3b82f6" glow />
          <SkillBar skill="UI Design" level={92} color="#ec4899" glow />
          <SkillBar skill="Usability Testing" level={80} color="#10b981" glow />
          <SkillBar skill="Design Systems" level={87} color="#f59e0b" glow />
        </div>
      </section> */}

      {/* Projects Filter with Futuristic Style */}
      <motion.div className="flex justify-center gap-4 py-12 px-4 bg-gray-900">
        {['all', 'web', 'mobile', 'other'].map((filter) => (
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

      {/* Interactive Gallery with Dark Theme */}
      {/* <div className="py-16 px-4 bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="border-b-4 border-purple-400 pb-2">Interactive Showcase</span>
        </h2>
        <InteractiveGallery darkMode />
      </div> */}

      {/* Process Section with Futuristic Cards */}
      
      <section className="py-16 px-4 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="border-b-4 border-blue-400 pb-2">Design Process</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Research", icon: "🔍", desc: "User interviews & market analysis", color: "bg-cyan-900/50" },
            { title: "Define", icon: "✏️", desc: "User personas & problem statements", color: "bg-purple-900/50" },
            { title: "Ideate", icon: "💡", desc: "Brainstorming & wireframing", color: "bg-blue-900/50" },
            { title: "Prototype", icon: "🛠️", desc: "Interactive prototypes", color: "bg-indigo-900/50" },
            { title: "Test", icon: "🧪", desc: "Usability testing & iteration", color: "bg-violet-900/50" }
          ].map((step, index) => (
            <motion.div 
              key={step.title}
              className={`${step.color} p-6 rounded-xl border border-gray-700 backdrop-blur-sm text-center relative overflow-hidden group`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-3xl mb-4 relative z-10">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2 relative z-10 text-white">{step.title}</h3>
              <p className="text-gray-400 relative z-10">{step.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </section>

    </motion.div>
  );
};

export default UIUX;