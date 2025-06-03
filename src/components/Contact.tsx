
import { useState } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300 text-white placeholder-gray-400 resize-none"
                />
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-scale-in">
            <div className="glass-card">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-300">mostaque.sk46@gmail.com.com</p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-gray-300">6289972985</p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-gray-300">West Bengal</p>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-500/20 hover:scale-110 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500/20 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pink-500/20 hover:scale-110 transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div className="glass-card">
              <h4 className="text-white font-medium mb-2">Response Time</h4>
              <p className="text-gray-300 text-sm">I typically respond within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
