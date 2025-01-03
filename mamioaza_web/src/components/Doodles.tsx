'use client';

import { SVGProps } from 'react';

interface DoodleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: string;
}

export function StarDoodle({ className = '', color = 'currentColor', size = '24' }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.2-6.3-4.8-6.3 4.8 2.3-7.2-6-4.6h7.6z" />
    </svg>
  );
}

export function HeartDoodle({ className = '', color = 'currentColor', size = '24' }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export function BalloonDoodle({ className = '', color = 'currentColor', size = '24' }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M12 2c-4 0-7 3-7 7 0 2.5 1.5 4.5 3 5.5V17c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2.5c1.5-1 3-3 3-5.5 0-4-3-7-7-7zm1 17h-2v3h2v-3z" />
      <path d="M11 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm2-3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
    </svg>
  );
}

export function FlowerDoodle({ className = '', color = 'currentColor', size = '24' }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      <path d="M12 2C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
    </svg>
  );
}

export function CrayonDoodle({ className = '', color = 'currentColor', size = '24' }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M19.7 3.3l1-1c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-1 1c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0zM17.6 5.4L5.8 17.2l-1.5 4.5 4.5-1.5L20.6 8.4c.4-.4.4-1 0-1.4l-1.6-1.6c-.4-.4-1-.4-1.4 0z" />
    </svg>
  );
}

export function ToyBlockDoodle({ className = '', color = 'currentColor', size = '24' }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M21 8c0-1.1-.9-2-2-2h-2V4c0-1.1-.9-2-2-2H9C7.9 2 7 2.9 7 4v2H5C3.9 6 3 6.9 3 8v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8zM9 4h6v2H9V4zm10 16H5V8h14v12z" />
      <path d="M11 10h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2zm-4 4h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2z" />
    </svg>
  );
}
