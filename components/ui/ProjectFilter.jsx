// app/projects/components/ProjectFilter.jsx
export default function ProjectFilter({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-lg border transition ${
            selected === cat
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
