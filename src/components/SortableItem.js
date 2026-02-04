import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
export default function SortableItem({ id, onChange }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <input
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      value={id}
      onChange={(e) => onChange(id, e.target.value)}
      className="bg-white p-2 rounded shadow cursor-move text-center border w-full"
    />
  );
}
