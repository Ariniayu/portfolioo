import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Poster1 from '../assets/dg/Poster1.png';
import Poster2 from '../assets/dg/Poster2.png';
import Poster3 from '../assets/dg/Poster3.png';
import Vogue from '../assets/dg/Vogue.png';
import pedes from "../assets/dg/pedas.png";
import skjpedes from "../assets/dg/skjpedes.png";
import rotimanis2 from "../assets/dg/rotimanis2.png";
import pulstak1 from "../assets/dg/pulstak1.png";
import pulstak2 from "../assets/dg/pulstak2.png";
import pulstak3 from "../assets/dg/pulstak3.png";
import sm4 from "../assets/dg/sm4.png";
import sm2 from "../assets/dg/sm2.png";
import sm3 from "../assets/dg/sm3.png";
import sm5 from "../assets/dg/sm5.png";
import an1 from "../assets/dg/an1.png";
import an2 from "../assets/dg/an2.png";
import an3 from "../assets/dg/an3.png";
import an4 from "../assets/dg/an4.png";
import an5 from "../assets/dg/an5.png";
import an6 from "../assets/dg/an6.png";
import an7 from "../assets/dg/an7.png";
import suga from "../assets/dg/suga.png";
import gm1 from "../assets/dg/gm1.png"
import gm2 from "../assets/dg/gm2.png"
import gm3 from "../assets/dg/gm3.png"
import gm4 from "../assets/dg/gm4.png"
import gm5 from "../assets/dg/gm5.png"
import gm6 from "../assets/dg/gm6.png"
import gm7 from "../assets/dg/gm7.png"
import gm8 from "../assets/dg/gm8.png"
import gm9 from "../assets/dg/gm9.png"
import blessingg from "../assets/logo/blessingg.png"
import adajasa from "../assets/logo/adajasa.png"
import checkup from "../assets/logo/checkup.png"
import datigart from "../assets/logo/datigart.png"
import gws from "../assets/logo/gws.png"
import harmoni from "../assets/logo/harmoni.png"
import izah from "../assets/logo/izah.png"
import moneytrack from "../assets/logo/moneytrack.png"
import pullstacklogo from "../assets/logo/pullstacklogo.png"
import skj from "../assets/logo/skj.png"
import moneymokap from "../assets/mockup/moneymokap.png"
import adajasamokap from "../assets/mockup/adajasamokap.png"
import blesmokap from "../assets/mockup/blesmokap.png"
import checkupmokap from "../assets/mockup/checkupmokap.png"
import datigartmokap from "../assets/mockup/datigartmokap.png"
import gwsmokap from "../assets/mockup/gwsmokap.png"
import harmonimokap from "../assets/mockup/harmonimokap.png"
import pullstakmokap from "../assets/mockup/pullstakmokap.png"
import SKJMOKAP from "../assets/mockup/SKJMOKAP.png"
import ilm from "../assets/mockup/ilm.png"
import basmi from "../assets/mockup/basmi.png"
import misnight from "../assets/mockup/misnight.png"
import informasi from "../assets/mockup/informasi.png"
import cdr from '../assets/cdr.png'
import ps from '../assets/ps.png'
import canva from '../assets/canva.png'
import ilustrator from '../assets/illustrator.png'
import figma from '../assets/figma.svg'
import trvl1 from '../assets/dg/trvl1.png'
import trvl2 from '../assets/dg/trvl2.png'
import trvl3 from '../assets/dg/trvl3.png'
import fly1 from '../assets/dg/Depan.png'
import fly2 from '../assets/dg/belakang.png'
import mcf1 from '../assets/dg/mcfl1.png'
import mcf2 from '../assets/dg/mcfl2.png'
import mcf3 from '../assets/dg/mcfl3.png'
import mcf4 from '../assets/dg/mcfl4.png'
import mcf5 from '../assets/dg/mcfl5.png'
import pmflt1 from '../assets/dg/pmflt.png'
import mcpf1 from '../assets/dg/mcpm1.png'
import mcpf2 from '../assets/dg/mcpm2.png'
import mcpf3 from '../assets/dg/mcpm3.png'
import real1 from '../assets/dg/igo1.png'
import real2 from '../assets/dg/igo2.svg'
import real3 from '../assets/dg/igo3.svg'
import real4 from '../assets/dg/igo4.svg'
import real5 from '../assets/dg/igo5.svg'
import real6 from '../assets/dg/igo6.svg'
import real7 from '../assets/dg/igo7.svg'
import real8 from '../assets/dg/igo8.svg'
import real9 from '../assets/dg/igo9.svg'
import bal1 from '../assets/dg/bl1.png'
import bal2 from '../assets/dg/bl2.png'
import bal3 from '../assets/dg/bl3.png'
import bal4 from '../assets/dg/bl4.png'
import bal5 from '../assets/dg/bl5.png'
import bal6 from '../assets/dg/bl6.png'
import katalog from '../assets/dg/katalogh.png'
import kat1 from '../assets/dg/vr.jpg'
import kat2 from '../assets/dg/vr1.jpg'
import kat3 from '../assets/dg/vr2.jpg'
import kat4 from '../assets/dg/vr3.jpg'
import indo from '../assets/dg/indo.png'
import indo2 from '../assets/dg/indo2.png'
import indo3 from '../assets/dg/indo3.png'
import indo4 from '../assets/dg/indo4.png'
import takut from '../assets/dg/takut.png'
import takut2 from '../assets/dg/takut2.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { IoMoon } from "react-icons/io5";

const logos = [blessingg, harmoni, pullstacklogo, checkup, gws, moneytrack, datigart, adajasa, izah, skj]


  
const ScrollAnimation = ({ children, delay = 0, yOffset = 50 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: yOffset }
      }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};


export default function Desain() {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk toggle visibility button
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <div className="bg-gray-900 text-gray-100 font-sans">
      {/* Title Section */}
      <ScrollAnimation>
      <div className="px-6 py-12 md:px-10 md:py-20 lg:px-24">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-6 relative">
          <div className="z-10 flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-cyan-400 font-bold tracking-tight">GRAPHIC</h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight">DESIGN.</h1>
          </div>
          
          <div className="flex flex-col md:items-end gap-3 w-full md:w-auto">
            <span className="text-gray-400 text-lg md:text-xl">Tools Design</span>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {/* Cdr Logo */}
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative"
              >
                <div className="p-2 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 group-hover:border-blue-500 transition-all duration-300">
                  <img 
                    src={cdr} 
                    alt="CorelDraw" 
                    className="h-10 w-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  CorelDraw
                </span>
              </motion.div>
              
              {/* Ps Logo */}
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative"
              >
                <div className="p-2 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 group-hover:border-blue-500 transition-all duration-300">
                  <img 
                    src={ps} 
                    alt="Photoshop" 
                    className="h-10 w-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Photoshop
                </span>
              </motion.div>
              
              {/* Canva Logo */}
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative"
              >
                <div className="p-2 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 group-hover:border-blue-500 transition-all duration-300">
                  <img 
                    src={canva} 
                    alt="Canva" 
                    className="h-10 w-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Canva
                </span>
              </motion.div>
              
              {/* Illustrator Logo */}
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative"
              >
                <div className="p-2 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 group-hover:border-blue-500 transition-all duration-300">
                  <img 
                    src={ilustrator} 
                    alt="Illustrator" 
                    className="h-10 w-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Illustrator
                </span>
              </motion.div>
              
              {/* Figma Logo */}
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative"
              >
                <div className="p-2 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 group-hover:border-blue-500 transition-all duration-300">
                  <img 
                    src={figma} 
                    alt="Figma" 
                    className="h-10 w-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Figma
                </span>
              </motion.div>
            </div>
          </div>
          
          <motion.div
            className="absolute left-0 bottom-0 w-48 md:w-64 h-1 bg-cyan-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <div className="absolute left-0 -bottom-4 w-full h-0.5 bg-gray-700 hidden md:block"></div>
        </div>
      </div>
      </ScrollAnimation>

      {/* Balihoww Designs */}
      <ScrollAnimation delay={0.1}>
  <section className="relative py-8 md:py-16 px-6 md:px-12 lg:px-24 xl:px-32">
    <div className="absolute left-6 md:left-12 lg:left-24 xl:left-32 top-4 md:top-8 z-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-cyan-400 font-bold tracking-wide">BALIHO/BILLBOARD</h2>
      <motion.div
        className="absolute left-0 top-full mt-1 md:mt-2 w-24 md:w-32 h-0.5 md:h-1 bg-cyan-400"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
    
    <div className="absolute right-6 md:right-12 lg:right-24 xl:right-32 top-4 md:top-8 flex items-center">
      <div className="h-px w-8 md:w-16 ml-4 bg-cyan-400 mr-2 md:mr-4"></div>
      <span className="text-gray-400 text-sm md:text-base">01</span>
    </div>

    {/* Baris pertama - 3 gambar 1:1 */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-16 mb-8 md:mb-16">
      {[bal1, bal2, bal3].map((poster, index) => (
        <motion.div 
          key={index}
          className="relative overflow-hidden rounded-lg shadow-2xl w-full aspect-square"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <img 
            src={poster} 
            alt={`Poster ${index + 1}`} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
            <h3 className="text-sm md:text-xl font-medium">
              {index === 0 ? "Advertising Poster" : index === 1 ? "Advertising Poster" : "Advertising Poster"}
            </h3>
          </div>
        </motion.div>
      ))} 
    </div>

    {/* Baris kedua - 3 gambar 1:1 */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-16 mb-8 md:mb-16">
      {[bal4, bal5, bal6].map((poster, index) => (
        <motion.div 
          key={index}
          className="relative overflow-hidden rounded-lg shadow-2xl w-full aspect-square"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <img 
            src={poster} 
            alt={`Poster ${index + 4}`} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
            <h3 className="text-sm md:text-xl font-medium">
              Advertising Poster
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
</ScrollAnimation>

      {/* Poster Designs */}
      <ScrollAnimation delay={0.1}>
      <section className="relative py-8 md:py-16 px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="absolute left-6 md:left-12 lg:left-24 xl:left-32 top-4 md:top-8 z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-cyan-400 font-bold tracking-wide">POSTER</h2>
          <motion.div
            className="absolute left-0 top-full mt-1 md:mt-2 w-24 md:w-32 h-0.5 md:h-1 bg-cyan-400"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
          
        </div>
        
        <div className="absolute right-6  md:right-12 lg:right-24 xl:right-32 top-4 md:top-8 flex items-center">
          
          <div className="h-px w-8 md:w-16 ml-4 bg-cyan-400 mr-2 md:mr-4"></div>
          <span className="text-gray-400 text-sm md:text-base">01</span>

        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 h-auto md:h-96 mt-16 mb-8 md:mb-16">
          {[Poster1, Poster2, Poster3].map((poster, index) => (
            <motion.div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-2xl flex-1 min-h-[200px] md:min-h-0"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img 
                src={poster} 
                alt={`Poster ${index + 1}`} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                <h3 className="text-sm md:text-xl font-medium">
                  {index === 0 ? "Advertising Poster" : index === 1 ? "Advertising Poster" : "Advertising Poster"}
                </h3>
              </div>
            </motion.div>
          ))} 
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-16 mb-8 md:mb-16">
  {[trvl2, trvl3].map((poster, index) => (
    <motion.div 
      key={index}
      className="relative overflow-hidden rounded-lg shadow-2xl"
      style={{ width: '320px', height: '400px' }} // Set fixed width and height
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <img 
        src={poster} 
        alt={`Poster ${index + 1}`} 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
        <h3 className="text-xs font-medium">
          {index === 0 ? "Advertising Poster" : index === 1 ? "Advertising Poster" : "Advertising Poster"}
        </h3>
      </div>
    </motion.div>
  ))}
</div>
        
      </section>
      </ScrollAnimation>

      {/* Magazine Cover */}
      <ScrollAnimation delay={0.2}>
      <section className="relative py-12 md:py-20 px-6 md:px-12 lg:px-24 xl:px-32 bg-gray-800/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="flex items-center justify-center lg:justify-start">
            <motion.div 
              className="relative shadow-2xl w-full max-w-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={Vogue} alt="Vogue Cover" className="w-full rounded-lg" />
              <div className="absolute -bottom-4 -right-4 bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center border-2 border-cyan-400">
                <span className="text-cyan-400 font-bold text-sm md:text-base">02</span>
              </div>
            </motion.div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 md:mb-6 tracking-wide">
              MAGAZINE <br /> COVER DESIGN & EVENT POSTER
            </h2>
            <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base max-w-md">
              Poster design that prioritizes information to be conveyed to the reader
            </p>
            
            <div className="grid grid-cols-2 gap-2">
              {[ilm, basmi, misnight, informasi].map((img, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }} 
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <img 
                    src={img} 
                    alt="" 
                    className="w-full h-32 sm:h-40 md:h-48 rounded-lg object-cover shadow-lg" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute left-6 md:left-12 lg:left-24 xl:left-32 top-8 md:top-12 lg:top-20 flex items-center">
          <div className="h-px w-8 md:w-16 bg-cyan-400 mr-2 md:mr-4"></div>
          <span className="text-gray-400 text-sm md:text-base">02</span>
        </div>
      </section>
      </ScrollAnimation>

      {/* KATALOG Cover */}
      <ScrollAnimation delay={0.2}>
      <section className="relative py-12 md:py-20 px-6 md:px-12 lg:px-24 xl:px-32 bg-gray-800/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="flex items-center justify-center lg:justify-start">
            <motion.div 
              className="relative shadow-2xl w-full max-w-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={katalog} alt="Vogue Cover" className="w-full rounded-lg" />
              <div className="absolute -bottom-4 -right-4 bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center border-2 border-cyan-400">
                <span className="text-cyan-400 font-bold text-sm md:text-base">02</span>
              </div>
            </motion.div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 md:mb-6 tracking-wide">
                KATALOG PRODUK
            </h2>
            <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base max-w-md">
              Design Katalog Produk 
            </p>
            
            <div className="grid grid-cols-2 gap-2">
              {[kat1,kat2,kat3,kat4].map((img, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }} 
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <img 
                    src={img} 
                    alt="" 
                    className="w-full h-32 sm:h-40 md:h-48 rounded-lg object-cover shadow-lg" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute left-6 md:left-12 lg:left-24 xl:left-32 top-8 md:top-12 lg:top-20 flex items-center">
          <div className="h-px w-8 md:w-16 bg-cyan-400 mr-2 md:mr-4"></div>
          <span className="text-gray-400 text-sm md:text-base">02</span>
        </div>
      </section>
      </ScrollAnimation>

       {/* FLAYER */}
      <ScrollAnimation delay={0.2}>
      <section className="relative py-12 md:py-20 px-6 md:px-12 lg:px-24 xl:px-32 bg-gray-800/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="flex items-center justify-center lg:justify-start">
            <motion.div 
              className="relative shadow-2xl w-full max-w-md space-y-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gambar 1 */}
              <div className="relative">
                <img src={fly1} alt="Vogue Cover 1" className="w-full rounded-lg" />
              </div>
              
              {/* Gambar 2 */}
              <div className="relative">
                <img src={fly2} alt="Vogue Cover 2" className="w-full rounded-lg" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center border-2 border-cyan-400">
                <span className="text-cyan-400 font-bold text-sm md:text-base">02</span>
              </div>
            </motion.div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 md:mb-6 tracking-wide">
              FLYER
            </h2>
            <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base max-w-md">
              Flyer design 6 sisi lipat
            </p>
            
            <div className="grid grid-cols-2 gap-2">
              {[mcf1,mcf2, mcf3, mcf4, mcf5].map((img, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }} 
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <img 
                    src={img} 
                    alt="" 
                    className="w-full h-32 sm:h-40 md:h-48 rounded-lg object-cover shadow-lg" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute left-6 md:left-12 lg:left-24 xl:left-32 top-8 md:top-12 lg:top-20 flex items-center">
          <div className="h-px w-8 md:w-16 bg-cyan-400 mr-2 md:mr-4"></div>
          <span className="text-gray-400 text-sm md:text-base">02</span>
        </div>
      </section>
      </ScrollAnimation>

       {/* PAMFLET */}
      <ScrollAnimation delay={0.2}>
      <section className="relative py-12 md:py-20 px-6 md:px-12 lg:px-24 xl:px-32 bg-gray-800/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="flex items-center justify-center lg:justify-start">
            <motion.div 
              className="relative shadow-2xl w-full max-w-md space-y-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gambar 1 */}
              <div className="relative">
                <img src={pmflt1} alt="Vogue Cover 1" className="w-full rounded-lg" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center border-2 border-cyan-400">
                <span className="text-cyan-400 font-bold text-sm md:text-base">02</span>
              </div>
            </motion.div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 md:mb-6 tracking-wide">
              PAMFLET
            </h2>
            <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base max-w-md">
              Pamflet slebaran satu sisi
            </p>
            
            <div className="grid grid-cols-2 gap-2">
              {[mcpf1,mcpf2,mcpf3].map((img, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }} 
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <img 
                    src={img} 
                    alt="" 
                    className="w-full h-32 sm:h-40 md:h-48 rounded-lg object-cover shadow-lg" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute left-6 md:left-12 lg:left-24 xl:left-32 top-8 md:top-12 lg:top-20 flex items-center">
          <div className="h-px w-8 md:w-16 bg-cyan-400 mr-2 md:mr-4"></div>
          <span className="text-gray-400 text-sm md:text-base">02</span>
        </div>
      </section>
      </ScrollAnimation>


      {/* Social Media */}
<ScrollAnimation delay={0.4}>
<section className="relative py-12 md:py-20 px-6 md:px-12 lg:px-24 xl:px-32 bg-gray-800/50">
  <div className="flex justify-end mb-8 md:mb-12">
    <div className="text-right">
      <h2 className="text-3xl md:text-4xl text-cyan-400 font-bold tracking-wide mb-1 md:mb-2">
        SOCIAL <br /> MEDIA
      </h2>
     
      <motion.div
        className="ml-auto w-24 md:w-32 h-0.5 md:h-1 bg-cyan-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
      />
       <p className="text-gray-400 text-sm pt-4 md:text-base max-w-md">
      Customized social media design dan Redesign sosial media         
      </p>
    </div>
  </div>
  
  {/* Definisikan semua gambar dalam satu array */}
  {(() => {
    const allImages = [
      pulstak1, pulstak2, pulstak3, 
      sm2, sm3, sm4,
      real1, real4, real2, real3, real5, real9, real7, real6, real8,
      indo, indo2, indo3, indo4, 
      takut, takut2  // Gambar baru yang ditambahkan
    ];
    
    const realImages = [real1, real4, real2, real3, real5, real9, real7, real6, real8, indo, indo2, indo3, indo4, takut, takut2];
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 mb-3 md:mb-4">
        {allImages.map((img, index) => {
          const isRealImage = realImages.includes(img);
          
          return (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }} 
              transition={{ duration: 0.2, delay: (index % 3) * 0.1 }}
              className={`w-full ${isRealImage ? 'aspect-[3/4]' : 'aspect-square'}`}
            >
              <img 
                src={img} 
                alt={`Social Media Post ${index + 1}`} 
                className="w-full h-full object-cover rounded-lg shadow-lg" 
              />
            </motion.div>
          );
        })}
      </div>
    );
  })()}
  
  <div className="absolute left-6 md:left-12 lg:left-24 xl:left-32 top-8 md:top-12 lg:top-20 flex items-center">
    <div className="h-px w-8 md:w-16 bg-cyan-400 mr-2 md:mr-4"></div>
    <span className="text-gray-400 text-sm md:text-base">04</span>
  </div>
</section>
</ScrollAnimation>

      {/* Logo Design */}
      <ScrollAnimation delay={0.5}>
      <section className="relative py-12 md:py-20 px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl text-white font-bold tracking-wide mb-2 md:mb-4">LOGO DESIGN</h2>
          <motion.div
            className="w-32 md:w-48 h-0.5 md:h-1 bg-cyan-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-gray-400 text-sm pt-4 md:text-base max-w-md">
            Customized Logo design           
            </p>
        </div>
        
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          {/* Logo Set 1 */}
          <div className="bg-gray-200  p-4 md:p-6 lg:p-8 rounded-xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <div className="relative w-full sm:w-auto">
                  <img src={adajasamokap} alt="Adajasa Mockup" className="w-full" />
                  <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-gray-900 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-cyan-400">
                    <span className="text-cyan-400 text-xs md:text-sm">01</span>
                  </div>
                </div>
                <img src={adajasa} alt="Adajasa Logo" className="h-12 md:h-16" />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-end">
                <img src={pullstacklogo} alt="Pullstack Logo" className="h-12 md:h-16 order-1 sm:order-none" />
                <div className="relative w-full sm:w-auto order-0 sm:order-1">
                  <img src={pullstakmokap} alt="Pullstack Mockup" className="w-full" />
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-gray-900 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-cyan-400">
                    <span className="text-cyan-400 text-xs md:text-sm">02</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Logo Set 2 */}
          <div className="bg-gray-200  p-4 md:p-6 lg:p-8 rounded-xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <img src={datigart} alt="Datigart Logo" className="h-20 md:h-32" />
                <div className="relative w-full sm:w-auto">
                  <img src={datigartmokap} alt="Datigart Mockup" className="h-48 md:h-64 w-full object-contain" />
                  <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-gray-900 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-cyan-400">
                    <span className="text-cyan-400 text-xs md:text-sm">03</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-end">
                <div className="relative w-full sm:w-auto order-0 sm:order-1">
                  <img src={blesmokap} alt="Blessing Mockup" className="h-48 md:h-64 w-full object-contain" />
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-gray-900 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-cyan-400">
                    <span className="text-cyan-400 text-xs md:text-sm">04</span>
                  </div>
                </div>
                <img src={blessingg} alt="Blessing Logo" className="h-16 md:h-24 order-1 sm:order-none" />
              </div>
            </div>
          </div>
          
          {/* Logo Set 3 */}
          <div className="bg-gray-200  p-4 md:p-6 lg:p-8 rounded-xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <div className="relative w-full sm:w-auto">
                  <img src={checkupmokap} alt="Checkup Mockup" className="w-full" />
                  <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-gray-900 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-cyan-400">
                    <span className="text-cyan-400 text-xs md:text-sm">05</span>
                  </div>
                </div>
                <img src={checkup} alt="Checkup Logo" className="h-8 md:h-12" />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-end">
                <img src={harmoni} alt="Harmoni Logo" className="h-16 md:h-24 order-1 sm:order-none" />
                <div className="relative w-full sm:w-auto order-0 sm:order-1">
                  <img src={harmonimokap} alt="Harmoni Mockup" className="w-full" />
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-gray-900 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-cyan-400">
                    <span className="text-cyan-400 text-xs md:text-sm">06</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Logo Set 4 */}
          <div className="bg-gray-200 p-4 md:p-6 lg:p-8 rounded-xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <img src={moneytrack} alt="SKJ Logo" className="h-16 md:h-24" />
                <div className="relative w-full sm:w-auto">
                  <img src={moneymokap} alt="SKJ Mockup" className="h-48 md:h-64 w-full object-contain" />
                  <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-gray-900 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-cyan-400">
                    <span className="text-cyan-400 text-xs md:text-sm">07</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-end">
                <div className="relative w-full sm:w-auto order-0 sm:order-1">
                  <img src={gwsmokap} alt="GWS Mockup" className="h-48 md:h-64 w-full object-contain" />
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-gray-900 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-cyan-400">
                    <span className="text-cyan-400 text-xs md:text-sm">08</span>
                  </div>
                </div>
                <img src={gws} alt="GWS Logo" className="h-12 md:h-16 order-1 sm:order-none" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute right-6 md:right-12 lg:right-24 xl:right-32 top-8 md:top-12 lg:top-20 flex items-center">
          <span className="text-gray-400 text-sm md:text-base">05</span>
          <div className="h-px w-8 md:w-16 bg-cyan-400 ml-2 md:ml-4"></div>
        </div>
      </section>
      </ScrollAnimation>

       {/* Freelance Design */}
      <ScrollAnimation delay={0.3}>
      <section className="relative py-12 md:py-20 px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl text-white font-bold tracking-wide mb-2 md:mb-4">
              STICKER <br /> PRODUCT
            </h2>
            <motion.div
              className="w-32 md:w-48 h-0.5 md:h-1 bg-cyan-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          
          <div className="text-left pt-8 md:text-right">
            <h3 className="text-xl md:text-2xl text-cyan-400 font-medium mb-1 md:mb-2">STICKER PRODUCT</h3>
            <p className="text-gray-400 text-sm md:text-base max-w-md">
              Custom sticker designs that enhance brand identity and product appeal.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-800/50 p-4 md:p-8 rounded-xl shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {img: pedes, title: "Product Sticker"},
              {img: rotimanis2, title: "Food Label"},
              {img: skjpedes, title: "Brand Sticker"}
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-48 sm:h-56 md:h-64 object-contain" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                  <h3 className="text-white font-medium text-sm md:text-base">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="absolute right-6 md:right-12 lg:right-24 xl:right-32 top-8 md:top-12 lg:top-20 flex items-center">
          <span className="text-gray-400 text-sm md:text-base">03</span>
          <div className="h-px w-8 md:w-16 bg-cyan-400 ml-2 md:ml-4"></div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Another Design */}
      <ScrollAnimation delay={0.6}>
      <section className="relative py-12 md:py-20 px-6 md:px-12 lg:px-24 xl:px-32 bg-gray-800/50">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl text-cyan-400 font-bold tracking-wide mb-2 md:mb-4">ANOTHER DESIGN</h2>
          <motion.div
            className="mx-auto w-32 md:w-48 h-0.5 md:h-1 bg-cyan-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <img src={an3} alt="Design 1" className="w-full rounded-lg shadow-xl" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3, delay: 0.1 }}>
              <img src={an4} alt="Design 2" className="w-full rounded-lg shadow-xl" />
            </motion.div>
          </div>
          
          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <img src={an2} alt="Design 3" className="w-full rounded-lg shadow-xl" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3, delay: 0.1 }}>
              <img src={an5} alt="Design 4" className="w-full rounded-lg shadow-xl" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3, delay: 0.2 }}>
              <img src={suga} alt="Design 5" className="w-full rounded-lg shadow-xl" />
            </motion.div>
          </div>
          
          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <img src={an1} alt="Design 6" className="w-full rounded-lg shadow-xl" />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <img src={an6} alt="Design 7" className="w-full rounded-lg shadow-xl" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3, delay: 0.1 }}>
                <img src={an7} alt="Design 8" className="w-full rounded-lg shadow-xl" />
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="absolute left-6 md:left-12 lg:left-24 xl:left-32 top-8 md:top-12 lg:top-20 flex items-center">
          <div className="h-px w-8 md:w-16 bg-cyan-400 mr-2 md:mr-4"></div>
          <span className="text-gray-400 text-sm md:text-base">06</span>
        </div>
      </section>
      </ScrollAnimation>

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
}