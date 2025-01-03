interface SquiggleDoodleProps {
  className?: string;
  color?: string;
}

export default function SquiggleDoodle({ className = "", color }: SquiggleDoodleProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 74 109" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M55.0706 52.3425C50.7432 53.5445 46.6801 55.227 45.5864 49.797C44.9342 46.5587 46.0803 43.8303 48.9537 42.12C60.557 35.2137 69.7942 49.3561 64.2963 59.6783C60.373 67.0441 51.9742 70.8717 43.9331 70.8435C32.9838 70.805 30.1659 58.4863 31.8185 49.2822C33.62 39.2488 41.6651 29.5934 52.7712 30.9932C66.7785 32.7586 75.3694 49.0543 71.3579 61.9149C67.4228 74.5305 58.2785 85.7482 45.3139 89.5685C38.6993 91.5177 30.526 92.3787 23.7354 90.8019C13.8653 88.51 9.14429 78.6332 6.93529 69.606C3.5431 55.7438 12.3064 41.8645 21.8317 32.5193C31.7501 22.7884 44.0068 17.8495 57.7353 22.4623C70.5224 26.7588 73.195 39.5421 72.3209 51.5915C70.8469 71.9107 59.2821 88.729 43.3618 101.061C28.8636 112.291 5.54663 110.793 2.169 89.8895C0.0943269 77.0499 2.31608 62.9136 6.8061 50.8123C10.6611 40.4224 16.6368 30.5412 23.913 22.1959C38.7061 5.22938 32.2335 16.2863 48.2027 1" 
        stroke="currentColor" 
        strokeWidth="1.15035" 
        strokeLinecap="round"
      />
    </svg>
  );
}