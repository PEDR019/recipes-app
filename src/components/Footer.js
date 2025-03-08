import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';

function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer-inner">
        <Link to="/bebidas">
          <button
            type="button"
            className="icon-button"
            data-testid="drinks-bottom-btn"
          >
            {/* SVG animado de cerveja */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 24 24"
              className="beer-icon"
            >
              <mask id="lineMdBeerAltTwotoneLoop0">
                <g>
                  <g>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2"
                    />
                    <path
                      fill="#fff"
                      fillOpacity="0.3"
                      d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2v15h25Z"
                    />
                    <animateMotion
                      calcMode="linear"
                      dur="3s"
                      path="M0 0h10"
                      repeatCount="indefinite"
                    />
                  </g>
                  <animateMotion
                    fill="freeze"
                    begin="0.7s"
                    calcMode="linear"
                    dur="0.3s"
                    path="M0 0v-16"
                  />
                </g>
              </mask>
              <path
                fill="none"
                stroke="currentColor"
                strokeDasharray="64"
                strokeDashoffset="64"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 3l-2 18h-9l-2 -18Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  values="64;0"
                />
              </path>
              <path
                fill="currentColor"
                d="M18 3l-2 18h-9l-2 -18Z"
                mask="url(#lineMdBeerAltTwotoneLoop0)"
              />
            </svg>
          </button>
        </Link>

        <Link to="/explorar">
          <button
            type="button"
            className="icon-button"
            data-testid="explore-bottom-btn"
          >
            {/* SVG animado de lupa/explorar */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 24 24"
              className="explore-icon"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path
                  fill="currentColor"
                  fillOpacity="0"
                  strokeDasharray="40"
                  strokeDashoffset="40"
                  d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.7s"
                    dur="0.15s"
                    values="0;0.3"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.5s"
                    values="40;0"
                  />
                </path>
                <path
                  strokeDasharray="12"
                  strokeDashoffset="12"
                  d="M10.5 13.5l-7.5 7.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.2s"
                    values="12;0"
                  />
                </path>
              </g>
            </svg>
          </button>
        </Link>

        <Link to="/comidas">
          <button
            type="button"
            className="icon-button"
            data-testid="food-bottom-btn"
          >
            {/* SVG animado de comida */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 24 24"
              className="food-icon"
            >
              <g
                fill="currentColor"
                fillOpacity="0"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path
                  strokeDasharray="56"
                  strokeDashoffset="56"
                  d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.7s"
                    dur="0.15s"
                    values="0;0.3"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="56;0"
                  />
                </path>
                <g stroke="none">
                  <circle cx="9.5" cy="7.5" r="1.5">
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="0.9s"
                      dur="0.2s"
                      values="0;1"
                    />
                  </circle>
                  <circle cx="11" cy="17.5" r="1.5">
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="1s"
                      dur="0.2s"
                      values="0;1"
                    />
                  </circle>
                  <circle cx="6.5" cy="11.5" r="1.5">
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="1.1s"
                      dur="0.2s"
                      values="0;1"
                    />
                  </circle>
                  <circle cx="16.5" cy="14.5" r="1.5">
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="1.2s"
                      dur="0.2s"
                      values="0;1"
                    />
                  </circle>
                  <circle cx="11.5" cy="12.5" r="1.5">
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="1.3s"
                      dur="0.2s"
                      values="0;1"
                    />
                  </circle>
                </g>
              </g>
            </svg>
          </button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;