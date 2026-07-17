interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="glass rounded-xl overflow-hidden hover:scale-[1.02] transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h4 className="text-white font-semibold text-sm">{product.name}</h4>
        <p className="text-accent-from font-bold mt-1">₹{product.price}</p>

        <button className="mt-3 w-full btn-pill btn-pill-gradient text-sm">
          View Details
        </button>
      </div>
    </div>
  );
}