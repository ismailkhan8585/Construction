import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition cursor-pointer">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>

        <div className="mt-4 text-sm text-gray-500 space-y-1">
          <p>Status: <strong>{project.status}</strong></p>
          <p>Budget: {project.budget}</p>
          <p>Location: {project.location}</p>
        </div>
      </div>
    </Link>
  );
}
