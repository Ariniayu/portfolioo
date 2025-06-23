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
         
        </div>
      </motion.section>


    </motion.div>
  );
};

export default UIUX;