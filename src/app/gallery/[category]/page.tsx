import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import GalleryModal from '@/components/GalleryModal';

const imagesByCategory: Record<string, { full: string; thumb: string }[]> = {
  'electric-fencing': [
    { full: '/images/electric-fencing/1.jpg', thumb: '/images/electric-fencing/thumbnails/1-thumb.jpg' },
    { full: '/images/electric-fencing/2.jpg', thumb: '/images/electric-fencing/thumbnails/2-thumb.jpg' },
  ],
  'razor-wire': [
    { full: '/images/razor-wire/52.jpg', thumb: '/images/razor-wire/thumbnails/52-thumb.jpg' },
    { full: '/images/razor-wire/53.jpg', thumb: '/images/razor-wire/thumbnails/53-thumb.jpg' },
    { full: '/images/razor-wire/54.jpg', thumb: '/images/razor-wire/thumbnails/54-thumb.jpg' },
    { full: '/images/razor-wire/55.jpg', thumb: '/images/razor-wire/thumbnails/55-thumb.jpg' },
    { full: '/images/razor-wire/56.jpg', thumb: '/images/razor-wire/thumbnails/56-thumb.jpg' },
  ],
  'clear-vue-fencing': [
    { full: '/images/clear-vue-fencing/28.jpg', thumb: '/images/clear-vue-fencing/thumbnails/28-thumb.jpg' },
    { full: '/images/clear-vue-fencing/29.jpg', thumb: '/images/clear-vue-fencing/thumbnails/29-thumb.jpg' },
    { full: '/images/clear-vue-fencing/30.jpg', thumb: '/images/clear-vue-fencing/thumbnails/30-thumb.jpg' },
    { full: '/images/clear-vue-fencing/31.jpg', thumb: '/images/clear-vue-fencing/thumbnails/31-thumb.jpg' },
    { full: '/images/clear-vue-fencing/32.jpg', thumb: '/images/clear-vue-fencing/thumbnails/32-thumb.jpg' },
    { full: '/images/clear-vue-fencing/33.jpg', thumb: '/images/clear-vue-fencing/thumbnails/33-thumb.jpg' },
  ],
  'palisade-fencing': [
    { full: '/images/palisade-fencing/42.jpg', thumb: '/images/palisade-fencing/thumbnails/42-thumb.jpg' },
    { full: '/images/palisade-fencing/49.jpg', thumb: '/images/palisade-fencing/thumbnails/49-thumb.jpg' },
    { full: '/images/palisade-fencing/50.jpg', thumb: '/images/palisade-fencing/thumbnails/50-thumb.jpg' },
    { full: '/images/palisade-fencing/39.jpg', thumb: '/images/palisade-fencing/thumbnails/39-thumb.jpg' },
  ],
  'plastic-coated-fencing': [
    { full: '/images/plastic-coated-fencing/1.jpg', thumb: '/images/plastic-coated-fencing/thumbnails/1-thumb.jpg' },
  ],
  'steel-and-wooden-fencing': [
    { full: '/images/steel-and-wooden-fencing/2.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/2-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/3.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/3-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/5.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/5-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/7.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/7-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/9.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/9-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/10.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/10-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/11.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/11-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/12.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/12-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/13.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/13-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/14.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/14-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/15.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/15-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/16.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/16-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/17.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/17-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/18.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/18-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/19.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/19-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/20.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/20-thumb.jpg' },
    { full: '/images/steel-and-wooden-fencing/21.jpg', thumb: '/images/steel-and-wooden-fencing/thumbnails/21-thumb.jpg' },
  ],
  'videos': [
    { full: '/images/videos/1.mp4', thumb: '/images/videos/thumbnails/1-thumb.png' },
    { full: '/images/videos/2.mp4', thumb: '/images/videos/thumbnails/2-thumb.png' },
    { full: '/images/videos/3.mp4', thumb: '/images/videos/thumbnails/3-thumb.png' },
    { full: '/images/videos/4.mp4', thumb: '/images/videos/thumbnails/4-thumb.png' },
    { full: '/images/videos/5.mp4', thumb: '/images/videos/thumbnails/5-thumb.png' },
  ],
};

export default async function CategoryGalleryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const images = imagesByCategory[category];

  if (!images) return notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6 bg-[var(--background)] text-[var(--foreground)]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center capitalize mb-10 text-[var(--primary)]">
            {category.replace(/-/g, ' ')}
          </h1>

          <GalleryModal images={images} />

          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-block text-sm font-medium text-[var(--primary)] underline hover:text-[var(--secondary)] transition-colors duration-200"
            >
              &larr; Back to Gallery
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(imagesByCategory).map((category) => ({
    category,
  }));
}