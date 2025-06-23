import { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    { src: '/assets/ui-1.jpg', alt: 'UI Design 1' },
    { src: '/assets/ui-2.jpg', alt: 'UI Design 2' },
    { src: '/assets/ui-3.jpg', alt: 'UI Design 3' },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Interactive Gallery</h2>
      
      <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={image.alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: activeIndex === index ? 1 : 0,
              scale: activeIndex === index ? 1 : 0.9
            }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
      
      <div className="flex justify-center mt-8 gap-4">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? 'bg-purple-600' : 'bg-gray-300'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveGallery;