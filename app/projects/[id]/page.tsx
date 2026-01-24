"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("projects") || "[]");
    const all = [...stored];

    const found = all.find((p: any) => p.id === id);
    setProject(found);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Project not found</p>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-10">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-gray-600 mt-2">{project.description}</p>
        </div>

        {/* Summary */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Info label="Status" value={project.status} />
          <Info label="Category" value={project.category} />
          <Info label="Location" value={project.location} />
          <Info label="Budget" value={project.budget} />
        </div>

        {/* Project History */}
        <Card title="Project History">
          <Grid>
            <Item label="NIT Date" value={project.nitDate} />
            <Item label="Work Order Date" value={project.workOrderDate} />
            <Item label="Commencement Date" value={project.commencementDate} />
            <Item label="Completion (Original)" value={project.completionOriginal} />
            <Item label="Completion (Revised)" value={project.completionRevised || "—"} />
            <Item label="Contractor Premium" value={project.contractorPremium} />
          </Grid>
        </Card>

        {/* Cost Details */}
        <Card title="Cost Details (Million)">
          <Grid>
            <Item label="PC-I Original" value={project.pciOriginal} />
            <Item label="PC-I Revised" value={project.pciRevised} />
            <Item label="TS Original" value={project.tsOriginal} />
            <Item label="TS Revised" value={project.tsRevised} />
            <Item label="BOQ Original" value={project.boqOriginal} />
            <Item label="BOQ Revised" value={project.boqRevised} />
          </Grid>
        </Card>

        {/* Progress */}
        <Card title="Progress">
          <Grid>
            <Item label="Expenditure" value={project.expenditure} />
            <Item label="Security" value={project.security} />
            <Item label="DPR" value={project.dpr} />
            <Item label="Liability" value={project.liability} />
            <Item label="Physical Progress" value={`${project.physicalProgress}%`} />
            <Item label="Financial Progress" value={`${project.financialProgress}%`} />
          </Grid>
        </Card>

        {/* Documents */}
        <Card title="Documents">
          <ul className="space-y-2">
            {project.documents?.map((doc: string, i: number) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
              >
                <span>{doc}</span>
                <button className="text-sm text-blue-600 hover:underline">
                  View
                </button>
              </li>
            ))}
          </ul>
        </Card>

      </div>
    </section>
  );
}

/* ---------------- UI Components ---------------- */

const Card = ({ title, children }: any) => (
  <div className="bg-white rounded-2xl shadow p-6 space-y-4">
    <h2 className="text-xl font-semibold">{title}</h2>
    {children}
  </div>
);

const Grid = ({ children }: any) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {children}
  </div>
);

const Item = ({ label, value }: any) => (
  <div className="bg-gray-50 p-4 rounded-xl">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-semibold">{value}</p>
  </div>
);

const Info = ({ label, value }: any) => (
  <div className="bg-white p-4 rounded-xl shadow-sm">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="font-semibold">{value}</p>
  </div>
);

