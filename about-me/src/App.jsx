
import React from 'react';
import AboutMe from './aboutMe.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ThemeToggle from './components/ThemeToggle.jsx';
import  { useState, useEffect } from 'react';

function App() {
    const [theme, setTheme] = useState('dark');
     useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="App">
       <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <AboutMe />
    </div>
  );
}

export default App;