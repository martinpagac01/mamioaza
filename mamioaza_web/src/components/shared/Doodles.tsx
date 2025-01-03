'use client';

import { motion } from 'framer-motion';

export function WavyLineDoodle() {
  return (
    <motion.svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 15C20 15 20 5 40 5C60 5 60 25 80 25C100 25 100 15 120 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </motion.svg>
  );
}

export function CirclePatternDoodle() {
  return (
    <motion.svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
      <circle cx="30" cy="30" r="10" fill="currentColor" fillOpacity="0.1"/>
    </motion.svg>
  );
}

export function SpiralDoodle() {
  return (
    <motion.svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 25C25 20 27 15 32 15C37 15 39 20 39 25C39 30 37 35 32 35C27 35 25 30 25 25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </motion.svg>
  );
}

export function BalloonDoodle() {
  return (
    <motion.svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5C23.866 5 27 8.13401 27 12C27 15.866 23.866 19 20 19C16.134 19 13 15.866 13 12C13 8.13401 16.134 5 20 5Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 19V35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </motion.svg>
  );
}

export function HeartDoodle() {
  return (
    <motion.svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 33.3333L17.4167 30.9167C9.16667 23.4167 3.33334 18.0833 3.33334 11.6667C3.33334 6.33333 7.33334 2.5 12.5 2.5C15.4167 2.5 18.25 3.91667 20 6.25C21.75 3.91667 24.5833 2.5 27.5 2.5C32.6667 2.5 36.6667 6.33333 36.6667 11.6667C36.6667 18.0833 30.8333 23.4167 22.5833 30.9167L20 33.3333Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </motion.svg>
  );
}

export function StarDoodle() {
  return (
    <motion.svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5L23.5267 15.9733L34.5 20L23.5267 24.0267L20 35L16.4733 24.0267L5.5 20L16.4733 15.9733L20 5Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </motion.svg>
  );
}

export function FlowerDoodle() {
  return (
    <motion.svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 13.3333C22.7614 13.3333 25 11.0947 25 8.33333C25 5.57191 22.7614 3.33333 20 3.33333C17.2386 3.33333 15 5.57191 15 8.33333C15 11.0947 17.2386 13.3333 20 13.3333Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M20 36.6667V13.3333" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M26.6667 20C29.4281 20 31.6667 17.7614 31.6667 15C31.6667 12.2386 29.4281 10 26.6667 10C23.9052 10 21.6667 12.2386 21.6667 15C21.6667 17.7614 23.9052 20 26.6667 20Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13.3333 20C16.0947 20 18.3333 17.7614 18.3333 15C18.3333 12.2386 16.0947 10 13.3333 10C10.5719 10 8.33334 12.2386 8.33334 15C8.33334 17.7614 10.5719 20 13.3333 20Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
    </motion.svg>
  );
}

export function CrayonDoodle() {
  return (
    <motion.svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 30L30 10M30 10L25 5L10 20L20 30L30 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </motion.svg>
  );
}

export function ToyBlockDoodle() {
  return (
    <motion.svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="30" height="30" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 15H35" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15 5V35" stroke="currentColor" strokeWidth="1.5"/>
    </motion.svg>
  );
}
