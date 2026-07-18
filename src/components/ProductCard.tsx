interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h4 className="text-white font-semibold text-sm mb-1">
          {product.name}
        </h4>

        <p className="text-accent-from font-bold text-lg">
          ₹{product.price}
        </p>

        <button className="mt-4 w-full btn-pill btn-pill-gradient text-sm opacity-0 group-hover:opacity-100 transition">
          View Details
        </button>
      </div>
    </div>
  );
}