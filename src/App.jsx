import React, { useState, useEffect } from 'react';
import { 
  Music, 
  Instagram, 
  Youtube, 
  ArrowUpRight, 
  Play, 
  Film, 
  Headphones, 
  Disc,
  Share2,
  Mail
} from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Modern Bento-grid style link component
  const BentoItem = ({ href, children, className, delay = 0, title, subtitle, icon: Icon }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group relative overflow-hidden bg-[#1a1a1a] border border-white/5 hover:border-white/20 rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative h-full p-6 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
            {Icon && <Icon size={24} className="text-white/80" />}
          </div>
          <ArrowUpRight className="text-white/40 group-hover:text-white transition-colors" size={20} />
        </div>
        
        <div className="mt-4">
          <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{title}</h3>
          {subtitle && <p className="text-sm text-gray-400 font-medium">{subtitle}</p>}
        </div>
      </div>
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[400px] h-[400px] bg-rose-900/20 rounded-full blur-[80px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-[#0a0a0a]/50 border-b border-white/5">
        <span className="text-xl font-bold tracking-tighter font-syne">JAS HORA</span>
        <div className="flex items-center gap-6">
          <a href="mailto:harjas001@gmail.com" className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        
        {/* Header Section */}
        <div className={`mb-24 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Skills Display */}
          <div className="flex flex-col gap-2">
            <h1 className="sr-only">Jas Hora - Music Portfolio</h1>
            <div className="flex flex-col font-syne font-extrabold text-xl sm:text-5xl md:text-7xl uppercase leading-tight tracking-tighter break-words">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:to-white transition-all duration-500 cursor-default">
                Music Producer
              </span>
              <span className="text-gray-600 hover:text-white transition-colors duration-500 cursor-default">
                Singer Songwriter
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white hover:from-white hover:to-purple-400 transition-all duration-500 cursor-default">
                Multi-Instrumentalist
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1 md:gap-6 text-xl md:text-4xl mt-4 text-gray-400 font-bold">
                <span className="hover:text-purple-300 transition-colors">Sound Engineer</span>
                <span className="hidden md:inline text-gray-700">•</span>
                <span className="hover:text-purple-300 transition-colors">Content Creator</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 min-h-[800px]">
          
          {/* Latest Single - Large Feature */}
          <a 
            href="https://artists.landr.com/057914416397"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 md:row-span-2 bg-[#1a1a1a] rounded-3xl border border-white/10 overflow-hidden group relative flex flex-col justify-between p-8 hover:border-purple-500/50 transition-all duration-500"
          >
            <img 
              src="/shaamkichaicover.jpg" 
              alt="Shaam Ki Chai Album Art"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/80 z-0"></div>
            <div className="absolute top-0 right-0 p-4 z-20">
              <div className="bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight size={20} />
              </div>
            </div>
            
            <div className="relative z-10 mt-auto">
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-tr from-purple-500 to-rose-500 flex items-center justify-center animate-spin-slow shadow-lg shadow-purple-900/50">
                <Disc className="text-white" size={32} />
              </div>
              <span className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-2 block">New Release</span>
              <h2 className="text-5xl font-syne font-bold mb-2">Shaam Ki Chai</h2>
              <p className="text-gray-400">Listen on all platforms</p>
            </div>
          </a>

          {/* Spotify */}
          <BentoItem 
            href="https://open.spotify.com/artist/6lkJxcNJAcM25VRakvJySZ?si=MfgtoMj6SZ2fBefPYLC7Gg"
            title="Spotify"
            subtitle="Latest Releases"
            icon={Headphones}
            className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-[#1DB954]/10 to-[#1a1a1a]"
          />

          {/* Apple Music */}
          <BentoItem 
            href="https://music.apple.com/in/artist/jas-hora/1719964116"
            title="Apple Music"
            subtitle="Hi-Fi Audio"
            icon={Music}
            className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-[#FA243C]/10 to-[#1a1a1a]"
          />

          {/* Instagram - Fixed Link */}
          <BentoItem 
            href="https://www.instagram.com/jasmusic/"
            title="Instagram"
            subtitle="@jasmusic"
            icon={Instagram}
            className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-purple-500/10 to-[#1a1a1a]"
          />

          {/* YouTube */}
          <BentoItem 
            href="https://youtube.com/@jashoramusic?si=WzAWpIjoOqOGqzfT"
            title="YouTube"
            subtitle="Official Channel"
            icon={Youtube}
            className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-red-500/10 to-[#1a1a1a]"
          />

          {/* Film Scoring Section - Wide */}
          <div id="film" className="md:col-span-4 bg-[#111] rounded-3xl border border-white/5 p-8 mt-4">
            <div className="flex items-center gap-4 mb-8">
              <Film className="text-purple-400" />
              <h2 className="text-2xl font-syne font-bold">Film Scoring Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Brahmam",
                  client: "Pearl Academy",
                  link: "https://www.instagram.com/reel/CtDjh54hHq0/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
                },
                {
                  title: "SCM5",
                  client: "Pearl Academy",
                  link: "https://www.instagram.com/reel/C9ITRB9ya_M/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                },
                {
                  title: "Landline",
                  client: "Short Film",
                  link: "https://youtu.be/RL6q9VhQEDI?si=fRoXCy4-7s7Tbq70"
                }
              ].map((project, i) => (
                <a 
                  key={i}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-purple-500/30"
                >
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-xs font-mono text-gray-500">0{i+1}</span>
                    <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.client}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Meta Sound Collection - Separate Section */}
          <div id="meta" className="md:col-span-4 mt-12 mb-6">
            <h2 className="text-2xl font-syne font-bold flex items-center gap-3">
              <Share2 className="text-blue-400" />
              Meta Sound Collection
            </h2>
          </div>

          <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Khuda Nu Khat",
                link: "https://www.facebook.com/sound/collection/?sound_collection_tab=sound_tracks&asset_id=962753069190759&reference=direct_link"
              },
              {
                title: "Yaad Kar Lavi",
                link: "https://www.facebook.com/sound/collection/?sound_collection_tab=sound_tracks&asset_id=1671173556947615&reference=direct_link"
              }
            ].map((track, i) => (
              <a 
                key={i}
                href={track.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-[#1a1a1a] rounded-2xl border border-white/5 hover:border-blue-500/50 group transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-full">
                    <Share2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">{track.title}</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Meta Sound Collection</p>
                  </div>
                </div>
                <Play size={20} className="text-gray-600 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer id="contact" className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h4 className="font-syne font-bold text-2xl tracking-tight">GET IN TOUCH</h4>
            <a href="mailto:harjas001@gmail.com" className="text-gray-400 hover:text-white transition-colors font-medium">
              harjas001@gmail.com
            </a>
          </div>
          <div className="flex gap-4">
            <a href="mailto:harjas001@gmail.com" className="group flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20">
              <Mail size={18} className="text-gray-400 group-hover:text-white" />
              <span className="text-sm font-bold tracking-wide">EMAIL ME</span>
            </a>
          </div>
        </footer>
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Syne:wght@400;700;800&display=swap');
        
        body {
          font-family: 'Manrope', sans-serif;
        }
        
        .font-syne {
          font-family: 'Syne', sans-serif;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
