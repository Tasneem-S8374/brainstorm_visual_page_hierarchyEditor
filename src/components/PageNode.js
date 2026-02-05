import { Handle, Position } from "reactflow";

export default function PageNode({ data }) {
  return (
    <div className="bg-sky-200 px-4 py-2 rounded">
      <Handle type="target" position={Position.Top} />
      {data.label}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
