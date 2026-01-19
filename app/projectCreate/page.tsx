"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

export default function CreateProjectPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Ongoing",
    startDate: "",
    endDate: "",
    budget: "",
    location: "",
    category: "Infrastructure",
    documents: null as FileList | null, // File upload
  });

  // Handle input changes (text, select, textarea, file)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "documents" && files) {
      setFormData({ ...formData, documents: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Project Created:", formData);
    alert("Project Created! Check console log.");
    setFormData({
      title: "",
      description: "",
      status: "Ongoing",
      startDate: "",
      endDate: "",
      budget: "",
      location: "",
      category: "Infrastructure",
      documents: null,
    });
  };

  return (
    <section className="w-full from-gray-100 to-white py-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Create New Project
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Fill in the project details and upload related documents. All fields
            marked with * are required.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-xl space-y-6"
        >
          {/* Title */}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Project Title *"
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-800"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Project Description *"
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-800"
            rows={5}
            required
          />

          {/* Location & Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-800"
            />
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Budget"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-800"
            />
          </div>

          {/* Start & End Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-800"
            />
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-800"
            />
          </div>

          {/* Status & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-800"
            >
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-800"
            >
              <option value="Infrastructure">Infrastructure</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          {/* Document Upload */}
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Upload Documents
            </label>
            <input
              type="file"
              name="documents"
              onChange={handleChange}
              multiple
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <p className="text-sm text-gray-500 mt-1">
              You can upload PDFs, images, or other project files.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 flex items-center justify-center gap-2 bg-black text-white font-medium rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300"
          >
            Send Message
            <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
}
