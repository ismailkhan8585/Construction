"use client";
import { useState, useEffect } from "react";
import ProjectCard from "../../components/ui/ProjectCard";
import ProjectFilter from "../../components/ui/ProjectFilter";

export default function ProjectsPage() {
  const categories = ["All", "Ongoing", "Completed"];
  const [selected, setSelected] = useState("All");
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    // Get real projects from localStorage
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  const filtered =
    selected === "All"
      ? projects
      : projects.filter(
          (p) => p.status === selected || p.category === selected
        );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Projects</h1>
        <p className="text-center text-gray-600 mb-10">
          Explore ongoing and completed projects
        </p>

        <ProjectFilter
          categories={categories}
          selected={selected}
          onSelect={setSelected}
        />

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No projects found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
