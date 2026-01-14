import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import music from './assets/Zigeunerweisen.mp3';
import HomeAboutPage from './pages/HomeAboutPage';
import AcademicExtracurricularsPage from './pages/AcademicExtracurricularsPage';
import CreativePage from './pages/CreativePage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPlayer, setShowPlayer] = useState(true);
  const audioRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowPlayer(false);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setShowPlayer(true);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top when changing pages
    
    if (page === 'creative' && audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="app">
      <audio 
        ref={audioRef} 
        src={music}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <Navigation currentPage={currentPage} setCurrentPage={handlePageChange} />
      
      {currentPage === 'home' && <HomeAboutPage />}
      {currentPage === 'academic' && <AcademicExtracurricularsPage />}
      {currentPage === 'creative' && <CreativePage />}
      {currentPage === 'skills' && <SkillsPage />}
      {currentPage === 'contact' && <ContactPage />}

      {(isPlaying || currentTime > 0) && (
        <div className={`audio-player ${showPlayer ? 'visible' : 'hidden'}`}>
          <button onClick={togglePlayPause} className="play-pause-btn">
            {isPlaying ? '⏸' : '▶'}
          </button>
          <span className="time-display">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="seek-bar"
          />
          <span className="time-display">{formatTime(duration)}</span>
        </div>
      )}
    </div>
  );
}

function Navigation({ currentPage, setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home & About' },
    { id: 'academic', label: 'Academic & Extracurriculars' },
    { id: 'creative', label: 'Creative' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="nav">
      <button 
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <li key={item.id}>
            <button
              onClick={() => handleNavClick(item.id)}
              className={`nav-button ${currentPage === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}