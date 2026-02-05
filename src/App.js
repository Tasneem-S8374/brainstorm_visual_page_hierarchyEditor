import React, { useState } from "react";
import FlowCanvas from "./components/FlowCanvas";

export default function App() {
  const [sections, setSections] = useState([
    "Hero",
    "Features",
    "Testimonials",
    "CTA",
    "Footer",
  ]);

  const [nodesState, setNodesState] = useState([]);
  const [edgesState, setEdgesState] = useState([]);
  const [showJson, setShowJson] = useState(false);

  const save = () => {
    localStorage.setItem(
      "hierarchyData",
      JSON.stringify({ nodes: nodesState, edges: edgesState, sections }),
    );

    alert("Saved Successfully");
  };

  const load = () => {
    const data = JSON.parse(localStorage.getItem("hierarchyData"));

    if (data) {
      setSections(data.sections || []);
      setNodesState(data.nodes || []);
      setEdgesState(data.edges || []);

      alert("Hierarchy loaded successfully ✅");
    } else {
      alert("No saved data found ❌");
    }
  };

  const exportJson = () => {
    const data = { nodes: nodesState, edges: edgesState, sections };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "page-hierarchy.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <header className="p-4 bg-gray-900 text-white flex gap-3">
        <button
          onClick={save}
          className="bg-green-600 px-3 py-1 rounded hover:bg-green-700"
        >
          Save
        </button>

        <button
          onClick={load}
          className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
        >
          Load
        </button>

        <button
          onClick={exportJson}
          className="bg-purple-600 px-3 py-1 rounded hover:bg-purple-700"
        >
          Export JSON
        </button>
      </header>

      <FlowCanvas
        sections={sections}
        setSections={setSections}
        loadedNodes={nodesState}
        loadedEdges={edgesState}
        setNodesState={setNodesState}
        setEdgesState={setEdgesState}
      />

      {showJson && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-4 rounded w-[600px] max-h-[80vh] overflow-auto">
            <h2 className="font-bold mb-2">Exported JSON</h2>
            <pre className="text-xs bg-gray-100 p-2 rounded">
              {JSON.stringify(
                { nodes: nodesState, edges: edgesState, sections },
                null,
                2,
              )}
            </pre>
            <div className="text-right mt-3">
              <button
                onClick={() => setShowJson(false)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
