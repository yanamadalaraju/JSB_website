interface Props {
  min: number;
  max: number;
  onChange: (min: number, max: number) => void;
}

export default function PriceFilter({ min, max, onChange }: Props) {
  return (
    <div className="glass p-4 rounded-xl mt-6">
      <h3 className="text-white font-semibold mb-3">Price Range</h3>

      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Min"
          className="w-full px-2 py-1 rounded bg-white/10 text-white"
          onChange={(e) => onChange(Number(e.target.value), max)}
        />
        <input
          type="number"
          placeholder="Max"
          className="w-full px-2 py-1 rounded bg-white/10 text-white"
          onChange={(e) => onChange(min, Number(e.target.value))}
        />
      </div>
    </div>
  );
}