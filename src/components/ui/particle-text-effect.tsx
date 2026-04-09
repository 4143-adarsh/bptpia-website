"use client";

import React, { useEffect, useRef } from "react";

export function ParticleTextEffect({ words }: { words: string[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Initial resize to match parent
    let width = canvas.parentElement?.clientWidth || 800;
    let height = canvas.parentElement?.clientHeight || 400;
    canvas.width = width;
    canvas.height = height;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let wordTimer: NodeJS.Timeout;

    class Particle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
      friction: number;
      ease: number;

      constructor(x: number, y: number, color: string) {
        // Spawn randomly scattered around screen
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.targetX = x;
        this.targetY = y;
        this.size = Math.random() * 2 + 1;
        this.color = color;
        this.vx = 0;
        this.vy = 0;
        this.friction = 0.85 + Math.random() * 0.1;
        this.ease = 0.05 + Math.random() * 0.05;
      }

      update(mouse: { x: number; y: number; radius: number }) {
        let dx = this.targetX - this.x;
        let dy = this.targetY - this.y;

        // Interaction with mouse pointer
        let mouseDx = mouse.x - this.x;
        let mouseDy = mouse.y - this.y;
        let distance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (distance < mouse.radius) {
          const forceDirectionX = mouseDx / distance;
          const forceDirectionY = mouseDy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * -7;
          const directionY = forceDirectionY * force * -7;
          this.vx += directionX;
          this.vy += directionY;
        }

        // Apply physics
        this.x += (dx * this.ease) + this.vx;
        this.y += (dy * this.ease) + this.vy;
        this.vx *= this.friction;
        this.vy *= this.friction;
      }

      draw(c: CanvasRenderingContext2D) {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
      }
    }

    const mouse = { x: -1000, y: -1000, radius: 100 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const initParticles = (text: string) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "white";
      
      // Determine font size based on screen width and word length
      const fontSize = Math.min(width / (text.length * 0.6), 140);
      ctx.font = `800 ${fontSize}px 'Inter', system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      // Draw text to center
      ctx.fillText(text, width / 2, height / 2);

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      const newParticles: Particle[] = [];
      const gap = width > 800 ? 5 : 4; // Dense particles

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];

          // Text pixel check
          if (alpha > 128) {
            const isColored = Math.random() > 0.85;
            const color = isColored
              ? Math.random() > 0.5
                ? "#FFB800" // Theme Gold
                : "#C8102E" // Theme Red
              : "rgba(255, 255, 255, 0.9)"; // Dominant white

            newParticles.push(new Particle(x, y, color));
          }
        }
      }

      // Morph animation logic
      if (particles.length === 0) {
        particles = newParticles;
      } else {
        const nextParticles: Particle[] = [];
        for (let i = 0; i < newParticles.length; i++) {
          if (particles[i]) {
            // Morph existing to new positions
            particles[i].targetX = newParticles[i].targetX;
            particles[i].targetY = newParticles[i].targetY;
            particles[i].color = newParticles[i].color;
            nextParticles.push(particles[i]);
          } else {
            // Spawn new ones scattered loosely
            const p = newParticles[i];
            p.x = Math.random() * width;
            p.y = Math.random() * height;
            nextParticles.push(p);
          }
        }
        
        // Let leftover particles drift away then get cleared next cycle
        for(let i = newParticles.length; i < particles.length; i++) {
           particles[i].targetX = Math.random() * width * 2 - width/2;
           particles[i].targetY = Math.random() * height * 2 - height/2;
           particles[i].color = "transparent"; 
           nextParticles.push(particles[i]);
        }
        
        particles = nextParticles;
      }
    };

    let wordIdx = 0;
    const changeWord = () => {
      initParticles(words[wordIdx]);
      wordIdx = (wordIdx + 1) % words.length;
    };
    
    changeWord(); // boot up
    wordTimer = setInterval(changeWord, 4000);

    const onResize = () => {
      width = canvas.parentElement?.clientWidth || 800;
      height = canvas.parentElement?.clientHeight || 400;
      canvas.width = width;
      canvas.height = height;
      
      const prevIdx = wordIdx === 0 ? words.length - 1 : wordIdx - 1;
      initParticles(words[prevIdx]);
    };
    window.addEventListener("resize", onResize);

    const animate = () => {
      // Trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update(mouse);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      clearInterval(wordTimer);
    };
  }, [words]);

  return <canvas ref={canvasRef} className="block w-full h-full cursor-crosshair" />;
}
