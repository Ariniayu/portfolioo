// ProjectDetail.jsx
import { useParams } from 'react-router-dom';
import projects from '../data/project.jsx';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  if (!project) return <div>Project not found!</div>;

  const designProcess = project.designProcess || [];
  const caseStudy = project.caseStudy || {};
  const testimonial = project.testimonial || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 text-white relative overflow-hidden">
      {/* Dark Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.3)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Subtle Glow Effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-900 filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-900 filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [20, -20, 20],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-amber-900 filter blur-3xl opacity-5"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hero Section - Dark dengan aksen */}
      <motion.section 
        className="relative py-24 bg-gradient-to-br from-gray-900/80 to-blue-900/40 border-b border-gray-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {project.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {project.description}
          </motion.p>
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span className="inline-block px-6 py-3 bg-blue-900/50 border border-blue-700 rounded-full text-blue-200 font-medium">
              {project.category}
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Showcase - Dark Elegant */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-800 to-purple-800 rounded-2xl blur-xl opacity-10"></div>
            <img 
              src={project.image} 
              alt={project.title}
              className="relative w-full rounded-xl shadow-2xl border border-gray-800"
            />
          </div>
          
          <motion.div 
            className="bg-gray-900/60 rounded-2xl p-8 border border-gray-800 backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Project Overview
            </h2>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-full text-gray-300 hover:bg-gray-700/80 transition-all duration-300">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href={project.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-blue-300 text-blue-950 hover:bg-blue-700 border border-blue-600 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-blue-900/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Prototype
              </motion.a>
              
              {project.githubLink && (
                <motion.a 
                  href={project.githubLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-xl font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Link Website
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Design Process Section - Dark Theme */}
      {designProcess.length > 0 && (
        <div className="relative py-20 bg-gray-900/40 border-y border-gray-800">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-3xl font-bold text-center mb-16 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Design Thinking Process
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {designProcess.map((process, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-900/80 border border-gray-800 p-6 rounded-xl hover:border-blue-700 transition-all duration-500 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {process.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {process.stage}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {process.description}
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {process.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Case Study Section - Dark Professional */}
      {caseStudy.problem && (
        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Case Study
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gray-900/60 border border-gray-800 rounded-xl p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Problem Statement</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {caseStudy.problem}
              </p>

              <h3 className="text-xl font-semibold mb-6 text-blue-400">Challenges</h3>
              <ul className="text-gray-300 space-y-3">
                {caseStudy.challenges?.map((challenge, index) => (
                  <li key={index} className="flex items-start bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gray-900/60 border border-gray-800 rounded-xl p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-amber-400">Solution</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {caseStudy.solution}
              </p>

              <h3 className="text-xl font-semibold mb-6 text-amber-400">Key Features</h3>
              <ul className="text-gray-300 space-y-3">
                {caseStudy.features?.map((feature, index) => (
                  <li key={index} className="flex items-start bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                    <span className="text-amber-500 mr-3 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Results */}
          {caseStudy.results && (
            <motion.div 
              className="mt-16 bg-gray-900/80 border border-gray-800 p-8 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center text-amber-300">Results & Impact</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudy.results.map((result, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-amber-600/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-2xl mb-3">⭐</div>
                    <p className="text-gray-300 text-sm">{result}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Testimonial - Dark Elegant */}
      {testimonial.text && (
        <div className="relative py-20 bg-gray-900/60 border-t border-gray-800">
          <div className="container mx-auto px-6 text-center">
            <motion.blockquote 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl italic mb-8 text-gray-300 leading-relaxed bg-gray-800/30 p-8 rounded-xl border border-gray-700">
                "{testimonial.text}"
              </p>
              <cite className="text-blue-400 not-italic font-semibold text-lg">
                {testimonial.author}
              </cite>
            </motion.blockquote>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;