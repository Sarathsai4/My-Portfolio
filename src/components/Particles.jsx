import { twMerge } from "tailwind-merge";
import { useEffect, useRef } from "react";

function hexToRgb(hex) {
  let normalized = hex.replace("#", "");

  if (normalized.length === 3) {
    normalized = normalized
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const hexInt = parseInt(normalized, 16);
  return [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255];
}

export const Particles = ({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
  ...props
}) => {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const context = useRef(null);
  const circles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const rafID = useRef(null);
  const resizeTimeout = useRef(null);
  const isVisible = useRef(true);
  const rgb = useRef(hexToRgb(color));

  useEffect(() => {
    rgb.current = hexToRgb(color);
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvasContainerRef.current;
    if (!canvas || !container) return;

    context.current = canvas.getContext("2d", { alpha: true });

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const effectiveQuantity =
      window.innerWidth < 768 ? Math.min(quantity, 42) : Math.min(quantity, 72);

    const circleParams = () => {
      const x = Math.floor(Math.random() * canvasSize.current.w);
      const y = Math.floor(Math.random() * canvasSize.current.h);
      return {
        x,
        y,
        translateX: 0,
        translateY: 0,
        size: Math.floor(Math.random() * 2) + size,
        alpha: 0,
        targetAlpha: parseFloat((Math.random() * 0.45 + 0.08).toFixed(1)),
        dx: (Math.random() - 0.5) * 0.08,
        dy: (Math.random() - 0.5) * 0.08,
        magnetism: 0.1 + Math.random() * 3,
      };
    };

    const clearContext = () => {
      context.current?.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
    };

    const drawCircle = (circle, update = false) => {
      if (!context.current) return;

      const { x, y, translateX, translateY, size: pointSize, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, pointSize, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(${rgb.current.join(", ")}, ${alpha})`;
      context.current.fill();
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!update) circles.current.push(circle);
    };

    const resizeCanvas = () => {
      canvasSize.current.w = container.offsetWidth;
      canvasSize.current.h = container.offsetHeight;

      canvas.width = canvasSize.current.w * dpr;
      canvas.height = canvasSize.current.h * dpr;
      canvas.style.width = `${canvasSize.current.w}px`;
      canvas.style.height = `${canvasSize.current.h}px`;
      context.current?.setTransform(dpr, 0, 0, dpr, 0, 0);

      circles.current = [];
      clearContext();
      for (let i = 0; i < effectiveQuantity; i++) {
        drawCircle(circleParams());
      }
    };

    const remapValue = (value, start1, end1, start2, end2) => {
      const remapped =
        ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
      return remapped > 0 ? remapped : 0;
    };

    const animate = () => {
      if (!isVisible.current || prefersReducedMotion) {
        rafID.current = null;
        return;
      }

      clearContext();
      circles.current.forEach((circle, i) => {
        const edge = [
          circle.x + circle.translateX - circle.size,
          canvasSize.current.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSize.current.h - circle.y - circle.translateY - circle.size,
        ];
        const closestEdge = edge.reduce((a, b) => Math.min(a, b));
        const remapClosestEdge = parseFloat(
          remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
        );

        if (remapClosestEdge > 1) {
          circle.alpha = Math.min(circle.alpha + 0.018, circle.targetAlpha);
        } else {
          circle.alpha = circle.targetAlpha * remapClosestEdge;
        }

        circle.x += circle.dx + vx;
        circle.y += circle.dy + vy;
        circle.translateX +=
          (mouse.current.x / (staticity / circle.magnetism) -
            circle.translateX) /
          ease;
        circle.translateY +=
          (mouse.current.y / (staticity / circle.magnetism) -
            circle.translateY) /
          ease;

        drawCircle(circle, true);

        if (
          circle.x < -circle.size ||
          circle.x > canvasSize.current.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSize.current.h + circle.size
        ) {
          circles.current.splice(i, 1);
          drawCircle(circleParams());
        }
      });

      rafID.current = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (!rafID.current && !prefersReducedMotion) {
        rafID.current = window.requestAnimationFrame(animate);
      }
    };

    const handlePointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = event.clientX - rect.left - w / 2;
      const y = event.clientY - rect.top - h / 2;
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;

      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
      }
    };

    const handleResize = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(resizeCanvas, 180);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
        if (entry.isIntersecting) startAnimation();
      },
      { threshold: 0.05 }
    );

    resizeCanvas();
    if (!prefersReducedMotion) startAnimation();
    observer.observe(container);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafID.current != null) window.cancelAnimationFrame(rafID.current);
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [color, ease, quantity, refresh, size, staticity, vx, vy]);

  return (
    <div
      className={twMerge("pointer-events-none", className)}
      ref={canvasContainerRef}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
};
