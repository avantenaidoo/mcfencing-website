import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import GalleryModal from '@/components/GalleryModal';

const imagesByCategory: Record<string, { full: string; thumb: string }[]> = {
  'electric-fencing': [
    {
      full: '/images/electric-fencing/1.jpg',
      thumb: '/images/electric-fencing/thumbnails/1-thumb.jpg',
    },
    {
      full: '/images/electric-fencing/2.jpg',
      thumb: '/images/electric-fencing/thumbnails/2-thumb.jpg',
    },
  ],
  'razor-wire': [
    {
      full: '/images/razor-wire/52.jpg',
      thumb: '/images/razor-wire/thumbnails/52-thumb.jpg',
    },
    {
      full: '/images/razor-wire/53.jpg',
      thumb: '/images/razor-wire/thumbnails/53-thumb.jpg',
    },
  ],
  'clear-vue-fencing': [
    {
      full: '/images/clear-vue-fencing/28.jpg',
      thumb: '/images/clear-vue-fencing/thumbnails/28-thumb.jpg',
    },
    {
      full: '/images/clear-vue-fencing/29.jpg',
      thumb: '/images/clear-vue-fencing/thumbnails/29-thumb.jpg',
    },
    {
      full: '/images/clear-vue-fencing/30.jpg',
      thumb: '/images/clear-vue-fencing/thumbnails/30-thumb.jpg',
    },
    {
      full: '/images/clear-vue-fencing/31.jpg',
      thumb: '/images/clear-vue-fencing/thumbnails/31-thumb.jpg',
    },
  ],
  'palisade-fencing': [
    {
      full: '/images/palisade-fencing/42.jpg',
      thumb: '/images/palisade-fencing/thumbnails/42-thumb.jpg',
    },
    {
      full: '/images/palisade-fencing/49.jpg',
      thumb: '/images/palisade-fencing/thumbnails/49-thumb.jpg',
    },
    {
      full: '/images/palisade-fencing/50.jpg',
      thumb: '/images/palisade-fencing/thumbnails/50-thumb.jpg',
    },
    {
      full: '/images/palisade-fencing/39.jpg',
      thumb: '/images/palisade-fencing/thumbnails/39-thumb.jpg',
    },
  ],
  'plastic-coated-fencing': [
    {
      full: '/images/plastic-coated-fencing/1.jpg',
      thumb: '/images/plastic-coated-fencing/thumbnails/1-thumb.jpg',
    },
  ],
  'steel-and-wooden-fencing': [
    {
      full: '/images/steel-and-wooden-fencing/2.jpg',
      thumb: '/images/steel-and-wooden-fencing/thumbnails/2-thumb.jpg',
    },
    {
      full: '/images/steel-and-wooden-fencing/3.jpg',
      thumb: '/images/steel-and-wooden-fencing/thumbnails/3-thumb.jpg',
    },
    {
      full: '/images/steel-and-wooden-fencing/5.jpg',
      thumb: '/images/steel-and-wooden-fencing/thumbnails/5-thumb.jpg',
    },
    {
      full: '/images/steel-and-wooden-fencing/7.jpg',
      thumb: '/images/steel-and-wooden-fencing/thumbnails/7-thumb.jpg',
    },
    {
      full: '/images/steel-and-wooden-fencing/9.jpg',
      thumb: '/images/steel-and-wooden-fencing/thumbnails/9-thumb.jpg',
    },
  ],
};

// Mark page as async and await params destructure:
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
      <main className="p-6 pt-24 bg-black text-white min-h-screen">
        <div className="flex justify-center items-center h-20 mb-4">
          <h1 className="text-2xl font-bold capitalize text-center">
            {category.replace(/-/g, ' ')}
          </h1>
        </div>

        <GalleryModal images={images} />

        <p className="mt-6 text-sm text-gray-400 text-center">
          Click here to return to the{' '}
          <Link
            href="/gallery"
            className="text-blue-400 underline hover:text-blue-200"
          >
            gallery
          </Link>
          .
        </p>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(imagesByCategory).map((category) => ({
    category,
  }));
}
