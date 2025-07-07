import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  params: { category: string };
}

export default function CategoryGalleryPage({ params }: Props) {
  const { category } = params;

  const imagesByCategory: Record<string, string[]> = {
    'electric-fencing': [
      '/images/electric-fencing/1.jpg',
      '/images/electric-fencing/2.jpg',
      // add more image paths as needed
    ],
    'razor-wire': [
      '/images/razor-wire/1.jpg',
      '/images/razor-wire/2.jpg',
      // add more image paths
    ],
    'clear-vue-fencing': [
      '/images/clear-vue-fencing/1.jpg',
      // ...
    ],
    'palisade-fencing': [
      '/images/palisade-fencing/42.jpg',
      '/images/palisade-fencing/49.jpg',
      '/images/palisade-fencing/50.jpg',
      '/images/palisade-fencing/39.jpg',
      // add all your actual palisade-fencing images here
    ],
    'plastic-coated-fencing': [
      '/images/plastic-coated-fencing/1.jpg',
      // ...
    ],
    'steel-and-wooden-fencing': [
      '/images/steel-and-wooden-fencing/1.jpg',
      // ...
    ],
  };

  const images = imagesByCategory[category];

  if (!images) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4 capitalize">
        {category.replace(/-/g, ' ')}
      </h1>

      {/* Return to Gallery Link */}
      <p className="mb-6 text-sm text-gray-500">
        Click here to return to the{' '}
        <Link href="/gallery" className="text-blue-500 underline hover:text-blue-700">
          gallery
        </Link>.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full aspect-[4/3]">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover rounded shadow"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index === 0} // improve LCP for first image
            />
          </div>
        ))}
      </div>
    </main>
  );
}