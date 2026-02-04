import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
export default function HomeNode({ data }) {
  const { sections, setSections } = data;
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setSections((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  const update = (oldVal, newVal) => {
    setSections((s) => s.map((i) => (i === oldVal ? newVal : i)));
  };

  return (
    <div className="bg-green-100 p-3 rounded shadow w-[260px] max-h-[260px] overflow-hidden">
      {" "}
      <h3 className="font-bold mb-2 text-center">Home</h3>{" "}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        {" "}
        <SortableContext
          items={sections}
          strategy={verticalListSortingStrategy}
        >
          {" "}
          <div className="space-y-1 max-h-[200px] overflow-auto">
            {" "}
            {sections.map((id) => (
              <SortableItem key={id} id={id} onChange={update} />
            ))}
          </div>{" "}
        </SortableContext>{" "}
      </DndContext>{" "}
    </div>
  );
}
