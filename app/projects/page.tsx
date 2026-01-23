"use client";
import { useState } from "react";
import ProjectCard from "../../components/ui/ProjectCard";
import ProjectFilter from "../../components/ui/ProjectFilter";

const projects = [
  {
    id: "road-highway",
    title: "Road & Highway Development",
    description: "Construction of 20 km highway connecting major cities",
    status: "Ongoing",
    budget: "$12M",
    location: "City A",
    category: "Infrastructure",
  },
  {
    id: "residential-housing",
    title: "Residential Housing Project",
    description: "Building 100 modern houses",
    status: "Completed",
    budget: "$8M",
    location: "City B",
    category: "Residential",
  },
  {
    id: "bridge-construction",
    title: "Bridge Construction",
    description: "Steel bridge across river",
    status: "Ongoing",
    budget: "$15M",
    location: "City C",
    category: "Infrastructure",
  },
];

export default function ProjectsPage() {
  const categories = ["All", "Ongoing", "Completed", "Infrastructure", "Residential"];
  const [selected, setSelected] = useState("All");

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
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
