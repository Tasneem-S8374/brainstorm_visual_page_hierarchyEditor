import { Handle, Position } from "reactflow";
import HomeSections from "./HomeSections";

export default function HomeNode({ data }) {
  return (
    <div className="bg-blue-100 rounded p-3 w-56">
      <Handle type="target" position={Position.Top} />

      <h3 className="font-bold text-center mb-2">Home</h3>

      <div className="nodrag nopan">
        <HomeSections sections={data.sections} setSections={data.setSections} />
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
