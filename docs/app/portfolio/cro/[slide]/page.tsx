import { notFound } from 'next/navigation';
import { SlideLayout } from '../../../../ui/portfolio';
import { Slide1Cover } from './slides/Slide1Cover';
import { Slide2Start } from './slides/Slide2Start';
import { Slide3Quantitative } from './slides/Slide3Quantitative';
import { Slide4Analysis } from './slides/Slide4Analysis';
import { Slide5ExitIntent } from './slides/Slide5ExitIntent';
import { Slide6System } from './slides/Slide6System';
import { Slide7Retrospective } from './slides/Slide7Retrospective';

const TOTAL_SLIDES = 7;

const slides: Record<number, React.ComponentType> = {
  1: Slide1Cover,
  2: Slide2Start,
  3: Slide3Quantitative,
  4: Slide4Analysis,
  5: Slide5ExitIntent,
  6: Slide6System,
  7: Slide7Retrospective,
};

interface PageProps {
  params: Promise<{ slide: string }>;
}

export default async function CROSlide({ params }: PageProps) {
  const { slide } = await params;
  const slideNum = parseInt(slide, 10);

  if (isNaN(slideNum) || slideNum < 1 || slideNum > TOTAL_SLIDES) {
    notFound();
  }

  const SlideComponent = slides[slideNum];

  return (
    <SlideLayout
      currentSlide={slideNum}
      totalSlides={TOTAL_SLIDES}
      theme="green"
      basePath="/portfolio/cro"
    >
      <SlideComponent />
    </SlideLayout>
  );
}

export function generateStaticParams() {
  return Array.from({ length: TOTAL_SLIDES }, (_, i) => ({
    slide: String(i + 1),
  }));
}
