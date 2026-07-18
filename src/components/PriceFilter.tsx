interface Props {
  min: number;
  max: number;
  onChange: (min: number, max: number) => void;
}

export default function PriceFilter({ min, max, onChange }: Props) {
  return (
    <div className="glass p-5 rounded-2xl backdrop-blur-xl border border-white/10">
      <h3 className="text-white font-semibold mb-4 text-lg">Price Range</h3>

      <div className="flex gap-3">
        <input
          type="number"
          placeholder="Min"
          className="w-full px-3 py-2 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent-from"
          onChange={(e) => onChange(Number(e.target.value), max)}
        />
        <input
          type="number"
          placeholder="Max"
          className="w-full px-3 py-2 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent-from"
          onChange={(e) => onChange(min, Number(e.target.value))}
        />
      </div>
    </div>
  );
}