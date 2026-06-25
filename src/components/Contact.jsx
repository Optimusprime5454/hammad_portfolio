import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import Swal from 'sweetalert2';

const Contact = () => {
  const { contact } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    // Web3Forms configuration
    // The user should replace the access_key with their own from https://web3forms.com/
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for reaching out. I will get back to you soon!',
          background: '#05001c',
          color: '#fff',
          confirmButtonColor: '#6366f1',
          timer: 3000
        });
        e.target.reset();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
        background: '#05001c',
        color: '#fff',
        confirmButtonColor: '#6366f1'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#05001c]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-gray-400">Let's discuss your next project or just say hi!</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass p-6 sm:p-8 rounded-3xl border border-white/5 space-y-6 sm:space-y-8">
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-xl sm:text-2xl group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <FaEnvelope />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white font-medium text-sm sm:text-base truncate">{contact.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent text-xl sm:text-2xl group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white font-medium text-sm sm:text-base">{contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary text-xl sm:text-2xl group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white font-medium text-sm sm:text-base">{contact.location}</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 sm:p-8 rounded-3xl border border-white/5">
              <p className="text-gray-400 font-bold mb-6 italic tracking-wider text-sm">Social Connect</p>
              <div className="flex items-center gap-4">
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center text-2xl hover:text-primary hover:border-primary/50 transition-all"><FaGithub /></a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center text-2xl hover:text-primary hover:border-primary/50 transition-all"><FaLinkedin /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass p-6 sm:p-10 rounded-3xl border border-white/5 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 ml-2">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 ml-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 ml-2">Subject</label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 ml-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me more about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all resize-none text-sm sm:text-base"
                ></textarea>
              </div>

              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`w-full bg-primary py-4 rounded-2xl font-black text-lg shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Contact;
