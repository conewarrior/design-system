'use client';

import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css';

export type PortfolioTheme = 'orange' | 'green';

interface SlideLayoutProps {
  children: React.ReactNode;
  currentSlide: number;
  totalSlides: number;
  theme: PortfolioTheme;
  basePath: string;
}

export function SlideLayout({
  children,
  currentSlide,
  totalSlides,
  theme,
  basePath,
}: SlideLayoutProps) {
  const router = useRouter();

  const goToSlide = useCallback(
    (slide: number) => {
      if (slide >= 1 && slide <= totalSlides) {
        router.push(`${basePath}/${slide}`);
      }
    },
    [router, basePath, totalSlides]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToSlide(currentSlide - 1);
      } else if (e.key === 'Escape') {
        router.push('/');
      }
    },
    [currentSlide, goToSlide, router]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={`slide-container theme-${theme}`}>
      <div className="slide-content">{children}</div>

      {/* Navigation */}
      <div className="slide-nav">
        <button
          className="slide-nav-btn"
          onClick={() => goToSlide(currentSlide - 1)}
          disabled={currentSlide <= 1}
          aria-label="이전 슬라이드"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="slide-indicator">
          {currentSlide} / {totalSlides}
        </div>

        <button
          className="slide-nav-btn"
          onClick={() => goToSlide(currentSlide + 1)}
          disabled={currentSlide >= totalSlides}
          aria-label="다음 슬라이드"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="slide-progress">
        <div
          className="slide-progress-bar"
          style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
        />
      </div>
    </div>
  );
}
