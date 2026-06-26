import { useEffect, useRef } from "react"

export default function LoopText({ loopTexts }: { loopTexts: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const container = track.parentElement!;

    while (track.scrollWidth < container.offsetWidth * 2) {
      loopTexts.forEach(text => {
        const span = document.createElement("span");
        span.className = "loop-text-item";
        span.textContent = text;
        track.appendChild(span);
      })
    }

    const half = track.scrollWidth / 2;
    track.style.setProperty("--marquee-width", `-${half}px`);
  }, []);

  return (
    <div className="loop-text">
      <div className="loop-text-items" ref={trackRef}>
        {loopTexts.concat(loopTexts).map((text, index) => (
          <span key={index} className="loop-text-item">{text}</span>
        ))}
      </div>
    </div>
  );
}