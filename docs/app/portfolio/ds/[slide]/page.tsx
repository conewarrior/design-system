import { notFound } from 'next/navigation';
import { SlideLayout } from '../../../../ui/portfolio';
import { Slide1Cover } from './slides/Slide1Cover';
import { Slide2Problem } from './slides/Slide2Problem';
import { Slide3Solution } from './slides/Slide3Solution';
import { Slide4Setup } from './slides/Slide4Setup';
import { Slide5Tokens } from './slides/Slide5Tokens';
import { Slide6Components } from './slides/Slide6Components';
import { Slide7Quality } from './slides/Slide7Quality';
import { Slide8Automation } from './slides/Slide8Automation';
import { Slide9Docs } from './slides/Slide9Docs';

const TOTAL_SLIDES = 9;

const slides: Record<number, React.ComponentType> = {
  1: Slide1Cover,
  2: Slide2Problem,
  3: Slide3Solution,
  4: Slide4Setup,
  5: Slide5Tokens,
  6: Slide6Components,
  7: Slide7Quality,
  8: Slide8Automation,
  9: Slide9Docs,
};

interface PageProps {
  params: Promise<{ slide: string }>;
}

export default async function DesignSystemSlide({ params }: PageProps) {
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
      theme="orange"
      basePath="/portfolio/ds"
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
