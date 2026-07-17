interface Props {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
}

export default function CategoryFilter({ categories, selected, onSelect }: Props) {
  return (
    <div className="glass p-4 rounded-xl">
      <h3 className="text-white font-semibold mb-3">Categories</h3>

      <ul className="space-y-2">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onSelect(cat)}
            className={`cursor-pointer text-sm px-3 py-2 rounded-lg transition ${
              selected === cat
                ? 'bg-accent-from text-white'
                : 'text-gray-300 hover:bg-white/10'
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}