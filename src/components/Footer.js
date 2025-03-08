import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import './css/Footer.css';

function Footer() {
  const location = useLocation();
  
  // Determine which page we are on based on the URL
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('bebidas')) {
      document.body.setAttribute('data-page', 'drinks');
    } else if (path.includes('comidas')) {
      document.body.setAttribute('data-page', 'meals');
    } else {
      document.body.setAttribute('data-page', 'other');
    }
    
    return () => {
      document.body.removeAttribute('data-page');
    };
  }, [location]);

  return (
    <footer className="footer" data-testid="footer">
      <div className="footer-inner">
        <Link to="/bebidas">
          <button type="button" src={ drinkIcon } data-testid="drinks-bottom-btn">
            <img src={ drinkIcon } alt="Drink" />
          </button>
        </Link>

        <Link to="/explorar">
          <button type="button" src={ exploreIcon } data-testid="explore-bottom-btn">
            <img src={ exploreIcon } alt="Explorar" />
          </button>
        </Link>

        <Link to="/comidas">
          <button
            type="button"
            src={ mealIcon }
            data-testid="food-bottom-btn"
          >
            <img src={ mealIcon } alt="Comidas" />
          </button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;