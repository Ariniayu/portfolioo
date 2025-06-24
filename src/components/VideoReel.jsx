import { motion, useAnimation } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const VideoReel = ({ project, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const controls = useAnimation();

  // Deteksi jenis video (YouTube atau lokal)
  const isYouTube = /youtube\.com|youtu\.be/.test(project.videoUrl);

  // Ekstrak ID YouTube (diperbarui untuk handle Shorts)
  const getYouTubeId = (url) => {
    try {
      // Handle YouTube Shorts URL (e.g., https://youtube.com/shorts/VIDEO_ID)
      if (url.includes('youtube.com/shorts/')) {
        return url.split('/shorts/')[1].split('?')[0];
      }
      
      // Handle regular YouTube URLs
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    } catch (e) {
      console.error("Error extracting YouTube ID:", e);
      setError("Invalid YouTube URL");
      return null;
    }
  };

  const youtubeId = isYouTube ? getYouTubeId(project.videoUrl) : null;

  // Handle play
  const handlePlay = () => {
    setIsPlaying(true);
    setError(null);
    
    if (!isYouTube && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => {
        console.error("Autoplay error:", e);
        setError("Autoplay blocked. Please click to play.");
        videoRef.current.controls = true;
      });
    }
  };

  // Animasi saat komponen muncul
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Thumbnail Overlay */}
      {!isPlaying && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={handlePlay}
          whileHover={{ opacity: 0.9 }}
        >
          <div className="w-15 h-15 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            </svg>
          </div>
        </motion.div>
      )}

      {/* Video Player */}
      <div className="rounded-xl overflow-hidden border-2 border-gray-800 group-hover:border-blue-500 transition-all">
        {error && (
          <div className="bg-red-900 text-white p-4">
            Error: {error}
          </div>
        )}

        {isPlaying ? (
          isYouTube ? (
            youtubeId ? (
              <div className="w-full h-full relative pt-[56.25%]">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  onError={() => setError("Failed to load YouTube video")}
                />
              </div>
            ) : (
              <div className="bg-red-900 text-white p-4">
                Invalid YouTube URL format
              </div>
            )
          ) : (
            <video 
              ref={videoRef}
              src={project.videoUrl} 
              controls 
              autoPlay 
              muted={false}
              className="w-full h-full object-cover"
              onError={() => setError("Failed to load video")}
            />
          )
        ) : (
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-auto"
            onError={() => setError("Failed to load thumbnail")}
          />
        )}
      </div>

      {/* Project Info */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-blue-400">{project.category}</p>
      </div>
    </motion.div>
  );
};

export default VideoReel;