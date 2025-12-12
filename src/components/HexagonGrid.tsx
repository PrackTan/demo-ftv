import { useEffect, useRef } from 'react';

interface HexagonGridProps {
  images: string[];
}

export function HexagonGrid({ images }: HexagonGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hexagons = gridRef.current?.querySelectorAll('.hexagon');
    hexagons?.forEach((hex) => observer.observe(hex));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gridRef} className="hexagon-grid">
      {images.map((image, index) => (
        <div
          key={index}
          className="hexagon"
          style={{
            animationDelay: `${index * 0.05}s`,
          }}
        >
          <div className="hexagon-inner">
            <img
              src={image}
              alt={`Team member ${index + 1}`}
              className="hexagon-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
