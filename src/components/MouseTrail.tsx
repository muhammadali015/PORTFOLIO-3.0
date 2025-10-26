import { useEffect, useRef } from "react";

const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cursor = document.querySelector(".custom-cursor") as HTMLElement;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      // Update cursor position
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }

      pointsRef.current.push({ x: e.clientX, y: e.clientY });
      
      // Keep only last 30 points for smoother trail
      if (pointsRef.current.length > 30) {
        pointsRef.current.shift();
      }
    };

    const animate = () => {
      // Clear canvas with slight fade effect
      ctx.fillStyle = "rgba(14, 15, 23, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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

      // Style the line with gradient
      const gradient = ctx.createLinearGradient(
        points[0].x,
        points[0].y,
        points[points.length - 1].x,
        points[points.length - 1].y
      );
      gradient.addColorStop(0, "rgba(168, 85, 247, 0)");
      gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.5)");
      gradient.addColorStop(1, "rgba(168, 85, 247, 1)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // Fade out old points
      if (points.length > 0) {
        pointsRef.current = points.slice(-25);
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50"
        style={{ mixBlendMode: "screen" }}
      />
      {/* Custom cursor dot */}
      <div className="custom-cursor pointer-events-none fixed z-50 w-3 h-3 rounded-full bg-primary/80 -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export default MouseTrail;
