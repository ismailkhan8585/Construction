// app/projects/components/ProjectCard.jsx
export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
      <p className="text-gray-600 mt-2">{project.description}</p>
      <div className="flex flex-wrap justify-between mt-4 text-sm text-gray-500">
        <span>Status: <strong>{project.status}</strong></span>
        <span>Start: {project.startDate}</span>
        <span>End: {project.endDate || "Ongoing"}</span>
        <span>Budget: {project.budget}</span>
      </div>
      <p className="text-gray-500 mt-2">Location: {project.location}</p>
    </div>
  );
}
