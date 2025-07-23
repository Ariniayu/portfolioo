import { useParams } from 'react-router-dom';
import projects from '../data/project.jsx';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';


const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <div>Project not found!</div>;

  // Data design process (bisa disesuaikan per project)
  const designProcess = [
    {
      stage: "Empathize",
      icon: "👥",
      description: "Melakukan user research dan wawancara untuk memahami kebutuhan pengguna",
      deliverables: ["User Interview", "Survey", "Market Research"]
    },
    {
      stage: "Define",
      icon: "✍️",
      description: "Menganalisis data dan membuat user persona & problem statement",
      deliverables: ["User Persona", "Journey Map", "Problem Statement"]
    },
    // Tambahkan stage lainnya...
  ];

  
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{project.description}</p>
        </div>
      </div>

      {/* Project Showcase */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full rounded-xl shadow-2xl border border-gray-700"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-gray-800 rounded-full flex items-center">
                  {tag}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
            >
              View Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Design Process Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Design Thinking Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {designProcess.map((process, index) => (
              <div 
                key={index} 
                className="bg-gray-700 p-6 rounded-xl hover:transform hover:scale-105 transition-all"
              >
                <div className="text-4xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-bold mb-2">{process.stage}</h3>
                <p className="text-gray-300 mb-4">{process.description}</p>
                <ul className="text-sm text-gray-400">
                  {process.deliverables.map((item, i) => (
                    <li key={i} className="mb-1">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Case Study</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Problem</h3>
          <p className="text-lg">
            Pengguna kesulitan menemukan jasa terdekat karena informasi yang tersebar dan tidak terpusat.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Solution</h3>
          <p className="text-lg">
            Kami merancang aplikasi mobile dengan fitur pencarian berbasis lokasi dan sistem rating untuk memudahkan pengguna.
          </p>
          <img 
            src="/path-to-wireframe.jpg" 
            className="mt-6 rounded-lg border border-gray-700"
            alt="Wireframe"
          />
        </div>

        
      </div>

      {/* Testimonial (jika ada) */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl italic mb-4">
              "Desain ini meningkatkan engagement pengguna sebesar 40% dan mengurangi waktu pencarian jasa hingga 60%"
            </p>
            <cite className="text-blue-400">- Product Manager Adajasa</cite>
          </blockquote>
        </div>
      </div>

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

    </div>
  );
};

export default ProjectDetail;