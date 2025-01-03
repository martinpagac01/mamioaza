'use client';

interface PageTitleProps {
  subtitle: string;
  title: string;
  className?: string;
}

export default function PageTitle({ subtitle, title, className = "mb-16" }: PageTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <span className="inline-block text-[#F8941C] uppercase tracking-wider font-medium mb-4">
        {subtitle}
      </span>
      <h1 className="text-[#1E293B] text-4xl lg:text-5xl font-bold mb-6">
        {title}
      </h1>
    </div>
  );
}
