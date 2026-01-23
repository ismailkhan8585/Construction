export default function ProjectFilter({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-lg border transition ${
            selected === cat
              ? "bg-black text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
