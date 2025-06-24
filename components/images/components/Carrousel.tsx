'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // o cualquier ícono



function AutoplaySlider(slider: any) {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 4000);
  }

  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener('mouseout', () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on('dragStarted', clearNextTimeout);
  slider.on('animationEnded', nextTimeout);
  slider.on('updated', nextTimeout);
}

export default function Carrousel({images}:{images:string[]}) {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1,
        spacing: 15,
      },
    },
    [AutoplaySlider]
  );

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider h-[500px] overflow-hidden shadow-xl">
        {images.map((src, i) => (
          <div key={i} className="keen-slider__slide relative">
            <Image
              src={src}
              alt={`slide-${i}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => slider.current?.prev()}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => slider.current?.next()}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
