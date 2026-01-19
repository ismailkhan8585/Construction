"use client";
import React, { useState } from "react";
import ProjectCard from "../../components/ui/ProjectCard";
import ProjectFilter from "../../components/ui/ProjectFilter";

export default function ProjectsPage() {
  // Categories for filtering
  const categories = ["All", "Ongoing", "Completed", "Residential", "Infrastructure"];

  // Selected category state
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  // Static project data
  const projects = [
    {
      title: "Road & Highway Development",
      description: "Construction of 20 km highway connecting major cities",
      status: "Ongoing",
      startDate: "2025-01-15",
      endDate: "",
      budget: "$12M",
      location: "City A",
      category: "Infrastructure",
    },
    {
      title: "Residential Housing Project",
      description: "Building 100 modern houses",
      status: "Completed",
      startDate: "2024-01-10",
      endDate: "2025-06-20",
      budget: "$8M",
      location: "City B",
      category: "Residential",
    },
    {
      title: "Bridge Construction",
      description: "Construction of a steel bridge across river",
      status: "Ongoing",
      startDate: "2025-03-01",
      endDate: "",
      budget: "$15M",
      location: "City C",
      category: "Infrastructure",
    },
    {
      title: "Commercial Complex",
      description: "Multi-story commercial building project",
      status: "Completed",
      startDate: "2023-05-01",
      endDate: "2024-12-15",
      budget: "$20M",
      location: "City D",
      category: "Commercial",
    },
    {
      title: "Bridge Rehabilitation",
      description: "Repair and strengthening of old bridge",
      status: "Ongoing",
      startDate: "2025-04-10",
      endDate: "",
      budget: "$6M",
      location: "City E",
      category: "Infrastructure",
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (proj) =>
            proj.status === selectedCategory || proj.category === selectedCategory
        );

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Projects
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            View all ongoing and completed projects. Filter by type or status to
            find details of each project.
          </p>
        </div>

        {/* Filter Buttons */}
        <ProjectFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} />
          ))}
        </div>

      </div>
    </section>
  );
}
