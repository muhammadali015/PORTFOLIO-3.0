import { useEffect, useState } from "react";

interface Trail {
  x: number;
  y: number;
  id: number;
}

const MouseTrail = () => {
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail: Trail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
      };

      setTrails((prevTrails) => {
        const updatedTrails = [...prevTrails, newTrail];
        // Keep only the last 20 trail points
        return updatedTrails.slice(-20);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up old trails periodically
    const interval = setInterval(() => {
      setTrails((prevTrails) => {
        if (prevTrails.length > 0) {
          return prevTrails.slice(1);
        }
        return prevTrails;
      });
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute w-2 h-2 rounded-full bg-primary transition-all duration-300"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            transform: "translate(-50%, -50%)",
            opacity: (index + 1) / trails.length,
            scale: (index + 1) / trails.length,
          }}
        />
      ))}
      
      {/* Main cursor dot */}
      {trails.length > 0 && (
        <div
          className="absolute w-4 h-4 rounded-full border-2 border-primary"
          style={{
            left: `${trails[trails.length - 1].x}px`,
            top: `${trails[trails.length - 1].y}px`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.1s ease-out",
          }}
        />
      )}
    </div>
  );
};

export default MouseTrail;
