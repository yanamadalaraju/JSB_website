interface Props {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
}

export default function CategoryFilter({ categories, selected, onSelect }: Props) {
  return (
    <div className="glass p-5 rounded-2xl backdrop-blur-xl border border-white/10">
      <h3 className="text-white font-semibold mb-4 text-lg">Categories</h3>

      <ul className="space-y-2">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onSelect(cat)}
            className={`cursor-pointer text-sm px-4 py-2 rounded-xl transition-all duration-300 ${
              selected === cat
                ? 'bg-gradient-to-r from-accent-from to-accent-to text-white shadow-lg'
                : 'text-gray-300 hover:bg-white/10 hover:translate-x-1'
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}