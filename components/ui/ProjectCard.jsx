"use client";

import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-6 cursor-pointer flex flex-col justify-between h-full">

        {/* Status badge */}
        <div className="flex justify-between items-center mb-3">
          <span
            className={`px-3 py-1 text-xs rounded-full font-medium
              ${
                project.status === "Ongoing"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-green-100 text-green-700"
              }`}
          >
            {project.status}
          </span>

          <span className="text-sm text-gray-500 flex items-center gap-1">
            <Calendar size={14} />
            {project.createdAt}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 group-hover:text-black transition">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {project.description}
        </p>

        {/* Meta */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            {project.location}
          </span>

          <span className="font-semibold text-gray-900">
            {project.budget}
          </span>
        </div>

        {/* CTA */}
        <div className="mt-5 flex items-center justify-end text-sm font-medium text-gray-900 group-hover:gap-2 transition-all">
          View Details <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}



