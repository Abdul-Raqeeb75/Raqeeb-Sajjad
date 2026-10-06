'use client';

import { useEffect } from 'react';

export default function TextLoop() {
  useEffect(() => {
    const textPath = document.getElementById('textPath');
    const pathEl = document.getElementById('wavePath');
    const measureEl = document.getElementById('measureText');

    if (!textPath || !pathEl || !measureEl) return;

    let pathLength = 0;
    let unitWidth = 0;

    function measure() {
      try {
        pathLength = pathEl.getTotalLength();
        unitWidth = measureEl.getComputedTextLength();
      } catch (e) {
        return false;
      }
      return pathLength > 0 && unitWidth > 0;
    }

    if (!measure()) return;

    const baseText = '✦ BUILD YOUR BRAND ✦ GROW YOUR BUSINESS ✦ SCALE YOUR STARTUP ✦ DIGITAL SOLUTIONS ';
    const reps = Math.ceil(pathLength / unitWidth) + 2;
    textPath.textContent = baseText.repeat(reps);

    let offset = 0;
    const speed = 100;
    let lastTime = performance.now();
    let animationId;

    function animate(currentTime) {
      const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.05);
      lastTime = currentTime;

      offset -= speed * deltaTime;
      if (offset <= -pathLength) offset += pathLength;

      textPath.setAttribute('startOffset', offset);
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (measure()) {
          const newReps = Math.ceil(pathLength / unitWidth) + 2;
          textPath.textContent = baseText.repeat(newReps);
        }
      });
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="text-loop">
      <svg
        className="text-loop-svg"
        viewBox="0 0 1200 140"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          id="wavePath"
          d="M -200 70 
             Q 100 30, 400 70 
             T 1000 70 
             T 1600 70 
             T 2200 70"
          fill="none"
          stroke="none"
        />
        <text className="text-loop-text">
          <textPath href="#wavePath" id="textPath" startOffset="0"></textPath>
        </text>
      </svg>

      <svg
        width="0"
        height="0"
        style={{ position: "absolute", overflow: "hidden" }}
      >
        <text id="measureText" className="text-loop-measure">
          ✦ BUILD YOUR BRAND ✦ GROW YOUR BUSINESS ✦ SCALE YOUR STARTUP ✦ DIGITAL SOLUTIONS
        </text>
      </svg>
    </section>
  );
}