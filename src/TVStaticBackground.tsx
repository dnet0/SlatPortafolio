import React, { useRef, useEffect, useState } from "react";

interface DynamicNoiseBackgroundProps {
  width?: number;
  height?: number;
  color?: string;         // color principal
  opacity?: number;       // opacidad del ruido (0 a 1)
  speed?: number;         // velocidad de animación
  scale?: number;         // nivel de detalle del ruido
  interactive?: boolean;  // si responde al ratón
  className?: string;
}

export const DynamicNoiseBackground: React.FC<DynamicNoiseBackgroundProps> = ({
  width = typeof window !== "undefined" ? window.innerWidth : 800,
  height = typeof window !== "undefined" ? window.innerHeight : 600,
  color = "#339933",
  opacity = 0.12,
  speed = 0.0008,
  scale = 0.003,
  interactive = true,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0.5, y: 0.3 });

  // Simplex noise replacement (fast pseudo noise)
  const noise = (x: number, y: number) => {
    const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return n - Math.floor(n);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame: number;
    const render = (time: number) => {
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      // actualiza offset (movimiento del ruido)
      const vx = velocityRef.current.x;
      const vy = velocityRef.current.y;
      setOffset((prev) => ({
        x: prev.x + vx * speed * time * 0.001,
        y: prev.y + vy * speed * time * 0.001,
      }));

      const ox = offset.x;
      const oy = offset.y;

      // convertir color HEX -> RGB
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const n = noise(x * scale + ox, y * scale + oy);
          const val = Math.floor(n * 255);
          const idx = (y * width + x) * 4;
          data[idx] = r;
          data[idx + 1] = g;
          data[idx + 2] = b;
          data[idx + 3] = val * opacity;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frame);
  }, [width, height, color, opacity, scale, speed, offset]);

  // Interactividad
  useEffect(() => {
    if (!interactive) return;
    const onMove = (e: MouseEvent) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      velocityRef.current = {
        x: cx * 2,
        y: cy * 2,
      };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [interactive]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        display: "block",
        background: "black",
      }}
    />
  );
};
