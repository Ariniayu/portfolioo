import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gd from '../assets/gd.svg';
import ui from '../assets/ui.svg';
import vid from '../assets/vid.svg';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Porto() {
    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Stagger animation for cards
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Video Editing Card */}
                    <motion.div variants={cardVariants}>
                        <Link to="/video" className="group relative" onClick={() => window.scrollTo(0, 0)}>
                            <div className="relative bg-gray-900 h-72 flex flex-col items-center justify-between rounded-xl p-6 border border-gray-700 overflow-hidden transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                {/* Blue-Yellow Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                {/* Animated Border */}
                                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-400/30 transition-all duration-500"></div>
                                
                                <div className="flex-1 flex flex-col items-center justify-center z-10">
                                    <img src={vid} alt="Video Editing" className="h-20 w-20 object-contain mb-5 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400 text-xl md:text-2xl font-medium text-center mb-2">
                                        Video Editor & Photography
                                    </h3>
                                </div>
                                <div className="flex items-center justify-center space-x-2 z-10">
                                    <span className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors">See Portfolio</span>
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:scale-110">
                                        <FiArrowUpRight className="text-white text-xs" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Graphic Design Card */}
                    <motion.div variants={cardVariants}>
                        <Link to="/desain" className="group relative" onClick={() => window.scrollTo(0, 0)}>
                            <div className="relative bg-gray-900 h-72 flex flex-col items-center justify-between rounded-xl p-6 border border-gray-700 overflow-hidden transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-400/30 transition-all duration-500"></div>
                                
                                <div className="flex-1 flex flex-col items-center justify-center z-10">
                                    <img src={gd} alt="Graphic Design" className="h-20 w-20 object-contain mb-5 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400 text-xl md:text-2xl font-medium text-center mb-2">
                                        Graphic Design
                                    </h3>
                                </div>
                                <div className="flex items-center justify-center space-x-2 z-10">
                                    <span className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors">See Portfolio</span>
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:scale-110">
                                        <FiArrowUpRight className="text-white text-xs" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* UI/UX Design Card */}
                    <motion.div variants={cardVariants}>
                        <Link to="/ui" className="group relative" onClick={() => window.scrollTo(0, 0)}>
                            <div className="relative bg-gray-900 h-72 flex flex-col items-center justify-between rounded-xl p-6 border border-gray-700 overflow-hidden transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-400/30 transition-all duration-500"></div>
                                
                                <div className="flex-1 flex flex-col items-center justify-center z-10">
                                    <img src={ui} alt="UI/UX Design" className="h-20 w-20 object-contain mb-5 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400 text-xl md:text-2xl font-medium text-center mb-2">
                                        UI/UX Design & Web Development
                                    </h3>
                                </div>
                                <div className="flex items-center justify-center space-x-2 z-10">
                                    <span className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors">See Portfolio</span>
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:scale-110">
                                        <FiArrowUpRight className="text-white text-xs" />
                                    </div>                            
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}