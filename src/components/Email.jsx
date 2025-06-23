import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

export default function Email() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form
    const formData = new FormData(form.current);
    const formValues = Object.fromEntries(formData);
    
    if (!formValues.from_name || !formValues.reply_to || !formValues.message) {
      toast.error('Please fill all required fields');
      setIsLoading(false);
      return;
    }

    emailjs.sendForm(
      'service_a66i4ja',
      'template_1ckm3jq',
      form.current,
      'MWzUCbKibJ_9flsHh'
    )
    .then(() => {
      toast.success('Email sent successfully!', {
        duration: 4000,
        style: {
          background: '#10b981',
          color: '#fff',
        },
        icon: '✉️',
      });
      form.current.reset();
    })
    .catch((error) => {
      console.error('Email sending error:', error);
      toast.error('Failed to send email. Please try again.', {
        duration: 4000,
        style: {
          background: '#ef4444',
          color: '#fff',
        }
      });
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">Let's Work</span>
            <span className="block pt-2 sm:pt-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">
              Together
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-lg mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Ready to collaborate? Send me a message and let's create something amazing.
          </motion.p>
        </div>

        {/* Right Side - Form */}
        <motion.div 
          className="bg-gray-900 bg-opacity-50 rounded-xl p-6 sm:p-8 border border-gray-700 backdrop-blur-sm"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                Your Name *
              </label>
              <input 
                type="text" 
                id="name" 
                name="from_name"
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3 transition-all"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                Your Email *
              </label>
              <input 
                type="email" 
                id="email" 
                name="reply_to"
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3 transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">
                Subject *
              </label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3 transition-all"
                placeholder="Subject of your message"
                required
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                Message *
              </label>
              <textarea 
                id="message" 
                name="message"
                rows="4" 
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3 transition-all"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button 
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 text-blue-950 font-medium rounded-lg text-sm px-5 py-3 bg-gradient-to-r from-yellow-400 to-blue-300 hover:from-yellow-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-yellow-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={!isLoading ? { scale: 1.02 } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend className="text-lg" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}