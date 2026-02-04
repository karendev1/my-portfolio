This document is a **practical and conceptual reference** for optimizing front‑end assets. It is designed to be used both as a **learning guide** and a **professional portfolio reference**, covering modern strategies for images, videos, fonts, CSS, and JavaScript.

---

## Asset Optimization Overview

Asset optimization focuses on delivering:

- The **right asset**
- In the **right format**
- At the **right size**
- At the **right time**
- Based on **device, network, and browser capabilities**

### Asset Categories

- **Images** → Compression, Lazy Loading, Progressive Enhancement, Client Hints, Responsive & Adaptive Images, Blur‑up (LQIP), Solid Color Placeholders, Sprites
- **Videos** → Progressive Enhancement, Replace GIFs, Responsive Posters, Streaming, Muted Videos, Preload Strategies
- **Fonts** → font-display, FOUT/FOIT/FOFT, Preload, Data URI, Subsetting, Async CSS, Font Face Observer
- **CSS** → Critical CSS, Lazy Loading, Render‑Blocking Avoidance
- **JavaScript** → defer vs async, Code Splitting, Lazy Loading, Web Workers

---

# Image Optimization

## Compression

### Why Compress Images?

- Reduces download size and TTFB
- Improves LCP and perceived performance
- Saves bandwidth and infrastructure costs
- Improves SEO and Core Web Vitals

**Formats (best → fallback):**

- AVIF
- WebP
- JPEG / PNG

---

## Progressive Enhancement (Images)

Goal: **Always show something**, then progressively improve quality, format, and size based on browser support.

### Without Progressive Enhancement

```html
<img src="image.jpg" alt="Description" />

```

### With Progressive Enhancement

```html
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" />
</picture>

```

### Progressive Layers

| Layer | Technique |
| --- | --- |
| Base | `<img>` |
| Modern formats | `<picture>` |
| Correct size | `srcset` + `sizes` |
| Performance | `loading="lazy"` |
| Stability | `width/height` or `aspect-ratio` |
| Advanced | CDN + AVIF + Client Hints |

---

## Client Hint HTTP Headers

Client Hints are HTTP headers sent by the browser to describe **device, display, and network conditions** so the server can adapt the response **before downloading assets**.

### Device & Display

| Header | Description |
| --- | --- |
| `DPR` | Device Pixel Ratio |
| `Viewport-Width` | Viewport width |
| `Width` | Requested resource width |

### Network & Data

| Header | Description |
| --- | --- |
| `Save-Data` | User prefers reduced data usage |
| `ECT` | Effective Connection Type (2g–4g) |
| `RTT` | Estimated latency |
| `Downlink` | Approximate bandwidth |

---

## Responsive Images

```html
<img
  src="image-800.jpg"
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1600.jpg 1600w
  "
  sizes="(max-width: 768px) 100vw, 800px"
  alt="Description"
/>

```

- Mobile → smaller images
- Desktop → larger images
- Fallback → `src`
- Browser selects best candidate automatically

---

## Adaptive Media Loading

Adaptive loading adjusts **quality, size, format, and timing** based on:

- Network conditions
- Device hardware
- Screen resolution
- User preferences

### Network‑Aware Loading

```jsx
const connection = navigator.connection;

if (connection?.effectiveType === '2g') {
  // Load lower‑quality images or disable video autoplay
}

```

### Device‑Aware Loading

```jsx
const isLowEndDevice =
  navigator.hardwareConcurrency <= 2 ||
  navigator.deviceMemory <= 2;

```

---

## Blur‑up / LQIP (Low‑Quality Image Placeholder)

Technique:

1. Load a tiny image (1–5 KB)
2. Apply blur
3. Render instantly
4. Replace with high‑quality image smoothly

Benefits:

- Faster perceived load
- Less empty layout
- Better UX (does not speed network, improves perception)

---

## Solid Primary Color Placeholder

The simplest placeholder strategy:

- Use a solid background color
- Prefer dominant image color or design‑system color
- Zero extra requests
- Zero layout shift

Best for:

- Performance‑critical pages
- Large image grids

---

## CSS Sprites

Combine multiple icons into a single image to reduce HTTP requests.

```css
.icon {
  width: 24px;
  height: 24px;
  background-image: url('/sprites.png');
}

.icon-home { background-position: 0 0; }
.icon-user { background-position: -24px 0; }

```

---

# Video Optimization

## Progressive Enhancement (Video)

```html
<video autoplay loop muted playsinline>
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>

```

---

## Replace GIFs with HTML5 Video

GIF limitations:

- No modern compression
- Huge file sizes
- No playback control
- CPU‑heavy decoding

**HTML5 video advantages:**

- 5–10× smaller
- Hardware‑accelerated decoding
- Full playback control

```html
<video autoplay loop muted playsinline preload="metadata">
  <source src="animation.webm" type="video/webm" />
  <source src="animation.mp4" type="video/mp4" />
</video>

```

---

## Responsive Poster Images

Poster images are **not responsive by default**.

Solution: simulate responsiveness using CSS backgrounds.

```css
.video-wrapper {
  background-image: url('poster-small.jpg');
  aspect-ratio: 16 / 9;
}

@media (min-width: 768px) {
  .video-wrapper { background-image: url('poster-large.jpg'); }
}

```

---

## Remove Audio from Videos

If audio is unnecessary:

- Remove audio track during encoding
- Smaller file size
- Faster decode
- Allows autoplay without user interaction

---

## Streaming & Chunked Delivery

- Use adaptive streaming (HLS / DASH)
- Video quality adapts to network
- Prevents downloading unused segments

---

## Platform‑Based Video Dimensions

Different platforms require different ratios.

```css
.video-wrapper { aspect-ratio: 16 / 9; }

@media (max-width: 768px) {
  .video-wrapper { aspect-ratio: 4 / 5; }
}

```

---

# Font Optimization

## FOUT vs FOIT

- **FOUT** → Text visible, font swaps later (preferred)
- **FOIT** → Text invisible until font loads (avoid)

---

## font-display

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap;
}

```

Values:

- `swap` → recommended
- `optional` → may skip loading

---

## Preload Fonts

```html
<link
  rel="preload"
  href="/fonts/inter.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>

```

---

## Subsetting Fonts

Remove unused glyphs.

- Full font: 150–300 KB
- Subset: 10–30 KB

Tools:

- glyphhanger
- pyftsubset
- Google Fonts API

---

## Font Face Observer

```jsx
import FontFaceObserver from 'fontfaceobserver';

const font = new FontFaceObserver('Inter');

font.load().then(() => {
  document.documentElement.classList.add('fonts-loaded');
});

```

---

# CSS Optimization

## Critical CSS

Inline only the CSS required for above‑the‑fold content.

Benefits:

- Faster first paint
- Reduced render‑blocking
- Better LCP

---

## Lazy Loading CSS

```html
<link
  rel="stylesheet"
  href="styles.css"
  media="print"
  onload="this.media='all'"
/>

```

---

# JavaScript Optimization

## defer vs async

| Attribute | Behavior |
| --- | --- |
| `defer` | Executes after HTML parsing (order preserved) |
| `async` | Executes ASAP (order not guaranteed) |

---

## Code Splitting & Lazy Loading

```jsx
const Module = () => import('./module.js');

```

---

## Web Workers

Move heavy computation off the main thread.

- Keeps UI responsive
- Ideal for parsing, calculations, image processing

---

## Final Mental Model

> **Performance is not about loading faster — it’s about blocking less and prioritizing better.**
> 

Deliver the minimum first. Improve progressively. Measure continuously.