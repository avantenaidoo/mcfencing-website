import { notFound } from 'next/navigation';
import Link from 'next/link';
import GalleryModal from '@/components/GalleryModal';
import Navbar from '@/components/Navbar'; // ✅ Import the Navbar component

type Props = {
  params: {
    category: string;
  };
};

const imagesByCategory: Record<string, string[]> = {
  'electric-fencing': [
    '/images/electric-fencing/1.jpg',
    '/images/electric-fencing/2.jpg',
  ],
  'razor-wire': [
    '/images/razor-wire/52.jpg',
    '/images/razor-wire/53.jpg',
  ],
  'clear-vue-fencing': [
    '/images/clear-vue-fencing/28.jpg',
    '/images/clear-vue-fencing/29.jpg',
    '/images/clear-vue-fencing/30.jpg',
    '/images/clear-vue-fencing/31.jpg',
  ],
  'palisade-fencing': [
    '/images/palisade-fencing/42.jpg',
    '/images/palisade-fencing/49.jpg',
    '/images/palisade-fencing/50.jpg',
    '/images/palisade-fencing/39.jpg',
  ],
  'plastic-coated-fencing': [
    '/images/plastic-coated-fencing/1.jpg',
  ],
  'steel-and-wooden-fencing': [
    '/images/steel-and-wooden-fencing/2.jpg',
    '/images/steel-and-wooden-fencing/3.jpg',
    '/images/steel-and-wooden-fencing/5.jpg',
    '/images/steel-and-wooden-fencing/7.jpg',
    '/images/steel-and-wooden-fencing/9.jpg',
  ],
};

export default function CategoryGalleryPage({ params }: Props) {
  const { category } = params;
  const images = imagesByCategory[category];

  if (!images) return notFound();

  return (
    <>
      <Navbar /> {/* ✅ Add Navbar to the top of the page */}
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
          </Link>.
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