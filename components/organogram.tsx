"use client";

import { motion } from "framer-motion";
import { User, Building, Users, Briefcase, Wrench } from "lucide-react";

const nodes = [
    {
        id: "ceo",
        title: "CEO",
        name: "John Anderson",
        icon: User,
        color: "from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900",
        connections: ["cfo", "cto", "coo"]
    },
    {
        id: "cfo",
        title: "CFO",
        name: "Sarah Chen",
        icon: Building,
        color: "from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900",
        connections: ["finance", "accounting"]
    },
    {
        id: "cto",
        title: "CTO",
        name: "Michael Rodriguez",
        icon: Briefcase,
        color: "from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900",
        connections: ["tech", "innovation"]
    },
    {
        id: "coo",
        title: "COO",
        name: "Emma Wilson",
        icon: Users,
        color: "from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900",
        connections: ["operations", "projects"]
    },
    {
        id: "finance",
        title: "Finance",
        name: "Team (12)",
        icon: Building,
        color: "from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800",
        connections: []
    },
    {
        id: "accounting",
        title: "Accounting",
        name: "Team (8)",
        icon: Building,
        color: "from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800",
        connections: []
    },
    {
        id: "tech",
        title: "Technology",
        name: "Team (15)",
        icon: Wrench,
        color: "from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800",
        connections: []
    },
    {
        id: "innovation",
        title: "Innovation",
        name: "Team (6)",
        icon: Briefcase,
        color: "from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800",
        connections: []
    },
    {
        id: "operations",
        title: "Operations",
        name: "Team (25)",
        icon: Users,
        color: "from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800",
        connections: []
    },
    {
        id: "projects",
        title: "Projects",
        name: "Team (40)",
        icon: Building,
        color: "from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800",
        connections: []
    }
];

export function Organogram() {
    return (
        <div className="relative min-h-150">
            {/* Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {nodes.map((node) =>
                    node.connections.map((targetId) => {
                        const target = nodes.find(n => n.id === targetId);
                        if (!target) return null;

                        const sourceX = 50;
                        const sourceY = node.id === "ceo" ? 50 :
                            node.id.includes("finance") || node.id.includes("accounting") ? 150 :
                                node.id.includes("tech") || node.id.includes("innovation") ? 150 :
                                    node.id.includes("operations") || node.id.includes("projects") ? 150 : 100;

                        const targetX = target.id === "ceo" ? 50 :
                            target.id.includes("finance") || target.id.includes("accounting") ? 150 :
                                target.id.includes("tech") || target.id.includes("innovation") ? 150 :
                                    target.id.includes("operations") || target.id.includes("projects") ? 150 : 100;

                        const targetY = target.id === "ceo" ? 50 :
                            target.id.includes("finance") ? 250 :
                                target.id.includes("accounting") ? 350 :
                                    target.id.includes("tech") ? 250 :
                                        target.id.includes("innovation") ? 350 :
                                            target.id.includes("operations") ? 250 :
                                                target.id.includes("projects") ? 350 : 150;

                        return (
                            <line
                                key={`${node.id}-${targetId}`}
                                x1={`${sourceX}%`}
                                y1={`${sourceY}px`}
                                x2={`${targetX}%`}
                                y2={`${targetY}px`}
                                stroke="currentColor"
                                strokeWidth="1"
                                className="text-gray-300 dark:text-gray-700"
                                strokeDasharray="4"
                            />
                        );
                    })
                )}
            </svg>

            {/* Nodes */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Level 1 - CEO */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="col-span-full flex justify-center mb-16"
                >
                    <div className="w-full max-w-xs">
                        <Node node={nodes[0]} />
                    </div>
                </motion.div>

                {/* Level 2 - C-Suite */}
                <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {nodes.slice(1, 4).map((node, index) => (
                        <motion.div
                            key={node.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex justify-center"
                        >
                            <Node node={node} />
                        </motion.div>
                    ))}
                </div>

                {/* Level 3 - Departments */}
                <div className="col-span-full grid grid-cols-2 md:grid-cols-5 gap-6">
                    {nodes.slice(4).map((node, index) => (
                        <motion.div
                            key={node.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Node node={node} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Node({ node }: { node: typeof nodes[0] }) {
    const Icon = node.icon;

    return (
        <div className="relative group">
            <div className={`p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-linear-to-br ${node.color} transition-all group-hover:scale-105 group-hover:shadow-lg`}>
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-white/80 dark:bg-black/80 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-sm mb-1">{node.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{node.name}</p>
                </div>
            </div>
        </div>
    );
}