import { useEffect, useRef } from "react";

interface MouseTrailProps {
  containerId: string;
}

const MouseTrail = ({ containerId }: MouseTrailProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<{ x: number; y: number; timestamp: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = document.getElementById(containerId);
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cursor = document.querySelector(".custom-cursor") as HTMLElement;
    let isHovering = false;

    // Set canvas size to match container
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const handleMouseEnter = () => {
      isHovering = true;
      if (cursor) cursor.style.display = "block";
    };

    const handleMouseLeave = () => {
      isHovering = false;
      if (cursor) cursor.style.display = "none";
      pointsRef.current = [];
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update cursor position
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }

      pointsRef.current.push({ x, y, timestamp: Date.now() });
    };

    const animate = () => {
      // Clear canvas completely
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentTime = Date.now();
      
      // Remove points older than 1 second
      pointsRef.current = pointsRef.current.filter(
        point => currentTime - point.timestamp < 1000
      );

      const points = pointsRef.current;
      if (points.length < 2) {
        requestAnimationFrame(animate);
        return;
      }

      // Draw smooth line through points
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length - 2; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }

      // Draw last segment
      if (points.length > 1) {
        const lastIdx = points.length - 1;
        ctx.quadraticCurveTo(
          points[lastIdx - 1].x,
          points[lastIdx - 1].y,
          points[lastIdx].x,
          points[lastIdx].y
        );
      }

      // Create gradient with fade based on age
      const gradient = ctx.createLinearGradient(
        points[0].x,
        points[0].y,
        points[points.length - 1].x,
        points[points.length - 1].y
      );
      
      // Calculate opacity based on point age
      points.forEach((point, index) => {
        const age = currentTime - point.timestamp;
        const opacity = Math.max(0, 1 - (age / 1000));
        const stop = index / (points.length - 1);
        gradient.addColorStop(stop, `rgba(168, 85, 247, ${opacity * 0.8})`);
      });

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [containerId]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-10"
        style={{ mixBlendMode: "screen" }}
      />
      {/* Custom cursor dot */}
      <div className="custom-cursor pointer-events-none fixed z-50 w-3 h-3 rounded-full bg-primary/80 -translate-x-1/2 -translate-y-1/2" style={{ display: "none" }} />
    </>
  );
};

export default MouseTrail;
