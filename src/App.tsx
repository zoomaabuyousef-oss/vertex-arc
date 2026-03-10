import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PhoneCall, 
  Megaphone, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  BarChart3, 
  Globe, 
  MessageSquare,
  Zap,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          className="flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-500 focus-visible:outline-offset-4 rounded-lg" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Vertex Arc - Back to top"
        >
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Cpu className="text-black w-6 h-6" aria-hidden="true" />
          </div>
          <span className="text-2xl font-bold tracking-tighter font-display">VERTEX ARC</span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors cursor-pointer">Services</button>
          <button onClick={() => scrollToSection('stats')} className="hover:text-emerald-400 transition-colors cursor-pointer">About</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors cursor-pointer">Contact</button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-black px-5 py-2 rounded-full hover:bg-emerald-400 transition-all font-semibold cursor-pointer"
          >
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden text-white cursor-pointer" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            <button className="text-left text-white/70 hover:text-emerald-400 py-2" onClick={() => scrollToSection('services')}>Services</button>
            <button className="text-left text-white/70 hover:text-emerald-400 py-2" onClick={() => scrollToSection('stats')}>About</button>
            <button className="text-left text-white/70 hover:text-emerald-400 py-2" onClick={() => scrollToSection('contact')}>Contact</button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-500 text-black py-3 rounded-xl font-bold mt-2 cursor-pointer"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-bold tracking-widest uppercase text-emerald-400 mb-6">
            The Future of Business Automation
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight leading-[1.1] md:leading-[0.9] mb-8">
            Scale Your Reach with <br />
            <span className="text-gradient">Intelligent Systems</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Vertex Arc provides cutting-edge AI receptionists and hyper-targeted ad campaigns designed to automate your growth and capture every lead.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto bg-emerald-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Services <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto glass px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              Book a Demo
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 relative"
        >
          <div className="glass rounded-3xl p-4 md:p-8 max-w-5xl mx-auto relative overflow-hidden">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-left space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Zap className="text-emerald-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold">Instant Response</h3>
                  <p className="text-white/60 text-sm">Our AI receptionists handle calls 24/7 with human-like precision.</p>
                </div>
                <div className="text-left space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <BarChart3 className="text-cyan-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold">Data Driven</h3>
                  <p className="text-white/60 text-sm">Ad campaigns optimized by neural networks for maximum ROI.</p>
                </div>
                <div className="text-left space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Globe className="text-purple-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold">Global Reach</h3>
                  <p className="text-white/60 text-sm">Deploy multi-language campaigns across all major platforms.</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, features, colorClass }: any) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="glass rounded-[2rem] p-8 flex flex-col h-full relative overflow-hidden group"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20 -z-10 ${colorClass}`} />
      
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${colorClass.replace('bg-', 'bg-opacity-20 bg-')}`}>
        <Icon className="w-8 h-8" aria-hidden="true" />
      </div>
      
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-white/70 mb-8 leading-relaxed">
        {description}
      </p>
      
      <div className="space-y-3 mb-10 mt-auto">
        {features.map((feature: string, i: number) => (
          <div key={i} className="flex items-center gap-3 text-sm text-white/90">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
            {feature}
          </div>
        ))}
      </div>
      
      <button 
        onClick={scrollToContact}
        className="group/btn flex items-center gap-2 font-bold text-emerald-400 hover:text-white transition-colors cursor-pointer"
      >
        Learn More <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Core <span className="text-emerald-400">Services</span></h2>
            <p className="text-white/70 text-lg">
              We combine advanced artificial intelligence with creative marketing strategies to provide a full-stack growth solution for your business.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-2">
              <div className="w-12 h-1 bg-emerald-500 rounded-full" />
              <div className="w-4 h-1 bg-white/10 rounded-full" />
              <div className="w-4 h-1 bg-white/10 rounded-full" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ServiceCard 
            icon={PhoneCall}
            title="AI Receptionist"
            description="Never miss a lead again. Our AI-powered voice and chat receptionists handle inquiries, schedule appointments, and qualify leads 24/7."
            features={[
              "Natural Language Processing",
              "Calendar Integration",
              "Multi-channel Support",
              "Lead Qualification Logic",
              "Custom Voice Profiles"
            ]}
            colorClass="bg-emerald-500"
          />
          <ServiceCard 
            icon={Megaphone}
            title="Ad Campaigns"
            description="Hyper-targeted advertising across Google, Meta, and LinkedIn. We use AI to optimize your spend and creative for maximum conversion."
            features={[
              "AI-Driven Ad Creative",
              "Predictive Audience Targeting",
              "Real-time Performance Monitoring",
              "Cross-platform Syncing",
              "Automated A/B Testing"
            ]}
            colorClass="bg-cyan-500"
          />
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Leads Captured", value: "2.4M+" },
    { label: "ROI Increase", value: "145%" },
    { label: "Global Clients", value: "500+" },
    { label: "Uptime", value: "99.9%" },
  ];

  return (
    <section id="stats" className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/60 text-sm uppercase tracking-widest font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-full max-w-3xl h-[400px] bg-emerald-500/5 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[3rem] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to <br /><span className="text-emerald-400">Automate?</span></h2>
            <p className="text-white/70 text-lg mb-10">
              Join hundreds of companies that have transformed their operations with Vertex Arc. Let's build your future together.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <MessageSquare className="text-emerald-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-white/60 font-semibold uppercase tracking-wider">Email Us</div>
                  <div className="text-lg font-bold">123vertex.arc@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <PhoneCall className="text-emerald-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-white/60 font-semibold uppercase tracking-wider">Call Us</div>
                  <div className="text-lg font-bold">050 156 0155</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-4" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input id="name" required type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder:text-white/40" />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input id="email" required type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder:text-white/40" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="sr-only">Select Service</label>
                    <select id="service" required className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors appearance-none text-white">
                      <option value="" className="bg-[#050505]">Select Service</option>
                      <option value="receptionist" className="bg-[#050505]">AI Receptionist</option>
                      <option value="campaigns" className="bg-[#050505]">Ad Campaigns</option>
                      <option value="full" className="bg-[#050505]">Full Suite</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea id="message" required placeholder="Message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder:text-white/40"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:bg-emerald-500 transition-all cursor-pointer">
                    Send Message
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 rounded-[2rem] p-12 text-center"
                >
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-black w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-white/60">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
              <Cpu className="text-black w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tighter font-display">VERTEX ARC</span>
          </div>
          
          <div className="flex gap-8 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          
          <div className="text-sm text-white/40">
            © 2026 Vertex Arc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
