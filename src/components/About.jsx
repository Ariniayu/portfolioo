
import ig from '../assets/ig.png';
import tt from '../assets/tt.png';
import yt from '../assets/yt.png';
import lkdn from '../assets/lkdn.png';
import gthb from '../assets/gthb.png';
import Group13 from '../assets/Group13.png'
import sy from '../assets/sy.png'
import { Autoplay } from 'swiper/modules';
import ps from '../assets/ps.png';
import cdr from '../assets/cdr.png';
import illustrator from '../assets/illustrator.png';
import canva from '../assets/canva.png';
import ae from '../assets/ae.svg';
import pr from '../assets/pr.svg';
import capcut from '../assets/capcut.svg';
import figma from '../assets/figma.svg';
import laravel from '../assets/laravel.svg';
import react from '../assets/react.svg';
import tailwind from '../assets/tailwind.svg';
import bootstrap from '../assets/bostrap.svg';
import TextTransition, { presets } from 'react-text-transition';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from "react";

const TEXTS = ['Video Editor','Graphic Design', 'UI Design', 'Web Developer'];
const logos =[ps,cdr,illustrator,canva,ae,pr,capcut,figma,laravel,react,tailwind,bootstrap]

export default function About() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => setIndex(index => index + 1), 2000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b ">
            {/* Home Content */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-12 px-4 sm:px-6 lg:px-8">
                {/* Profile Section */}
                <motion.div 
                    className="flex flex-col md:flex-row items-center justify-center order-2 md:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Social Links */}
                    <div className="flex flex-col items-center text-white mb-8 md:mb-0 md:mr-10">
                        {/* Desktop */}
                        <motion.div 
  className="hidden md:flex flex-col items-center relative"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3, duration: 0.5 }}
>
  {[
    { icon: ig, url: "https://www.instagram.com/arinii.aa/profilecard/?igsh=MTlpNTk0YTFvNjRmZg==", alt: "Instagram" },
    { icon: lkdn, url: "https://www.linkedin.com/in/dwi-arini-ayu-ambarwati-26362826a/", alt: "LinkedIn" },
    { icon: gthb, url: "https://github.com/Ariniayu", alt: "GitHub" },
    { icon: tt, url: "https://www.tiktok.com/@arinnni.aa?lang=en", alt: "GitHub" },
    { icon: yt, url: "https://www.youtube.com/@AriniAAA", alt: "GitHub"}
  ].map((social, i) => (
    <motion.a 
      key={i}
      href={social.url} 
      target="_blank"
      rel="noopener noreferrer"
      className="mb-4 last:mb-0"
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img src={social.icon} alt={social.alt} />
    </motion.a>
  ))}
  <motion.p 
    className="absolute top-full mt-14 transform -rotate-90 whitespace-nowrap text-sm text-yellow-400"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.6 }}
  >
    Follow me on :
  </motion.p>
</motion.div>

                        {/* Mobile */}
                        <motion.div 
                            className="flex md:hidden items-center space-x-6 mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-sm text-yellow-400">Follow me :</p>
                            {[ig, lkdn, gthb].map((icon, i) => (
                                <motion.a 
                                    key={i}
                                    href="#"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <img src={icon} alt={['Instagram', 'LinkedIn', 'GitHub'][i]} className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Profile Image */}
                    <motion.div
                        className="relative order-1 md:order-2"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img 
                            src={Group13} 
                            alt="Profile" 
                            className="relative rounded-lg max-w-full h-auto  shadow-lg z-10"
                        />
                    </motion.div>
                </motion.div>

                {/* Headline Text */}
                <motion.div 
    className="order-1 md:order-2"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
>
    <div className="ml-0 md:ml-10 text-center md:text-left">
        {/* WELCOME TO - Anton Font */}
        <motion.div
            className="font-anton text-white pt-6 md:pt-12 text-3xl sm:text-4xl md:text-6xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            WELCOME TO
        </motion.div>
        
        {/* ARINI AYU PORTFOLIO - Anton Font */}
        <motion.div
            className="font-anton pt-3 text-2xl sm:text-4xl md:text-6xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
        >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-gray-300">
                ARINI AYU PORTFOLIO
            </span>
        </motion.div>
        
        {/* I'M A... - Regular Font */}
        <motion.div
            className="text-white pt-6 md:pt-10 text-2xl sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
        >
            <span className="inline-block">I'M A&nbsp;</span>
            <span className="inline-block text-yellow-400">
                <TextTransition springConfig={presets.wobbly}>
                    {TEXTS[index % TEXTS.length]}
                </TextTransition>
            </span>
        </motion.div>
    </div>
</motion.div>
            </div>

            {/* About Me Section */}
            <motion.section 
                className="py-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2 
                            id="about"
                            className="text-white pt-8 text-center text-3xl sm:text-4xl font-anton"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            About Me
                        </motion.h2>
                        <motion.p 
                            className="text-gray-300  text-center font-sans  sm:text-lg md:text-xl max-w-4xl mx-auto py-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            Hello! I am Arin, Fresh Graduate with a high passion for exploring and creating in the creative world.
                            From attractive graphic design, inspiring video creation, UI/UX design that makes things easier for people, to web development —
                            I enjoy every moment on the creative path.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section 
                className="py-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
                    <motion.div 
                        className="md:mr-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.p 
                            className="text-gray-300 text-lg text-center md:text-right "
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            This is my portfolio and it can be more than you want if we work together
                        </motion.p>
                        <motion.p 
                            className="text-yellow-400 text-center md:text-right text-2xl font-medium mt-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            Life has no ctrl-z
                        </motion.p>
                        
                        <motion.div 
                            className="mt-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={20}
                                slidesPerView={5}
                                loop={true}
                                autoplay={{ delay: 0, disableOnInteraction: false }}
                                speed={2000}
                                grabCursor={true}
                                breakpoints={{
                                    320: { slidesPerView: 3 },
                                    640: { slidesPerView: 4 },
                                    1024: { slidesPerView: 5 }
                                }}
                            >
                                {logos.concat(logos).map((logo, i) => (
                                    <SwiperSlide key={i}>
                                        <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            className="bg-gray-800 p-2 rounded-lg"
                                        >
                                            <img
                                                src={logo}
                                                alt={`Logo ${i}`}
                                                className="h-10 md:h-12 w-auto"
                                            />
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="flex justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img 
                            src={sy} 
                            alt="Profile Work" 
                            className="rounded-lg max-w-full h-auto  shadow-lg"
                        />
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}