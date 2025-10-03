import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import VideoReel from '../components/VideoReel';
import { FaHome } from 'react-icons/fa';
// import rekapkkl from '../assets/videos/rekap kkl 2025.mp4'
// import bumper from '../assets/videos/bumper (2).mp4'
// import afterevent from '../assets/videos/After event.mp4';
// import iyaiya from '../assets/videos/iyaiya.mp4';
// import vsga from '../assets/videos/dokumentasi video.mp4';
// import pesan from '../assets/videos/kesan dan pesan.mp4'
// import palan from '../assets/videos/palan.mp4';
// import rudi from '../assets/videos/rudi.mp4';
import bmegallery from '../assets/bumper/bmegallery.png';
// import kkl from '../assets/bumper/kkl.png';
// import semnas from '../assets/bumper/bumper.png'
import sinem from '../assets/bumper/maliocin.png'
import sono from '../assets/bumper/sono.png';
import pm from '../assets/bumper/kopipm.png'
import vlogweb from '../assets/bumper/vlog.png';
// import rudi2 from '../assets/bumper/rudi2.png';
import afterevent2 from '../assets/bumper/afterevent.png';
// import kacamata from '../assets/bumper/kacamata.png';
import demiapa from '../assets/bumper/demiapa.png';
// import iya2 from '../assets/bumper/iyaiya2.png';
import vsga2 from '../assets/bumper/vsga.png';
import canva from '../assets/canva.png';
import ae from '../assets/ae.svg';
import pr from '../assets/pr.svg';
import capcut from '../assets/capcut.svg';
import alam1 from '../assets/photography/alam1.png'
import alam2 from '../assets/photography/alam2.png'
import alam3 from '../assets/photography/alam3.png'
import alam4 from '../assets/photography/alam4.png'
import alam5 from '../assets/photography/alam5.png'
import alam6 from '../assets/photography/alam6.png'
import gereja1 from '../assets/photography/gereja1.png'
import gereja2 from '../assets/photography/gereja2.png'
import hotel1 from '../assets/photography/hotel1.png'
import hotel2 from '../assets/photography/hotel2.png'
import hotel3 from '../assets/photography/hotel3.png'
import hotel4 from '../assets/photography/hotel4.png'
import makan1 from '../assets/photography/makan1.png'
import makan2 from '../assets/photography/makan2.png'
import makan3 from '../assets/photography/makan3.png'
import mm1 from '../assets/photography/mm1.png'
import mm2 from '../assets/photography/mm2.png'
import mm3 from '../assets/photography/mm3.png'
import shutterstock from '../assets/shutterstock.png'
import ig from '../assets/insta.svg'
import mcbook from '../assets/dg/vr.jpg'
import { FiVideo, FiCamera } from 'react-icons/fi';
import ParticleBg from '../components/ParticleBg';
import { FiArrowRight } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
 import adamokap from '../assets/ui/adamokap.png';

const VideoPortfolioPage = () => {
  // State untuk tombol scroll-to-top
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 });

  // Efek untuk menampilkan/menyembunyikan tombol scroll-to-top
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  // Data video portfolio
  const videoProjects = [
    
    {
      id: 1,
      title: "Video Verde Residence",
      category: "Tools: Capcut , Voiceover AI, Assets Video form istock",
      videoUrl: "https://youtu.be/KnltCimPXVw",
      thumbnail: mcbook
    },
    {
      id: 2,
      title: "Video Produk Magang E-Gallery Mahasiswa MI dan Demo Website",
      category: "Tools:  Adobe After Effect, Capcut, Canva dan AI Voice Over",
      videoUrl: "https://youtu.be/KWdqEbJRrM4?si=tZzyKiudgmeVIOu4",
      thumbnail: bmegallery
    },
    // {
    //   id: 3,
    //   title: "Rekap KKL Mahasiswa Manjemen Informatika 2025",
    //   category: "Tools:  Capcut ",
    //   videoUrl: rekapkkl,
    //   thumbnail: kkl
    // },
    // {
    //   id: 4,
    //   title: "Bumper Acara Seminar",
    //   category: "Tools: Canva",
    //   videoUrl: bumper,
    //   thumbnail: semnas
    // },
    {
      id: 3,
      title: "Company Profile Museum Sonobudoyo ",
      category: "Tools: Adobe Premiere",
      videoUrl: "https://youtu.be/VHlNe8GuN_Q?si=2lpEsb3dGgISzcUs",
      thumbnail: sono
    },
    {
      id: 4,
      title: "UMKM Kopi PM",
      category: "Tools: Adobe Premiere",
      videoUrl: "https://youtu.be/S-YSIKDaG4o?si=LV0fq6F9ZL9yv5cQ",
      thumbnail: pm
    },
    {
      id: 5,
      title: "Vlog Cinematik",
      category: "Tools: Adobe Premiere",
      videoUrl: "https://youtu.be/3szbvdHXJtc?si=dhZdpE-fImCG0XtV",
      thumbnail: sinem
    },
    {
      
      id: 6,
    title: "Video Luaran Pengabdian Dosen pada Bank Sampah Mitra Insani",
    category: "Tools: Capcut, Canva dan AI Voice Over",
    videoUrl: "https://www.youtube.com/embed/VghbO97brUU",
    thumbnail: "https://img.youtube.com/vi/VghbO97brUU/hqdefault.jpg"
    },
    {
      id: 7,
      title: "Video Aplikasi Adajasa",
      category: "Tools: Canva, Capcut , Voiceover AI",
      videoUrl: "https://youtu.be/5_edwcJBGbU?si=dq2BAXY2NrI-KgxV",
      thumbnail: adamokap
    },
    
    {
      id: 8,
      title: "Vlog Pribadi",
      category: "Tools: Adobe Premiere",
      videoUrl: "https://youtu.be/jrqcDkwoRLU?si=7swdn7__OuSAo1IP",
      thumbnail: vlogweb
    },
    
  
  ];

  const videoPotrait = [
    {
      id: 1,
      title: "Kesan dan Pesan VSGA 2024",
      category: "Tools: Capcut ",
      videoUrl: "https://youtube.com/shorts/iJJ3GxmbXEk?si=fkTVltNscW9YC_w_",
      thumbnail: vsga2
    },
    {
      id: 2,
      title: "After Event VSGA 2024",
      category: "Tools:  Capcut",
      videoUrl: "https://youtube.com/shorts/0rh5A4bAsS4?si=o4NtVV_j_DKBmcAU",
      thumbnail: demiapa
    },
    {
      id: 3,
      title: "After Event Hackthon 2024",
      category: "Tools:  Capcut ",
      videoUrl:  "https://youtube.com/shorts/HgHAq1p3UT0?si=UFciHG5EEIREBSDZ",
      thumbnail: afterevent2
    },
    // {
    //   id: 4,
    //   title: "Promosi MI trend 1",
    //   category: "Tools:  Capcut ",
    //   videoUrl: iyaiya,
    //   thumbnail: iya2
    // },
    // {
    //   id: 5,
    //   title: "Promosi MI trend 2",
    //   category: "Tools: Capcut",
    //   videoUrl: palan,
    //   thumbnail: kacamata
    // },
    // {
    //   id: 6,
    //   title: "Promosi MI Trend 3",
    //   category: "Tools: Capcut",
    //   videoUrl: rudi,
    //   thumbnail: rudi2
    // },
    
  ];

 

  return (
    
    <div className="relative bg-gray-900 min-h-screen overflow-hidden">
      {/* Background Futuristik dengan Parallax */}
      <ParticleBg />
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[url('/assets/bg-patterns/grid.svg')] opacity-10 pointer-events-none" />

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-100"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            VIDEO EDITOR & PHOTOGRAPHY PORTFOLIO
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Select Your Destination
          </motion.p>

          <motion.div
            className="flex gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button 
              onClick={() => document.getElementById('video-editor-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-gray-900 h-40 w-40 md:h-48 md:w-48 rounded-xl p-6 border border-gray-700 overflow-hidden transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-400/30 transition-all duration-500"></div>
              
              <div className="flex flex-col items-center justify-center h-full z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FiVideo className="text-white text-2xl" />
                </div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-100 text-lg md:text-xl font-medium">
                  Video Editor
                </h3>
              </div>
            </motion.button>

            <motion.button 
              onClick={() => document.getElementById('photography-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-gray-900 h-40 w-40 md:h-48 md:w-48 rounded-xl p-6 border border-gray-700 overflow-hidden transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-400/30 transition-all duration-500"></div>
              
              <div className="flex flex-col items-center justify-center h-full z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FiCamera className="text-white text-2xl" />
                </div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400 text-lg md:text-xl font-medium">
                  Photography
                </h3>
              </div>
            </motion.button>
          </motion.div>
        </section>

        {/* Video Gallery */}
        <section id="video-editor-section"
          ref={ref}
          className="py-20 px-4 pt-2 sm:px-8 lg:px-16" 
        >
          <motion.h2
              className="text-4xl font-semibold pt-8 mb-12 text-center text-white relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
            Portfolio Editing Video
            <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10">
              {/* Adobe Premiere Pro Logo */}
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative"
              >
                <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 group-hover:border-blue-400 transition-all duration-300">
                  <img 
                    src={pr} 
                    alt="Adobe Premiere Pro" 
                    className="h-12 w-12 md:h-12 md:w-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
              </div>
              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Premiere Pro
              </span>
            </motion.div>

    {/* Adobe After Effects Logo */}
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative"
    >
      <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 group-hover:border-purple-400 transition-all duration-300">
        <img 
          src={ae} 
          alt="Adobe After Effects" 
          className="h-12 w-12 md:h-12 md:w-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
        After Effects
      </span>
    </motion.div>

    {/* CapCut Logo */}
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative"
    >
      <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 group-hover:border-blue-500 transition-all duration-300">
        <img 
          src={capcut} 
          alt="CapCut" 
          className="h-12 w-12 md:h-12 md:w-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
        CapCut
      </span>
    </motion.div>

    {/* Canva Logo */}
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative"
    >
      <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 group-hover:border-blue-300 transition-all duration-300">
        <img 
          src={canva} 
          alt="Canva" 
          className="h-12 w-12 md:h-12 md:w-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
        Canva
      </span>
    </motion.div>
  </div>
  <div className='pt-16 '>
    Youtube and Custom Screen
  </div>
</motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 pt-2 gap-8 max-w-6xl mx-auto">
            {videoProjects.map((project, index) => (
              <VideoReel 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
          <div className="flex justify-center mt-12"> {/* mt-12 untuk margin atas, bisa disesuaikan */}
    <motion.button
      onClick={() => window.open("https://drive.google.com/drive/folders/1fwvaMXgbSlxi0yvUQUQU0tmdCRMxXCEE?usp=sharing")}
      className="group relative bg-gray-900/80 h-16 w-48 rounded-full border border-gray-700 overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:border-yellow-400 flex items-center justify-center mx-auto" 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex items-center justify-center z-10 space-x-2">
        <span className="text-gray-200 group-hover:text-yellow-300 text-lg font-medium transition-colors duration-300">
          Selengkapnya



        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-yellow-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </motion.button>
  </div>
        </section>

         <section 
          className="py-20 px-4 pt-2 sm:px-8 lg:px-16"
        >
          <motion.h2
            className="text-4xl font-semibold mb-12 text-center text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Reels, Tiktok
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {videoPotrait.map((project, index) => (
              <div key={project.id} className="flex justify-center">
                <div className="w-full max-w-[280px]"> {/* Kontrol ukuran di sini */}
                  <VideoReel 
                    project={project} 
                    index={index}
                    isPortrait={true} // Tambahkan prop untuk portrait
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Container khusus untuk tombol dengan margin atas dan flexbox */}
  <div className="flex justify-center mt-12"> {/* mt-12 untuk margin atas, bisa disesuaikan */}
    <motion.button
      onClick={() => window.open("https://drive.google.com/drive/folders/1gvhkeRleP_LcE6sNIrFX8Iak7x-ROVBx?usp=drive_link", "_blank")}
      className="group relative bg-gray-900/80 h-16 w-48 rounded-full border border-gray-700 overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:border-yellow-400 flex items-center justify-center mx-auto" 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex items-center justify-center z-10 space-x-2">
        <span className="text-gray-200 group-hover:text-yellow-300 text-lg font-medium transition-colors duration-300">
          Selengkapnya
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-yellow-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </motion.button>
  </div>
        </section>

        

          {/* food */}
        <section id='photography-section'
          ref={ref}
          className="py-6 px-4 pt-2 sm:px-8 lg:px-16" 
        >
          <motion.h2
              className="text-4xl font-semibold pt-8 mb-12 text-center text-white relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Photography Portfolio
              <p className='text-xl font-semibold  text-center pt-8 text-gray-400 '>Another Photo Collection</p>
              <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10">
                {/* Shutterstock Logo */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative"
                >
                  <a 
                    href="https://www.shutterstock.com/g/ArinnnOK?rid=302144335" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 group-hover:border-blue-400 transition-all duration-300">
                      <img 
                        src={shutterstock} 
                        alt="Shutterstock Portfolio" 
                        className="h-12 w-12 md:h-12 md:w-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </a>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Shutterstock
                  </span>
                </motion.div>
                {/* Instagram Logo */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative"
                >
                 <a 
                    href="https://www.instagram.com/im.notyou7/profilecard/?igsh=MXVyM20wMnczbWtlaQ==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 group-hover:border-blue-400 transition-all duration-300">
                      <img 
                        src={ig} 
                        alt="Shutterstock Portfolio" 
                        className="h-12 w-12 md:h-12 md:w-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </a>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Instagram
                  </span>
                </motion.div>
              </div>
              
            </motion.h2>

      </section>


     {/* food */}
<section  className="relative py-12 md:py-16 px-6 md:px-12 lg:px-24 xl:px-32">
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
    <div className="flex items-center justify-center lg:justify-start">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img src={mm1} alt="Vogue Cover" className="w-full rounded-lg" />
        <div className="absolute -bottom-4 -right-4 bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center border-2 border-cyan-400">
          <span className="text-cyan-400 font-bold text-sm md:text-base"></span>
          
        </div>
        
      </motion.div>
    </div>
    
    <motion.div 
      className="flex flex-col justify-center"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 md:mb-6 tracking-wide">
        FOODS
      </h2>
      <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base max-w-md">
        Photo Product
      </p>
      
      <div className="grid grid-cols-2 gap-2">
        {[mm2, mm3, makan1, makan2, makan3].map((img, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }} 
          >
            <img 
              src={img} 
              alt="" 
              className="w-full h-full sm:h-62 md:h-62 rounded-lg object-cover shadow-lg" 
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
  
  <div className="absolute left-6 md:left-12 lg:left-24 xl:left-32 top-8 md:top-12 lg:top-20 flex items-center">
    <div className="h-px w-8 md:w-16 bg-cyan-400 mr-2 md:mr-4"></div>
    <span className="text-gray-400 text-sm md:text-base"></span>
  </div>
</section>

<section className="relative py-8 md:py-8 px-6 md:px-12 lg:px-24 xl:px-32">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
  >
    {/* Left Column - Hotel Photos (4:3) */}
    <motion.div 
      className="flex flex-col justify-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 md:mb-6 tracking-wide">
        Hotel Advertising Photo
      </h2>
      <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base max-w-md">
        Premium Hotel Photography Collection
      </p>
      
      <div className="grid grid-cols-2 gap-3">
        {[hotel1, hotel2, hotel3, hotel4].map((img, index) => (
          <motion.div 
            key={`hotel-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }} 
            className="aspect-[4/3]"
          >
            <img 
              src={img} 
              alt={`Hotel photo ${index + 1}`} 
              className="w-full h-full rounded-lg object-cover shadow-lg hover:shadow-xl transition-all duration-300" 
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
    
    {/* Right Column - Architectural Photos */}
    <motion.div 
      className="flex flex-col justify-center"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 md:mb-6 tracking-wide">
        Architectural Photo
      </h2>
      <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base max-w-md">
        Stunning Architectural Shots
      </p>
      
      <div className="grid grid-cols-2 gap-3">
        {/* Church 1 with 9:16 aspect ratio */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }} 
          className="h-full w-full"
        >
          <img 
            src={gereja1} 
            alt="Church architecture vertical shot" 
            className="w-full h-full rounded-lg object-cover shadow-lg hover:shadow-xl transition-all duration-300" 
          />
        </motion.div>
        
        {/* Church 2 with 4:3 aspect ratio */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5 }} 
          className="aspect-[4/3]"
        >
          <img 
            src={gereja2} 
            alt="Church architecture wide shot" 
            className="w-full h-full rounded-lg object-cover shadow-lg hover:shadow-xl transition-all duration-300" 
          />
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
</section>

<section className="relative py-12 md:py-20 px-6 md:px-12 lg:px-24 xl:px-32">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
    {/* Left Column - Landscape Image (alam1) */}
    <motion.div 
      className="flex items-center justify-center lg:justify-start"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="relative shadow-2xl w-full"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={alam1} 
          alt="Featured Nature Landscape" 
          className="w-full rounded-lg aspect-[4/3] object-cover" 
        />
        <div className="absolute -bottom-4 -right-4 bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center border-2 border-cyan-400">
          <span className="text-cyan-400 font-bold text-sm md:text-base"></span>
        </div>
      </motion.div>
    </motion.div>
    
    {/* Right Column - 3 Portrait Images */}
    <motion.div 
      className="flex flex-col justify-center"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 md:mb-6 tracking-wide">
        NATURE
      </h2>
      <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base max-w-md">
        Nature Photography Collection
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[alam2, alam3, alam4].map((img, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="aspect-[3/4]"
          >
            <img 
              src={img} 
              alt={`Nature portrait ${index + 1}`} 
              className="w-full h-80 rounded-lg object-cover shadow-lg" 
            />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 pt-4 sm:grid-cols-3 gap-4">
        {[alam5, alam6].map((img, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="aspect-[3/4]"
          >
            <img 
              src={img} 
              alt={`Nature portrait ${index + 1}`} 
              className="w-full h-80 rounded-lg object-cover shadow-lg" 
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
  
  {/* Number indicator */}
  <div className="absolute left-6 md:left-12 lg:left-24 xl:left-32 top-8 md:top-12 lg:top-20 flex items-center">
    <div className="h-px w-8 md:w-16 bg-cyan-400 mr-2 md:mr-4"></div>
    <span className="text-gray-400 text-sm md:text-base"></span>
  </div>
</section>

      </motion.div>

          
{/* Tombol navigasi home dan scroll-to-top */}
{isVisible && (
  <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
    {/* Tombol Home sederhana */}
    <motion.button 
      onClick={() => window.location.href = '/'}
      className="p-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title="Go to Home"
    >
      <FaHome className="text-xl" />
    </motion.button>

    {/* Tombol Scroll to Top */}
    <motion.button 
      onClick={scrollToTop}
      className="p-4 bg-gradient-to-r from-yellow-400 to-blue-300 text-blue-950 rounded-full shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title="Scroll to Top"
    >
      <FaArrowUp className="text-xl" />
    </motion.button>
  </div>
)}
    </div>
  );
};

export default VideoPortfolioPage;