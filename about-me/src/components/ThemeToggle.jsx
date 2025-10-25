import React from 'react';
import { Button } from 'react-bootstrap';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <Button 
      className="theme-toggle"
      onClick={toggleTheme}
      variant="outline-primary"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </Button>
  );
};

export default ThemeToggle;