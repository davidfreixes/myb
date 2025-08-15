
import Image from 'next/image';
import { useState } from 'react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
  aspectRatio?: string;
}

export function YouTubeFacade({
  videoId,
  title,
  className = '',
  aspectRatio = 'aspect-video',
}: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  const handleClick = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative cursor-pointer ${aspectRatio} ${className}`} onClick={handleClick}>
      {!isLoaded ? (
        <>
          <Image
            src={"https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg"}
            alt={`${title} thumbnail`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-10 transition-all duration-300">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transform transition-transform">
              <svg 
                className="w-12 h-12 text-white" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      )}
    </div>
  );
}
