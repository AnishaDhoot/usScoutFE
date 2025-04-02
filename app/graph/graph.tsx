// app/graph/graph.tsx
"use client";
import React, { useState, useEffect } from "react";

interface Node {
  id: string;
  x: number;
  y: number;
}

interface Link {
  source: string;
  target: string;
}

interface GraphProps {
  adjacencyMatrix: number[][];
  nodeLabels?: string[];
}

const GraphVisualization: React.FC<GraphProps> = ({
  adjacencyMatrix,
  nodeLabels = [],
}) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  const [dimensions] = useState({ width: 1200, height: 900 });

  useEffect(() => {
    if (!adjacencyMatrix) return;

    const nodeCount = adjacencyMatrix.length;
    const radius = Math.min(dimensions.width, dimensions.height) / 2.5;
    const newNodes: Node[] = Array.from({ length: nodeCount }, (_, i) => ({
      id: nodeLabels[i] || `${i + 1}`,
      x: Math.cos((i * 2 * Math.PI) / nodeCount) * radius + dimensions.width / 2,
      y: Math.sin((i * 2 * Math.PI) / nodeCount) * radius + dimensions.height / 2,
    }));

    const newLinks: Link[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i; j < nodeCount; j++) {
        if (adjacencyMatrix[i][j] === 1) {
          newLinks.push({ source: newNodes[i].id, target: newNodes[j].id });
        }
      }
    }

    setNodes(newNodes);
    setLinks(newLinks);
  }, [adjacencyMatrix, nodeLabels, dimensions]);

  return (
    <div className="relative w-full h-[900px] bg-[#1a1a2e] rounded-xl shadow-lg border-2 border-[#393e46] overflow-hidden">
      <svg width="100%" height="100%" className="absolute">
        {links.map((link, idx) => {
          const sourceNode = nodes.find((n) => n.id === link.source);
          const targetNode = nodes.find((n) => n.id === link.target);
          if (!sourceNode || !targetNode) return null;

          return (
            <line
              key={idx}
              x1={sourceNode.x}
              y1={sourceNode.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke="#4ecca3"
              strokeWidth={2.5}
              opacity={0.8}
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      {nodes.map((node, idx) => (
        <div
          key={idx}
          className="absolute flex items-center justify-center w-12 h-12 bg-[#4ecca3] text-[#1a1a2e] text-lg font-bold rounded-full shadow-lg cursor-pointer border-2 border-[#41b883] hover:scale-110 transition-transform duration-200"
          style={{ 
            left: node.x - 24, 
            top: node.y - 24,
            zIndex: 10,
          }}
        >
          {node.id}
        </div>
      ))}
    </div>
  );
};

export default GraphVisualization;