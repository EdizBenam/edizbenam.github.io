"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const PHRASES = [
  "I love you",
  "دوستت دارم",
  "Seni seviyorum",
  "Te amo",
  "Je t'aime",
  "Ich liebe dich",
  "Ti amo",
  "Eu te amo",
  "Я тебя люблю",
  "사랑해",
  "愛してる",
  "我爱你",
  "मैं तुमसे प्यार करता हूँ",
  "Σ' αγαπώ",
  "Ik hou van jou",
  "Jag älskar dig",
  "Kocham cię",
  "ฉันรักเธอ",
  "Anh yêu em",
  "Aku cinta kamu",
  "Я тебе кохаю",
];

type HeartText = {
  x: number;
  y: number;
  text: string;
  size: number;
  color: string;
  delay: number;
  phase: number;
};

const BACKGROUND = "#060208";
const DURATION = 10000;

function heartPoint(t: number) {
  return {
    x: 16 * Math.pow(Math.sin(t), 3),
    y: -(
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t)
    ),
  };
}

function getSpans(polygon: { x: number; y: number }[], y: number) {
  const intersections: number[] = [];

  for (let i = 0; i < polygon.length; i++) {
    const a = polygon[i];
    const b = polygon[(i + 1) % polygon.length];

    if ((a.y <= y && b.y > y) || (b.y <= y && a.y > y)) {
      const x = a.x + ((y - a.y) * (b.x - a.x)) / (b.y - a.y);

      intersections.push(x);
    }
  }

  intersections.sort((a, b) => a - b);

  const spans: [number, number][] = [];

  for (let i = 0; i + 1 < intersections.length; i += 2) {
    spans.push([intersections[i], intersections[i + 1]]);
  }

  return spans;
}

function intersectSpans(first: [number, number][], second: [number, number][]) {
  const result: [number, number][] = [];

  for (const a of first) {
    for (const b of second) {
      const left = Math.max(a[0], b[0]);
      const right = Math.min(a[1], b[1]);

      if (right > left) {
        result.push([left, right]);
      }
    }
  }

  return result;
}

function createHeart(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
): HeartText[] {
  const scale = Math.min(width / 38, height / 35);

  const centerX = width / 2;
  const centerY = height / 2;

  const polygon = Array.from({ length: 720 }, (_, i) => {
    const p = heartPoint((i / 720) * Math.PI * 2);

    return {
      x: centerX + p.x * scale,
      y: centerY + p.y * scale,
    };
  });

  const minY = Math.min(...polygon.map((p) => p.y));
  const maxY = Math.max(...polygon.map((p) => p.y));

  const fontSize = Math.max(8, Math.min(15, scale * 0.65));
  const rowHeight = fontSize + 7;

  const items: HeartText[] = [];

  let phraseIndex = 0;

  for (let y = minY + rowHeight; y < maxY - rowHeight; y += rowHeight) {
    const upper = getSpans(polygon, y - rowHeight / 2);
    const lower = getSpans(polygon, y + rowHeight / 2);

    const spans = intersectSpans(upper, lower);

    for (const [start, end] of spans) {
      let x = start + 4;

      while (x < end - 4) {
        const text = PHRASES[phraseIndex % PHRASES.length];

        phraseIndex++;

        ctx.font = `bold ${fontSize}px Arial, sans-serif`;

        const textWidth = ctx.measureText(text).width;

        if (x + textWidth > end - 4) {
          // Try another phrase before ending the row.
          if (phraseIndex % PHRASES.length !== 0) {
            continue;
          }

          break;
        }

        const distanceFromCenter = Math.min(
          1,
          Math.hypot(
            (x - centerX) / (16 * scale),
            (y - centerY) / (15 * scale),
          ),
        );

        const red = Math.round(205 + distanceFromCenter * 50);
        const green = Math.round(15 + distanceFromCenter * 30);
        const blue = Math.round(35 + distanceFromCenter * 35);

        items.push({
          x: x + textWidth / 2,
          y,
          text,
          size: fontSize,
          color: `rgb(${red},${green},${blue})`,
          delay: 0,
          phase: Math.random() * Math.PI * 2,
        });

        x += textWidth + 7;
      }
    }
  }

  // Reveal from the outside toward the center.
  items.sort((a, b) => {
    const da = Math.hypot(a.x - centerX, a.y - centerY);
    const db = Math.hypot(b.x - centerX, b.y - centerY);

    return db - da;
  });

  items.forEach((item, index) => {
    item.delay = (index / Math.max(1, items.length)) * DURATION;
  });

  return items;
}

function LoveHeart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let texts: HeartText[] = [];
    let startedAt = performance.now();

    let width = 0;
    let height = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = bounds.width;
      height = bounds.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      texts = createHeart(ctx, width, height);
    };

    const render = (now: number) => {
      const elapsed = now - startedAt;

      ctx.fillStyle = BACKGROUND;
      ctx.fillRect(0, 0, width, height);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (const item of texts) {
        const progress = Math.max(0, Math.min(1, (elapsed - item.delay) / 650));

        if (progress <= 0) continue;

        const eased = 1 - Math.pow(1 - progress, 3);

        const floatOffset = (1 - eased) * 30;

        // Subtle shimmering after the phrase appears.
        const shimmer =
          progress >= 1
            ? Math.pow(Math.max(0, Math.sin(now * 0.0018 + item.phase)), 12)
            : 0;

        ctx.save();

        ctx.globalAlpha = eased;

        ctx.font = `bold ${item.size}px Arial, sans-serif`;

        ctx.shadowColor = shimmer > 0.5 ? "#ffb3c1" : "#e11d48";

        ctx.shadowBlur = 3 + shimmer * 13;

        ctx.fillStyle = shimmer > 0.7 ? "#ffd5df" : item.color;

        ctx.fillText(item.text, item.x, item.y - floatOffset);

        ctx.restore();
      }

      animationId = requestAnimationFrame(render);
    };

    resize();

    animationId = requestAnimationFrame(render);

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060208] text-white">
      {/* Back button */}
      <Link
        href="/"
        className="
          absolute left-5 top-5 z-20
          rounded-full border border-rose-500/30
          bg-rose-950/30 px-5 py-3
          text-sm text-rose-200
          backdrop-blur-md
          transition-all duration-300
          hover:bg-rose-800/40
        "
      >
        ← Back
      </Link>

      {/* Animated heart */}
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1
          dir="rtl"
          className="
            absolute top-20 z-10
            px-4 text-center
            text-2xl sm:text-4xl
            font-bold text-rose-200
          "
        >
          ❤️در تمام زبان‌های دنیا، دوستت دارم ❤️
        </h1>

        <canvas
          ref={canvasRef}
          className="h-[75vh] w-full max-w-[1000px]"
          aria-label="Animated heart made of I love you in multiple languages"
          role="img"
        />

        <p
          dir="rtl"
          className="
            absolute bottom-10
            px-4 text-center
            text-lg sm:text-2xl
            text-rose-300
          "
        ></p>
      </div>
    </div>
  );
}

export default LoveHeart;
