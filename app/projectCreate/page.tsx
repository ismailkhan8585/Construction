"use client";

import React, { useState } from "react";
import { Send, Calendar, DollarSign, BarChart3 } from "lucide-react";

export default function CreateProjectPage() {
  const [formData, setFormData] = useState<any>({
    title: "",
    description: "",
    status: "Ongoing", // default
    startDate: "",
    endDate: "",
    budget: "",
    location: "",
    category: "Infrastructure",

    nitDate: "",
    workOrderDate: "",
    commencementDate: "",
    completionOriginal: "",
    completionRevised: "",
    contractorPremium: "",

    pciOriginal: "",
    pciRevised: "",
    tsOriginal: "",
    tsRevised: "",
    boqOriginal: "",
    boqRevised: "",

    expenditure: "",
    security: "",
    dpr: "",
    liability: "",
    physicalProgress: "",
    financialProgress: "",

    documents: [],
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    if (files) {
      const fileNames = Array.from(files).map((f: any) => f.name);
      setFormData({ ...formData, [name]: fileNames });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newProject = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    const existingProjects = JSON.parse(
      localStorage.getItem("projects") || "[]"
    );

    localStorage.setItem(
      "projects",
      JSON.stringify([...existingProjects, newProject])
    );

    alert("Project Created Successfully!");
    window.location.href = "/projects";
  };

  return (
    <section className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Create New Project
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Enter complete project details for tracking progress, cost, and history.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Basic Info */}
          <Card title="Basic Information">
            <Input name="title" placeholder="Project Title" onChange={handleChange} required />
            <Textarea name="description" placeholder="Project Description" onChange={handleChange} />

            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="location" placeholder="Location" onChange={handleChange} />
              <Input
                name="budget"
                placeholder="Budget"
                onChange={handleChange}
                icon={<DollarSign size={16} />}
              />
            </div>

            {/* NEW STATUS FIELD */}
            <div className="mt-4">
              <label className="text-sm text-gray-600 mb-1 block">Project Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-black outline-none"
              >
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </Card>

          {/* Project History */}
          <Card title="Project History" icon={<Calendar size={18} />}>
            <Grid>
              <DateInput name="nitDate" label="NIT Date" onChange={handleChange} />
              <DateInput name="workOrderDate" label="Work Order Date" onChange={handleChange} />
              <DateInput name="commencementDate" label="Commencement Date" onChange={handleChange} />
              <DateInput name="completionOriginal" label="Completion (Original)" onChange={handleChange} />
              <DateInput name="completionRevised" label="Completion (Revised)" onChange={handleChange} />
              <Input name="contractorPremium" placeholder="Contractor Premium" onChange={handleChange} />
            </Grid>
          </Card>

          {/* Cost Details */}
          <Card title="Cost Details" icon={<DollarSign size={18} />}>
            <Grid>
              <Input name="pciOriginal" placeholder="PC-I Original Cost" onChange={handleChange} />
              <Input name="pciRevised" placeholder="PC-I Revised Cost" onChange={handleChange} />
              <Input name="tsOriginal" placeholder="TS Original Cost" onChange={handleChange} />
              <Input name="tsRevised" placeholder="TS Revised Cost" onChange={handleChange} />
              <Input name="boqOriginal" placeholder="BOQ Original Cost" onChange={handleChange} />
              <Input name="boqRevised" placeholder="BOQ Revised Cost" onChange={handleChange} />
            </Grid>
          </Card>

          {/* Progress */}
          <Card title="Progress & Financial Status" icon={<BarChart3 size={18} />}>
            <Grid>
              <Input name="expenditure" placeholder="Expenditure (Million)" onChange={handleChange} />
              <Input name="security" placeholder="Security (Million)" onChange={handleChange} />
              <Input name="dpr" placeholder="DPR (Million)" onChange={handleChange} />
              <Input name="liability" placeholder="Liability (Million)" onChange={handleChange} />
              <Input name="physicalProgress" placeholder="Physical Progress (%)" onChange={handleChange} />
              <Input name="financialProgress" placeholder="Financial Progress (%)" onChange={handleChange} />
            </Grid>
          </Card>

          {/* Documents */}
          <Card title="Documents">
            <input
              type="file"
              name="documents"
              multiple
              onChange={handleChange}
              className="w-full rounded-lg border border-dashed p-6 text-gray-500 bg-gray-50"
            />
          </Card>

          {/* Submit */}
          <button
            type="submit"
            className="w-full md:w-1/3 mx-auto flex justify-center items-center gap-2 bg-black text-white py-3 rounded-xl shadow hover:bg-gray-800 transition"
          >
            Create Project <Send size={18} />
          </button>

        </form>
      </div>
    </section>
  );
}

/* ---------- Reusable UI ---------- */

const Card = ({ title, icon, children }: any) => (
  <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8 space-y-6">
    <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
      {icon} {title}
    </div>
    {children}
  </div>
);

const Grid = ({ children }: any) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {children}
  </div>
);

const Input = ({ icon, ...props }: any) => (
  <div className="relative">
    {icon && <span className="absolute left-3 top-3 text-gray-400">{icon}</span>}
    <input
      {...props}
      className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-black outline-none ${
        icon ? "pl-9" : ""
      }`}
    />
  </div>
);

const Textarea = (props: any) => (
  <textarea
    {...props}
    rows={4}
    className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-black outline-none"
  />
);

const DateInput = ({ label, ...props }: any) => (
  <div>
    <label className="text-sm text-gray-600 mb-1 block">{label}</label>
    <input
      type="date"
      {...props}
      className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-black outline-none"
    />
  </div>
);
