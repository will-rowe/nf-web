import { useEffect, useRef } from "react";

interface BackgroundGraphicProps {
  className: string;
}

const stringPositions = [800, 680, 560, 440, 320, 200];

const BackgroundGraphic = ({ className }: BackgroundGraphicProps) => (
  <svg
    viewBox="0 0 1000 2000"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    style={{ width: "100%", height: "100%" }}
  >
    <g className="logo">
      {stringPositions.map((x, i) => (
        <g key={x}>
          <line x1={x} x2={x} y1={0} y2={2000} strokeWidth={6 - i} />
          <AnimatedDot x={x} r={6 - i + 2} />
        </g>
      ))}
    </g>
  </svg>
);

const AnimatedDot = ({ x, r }: { x: number; r: number }) => {
  const dotRef = useRef<SVGCircleElement>(null);
  const phaseOffsetRef = useRef(Math.random() * Math.PI * 2);
  const shakePhaseRef = useRef(Math.random() * Math.PI * 2);
  const startTimeRef = useRef<number | null>(null);
  const nextStartTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let frame: number;
    const amplitude = 3;
    const shakeAmplitude = 5;
    const duration = 2000;
    const shakeFrequency = 80;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
        nextStartTimeRef.current =
          timestamp + duration + Math.random() * duration;
      }

      const elapsed = timestamp - startTimeRef.current;
      const t = (elapsed % duration) / duration;
      const y = duration * (1 - t);

      // Randomize phase and set next start time when animation completes
      if (elapsed >= duration && nextStartTimeRef.current) {
        phaseOffsetRef.current = Math.random() * Math.PI * 2;
        shakePhaseRef.current = Math.random() * Math.PI * 2;
        startTimeRef.current = nextStartTimeRef.current;
        nextStartTimeRef.current =
          timestamp + duration + Math.random() * duration;
      }

      // Main movement
      const xOffset =
        amplitude * Math.sin(t * Math.PI * 2 + phaseOffsetRef.current);

      // Shake effect
      const shakeX =
        shakeAmplitude *
        Math.sin(t * Math.PI * shakeFrequency + shakePhaseRef.current);
      const shakeY =
        shakeAmplitude *
        Math.cos(t * Math.PI * shakeFrequency + shakePhaseRef.current);

      if (dotRef.current) {
        dotRef.current.setAttribute("cx", `${x + xOffset + shakeX}`);
        dotRef.current.setAttribute("cy", `${y + shakeY}`);
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [x]);

  return <circle ref={dotRef} r={r} />;
};

export default BackgroundGraphic;
