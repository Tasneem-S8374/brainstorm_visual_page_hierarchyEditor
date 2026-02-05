import React, { useEffect, useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import { hierarchy } from "../data/hierarchyData";
import { getLayoutedElements } from "../utils/dagreLayout";
import HomeNode from "./HomeNode";

export default function FlowCanvas({
  sections,
  setSections,
  loadedNodes,
  loadedEdges,
}) {
  const nodeTypes = { homeNode: HomeNode };
  const { fitView } = useReactFlow();

  const initial = useMemo(() => {
    const nodes = hierarchy.map((item) => ({
      id: item.id,
      type: item.id === "home" ? "homeNode" : "default",
      data:
        item.id === "home" ? { sections, setSections } : { label: item.label },
      position: { x: 0, y: 0 },
      style:
        item.id === "home"
          ? {}
          : {
              background:
                item.level === 1
                  ? "#bbf7d0"
                  : item.level === 2
                    ? "#bae6fd"
                    : "#e9d5ff",
              borderRadius: 8,
              padding: 10,
            },
    }));

    const edges = hierarchy
      .filter((h) => h.parent)
      .map((h) => ({
        id: `${h.parent}-${h.id}`,
        source: h.parent,
        target: h.id,
      }));

    return getLayoutedElements(nodes, edges);
  }, [sections, setSections]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initial.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initial.edges);

  useEffect(() => {
    if (loadedNodes?.length) setNodes(loadedNodes);
  }, [loadedNodes, setNodes]);

  useEffect(() => {
    if (loadedEdges?.length) setEdges(loadedEdges);
  }, [loadedEdges, setEdges]);

  const onNodeClick = (_, node) => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        style: {
          ...n.style,
          border: n.id === node.id ? "3px solid #6366f1" : "1px solid #ddd",
        },
      })),
    );
  };

  return (
    <div className="w-full h-full">
      <button
        onClick={() => fitView()}
        className="absolute right-4 top-4 z-10 bg-white px-3 py-1 rounded shadow"
      >
        Reset Zoom
      </button>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
