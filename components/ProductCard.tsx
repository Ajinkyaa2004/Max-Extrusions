
import Image from 'next/image';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  slug: string;
}

export default function ProductCard({ name, description, image, slug }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 h-full flex flex-col hover:-translate-y-2">
      <div className="relative h-72 w-full overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-accent-red opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
          Premium Quality
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent-red transition-colors">
          {name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Using the new Accent Button Variant */}
        <Button
          href={`/products/${slug}`}
          variant="accent"
          className="w-full justify-center"
          icon={<ArrowRight className="w-4 h-4" />}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
