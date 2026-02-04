import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
export default function HomeSections({ sections, setSections }) {
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
  return (
    <div className="w-1/4 p-4 border-l bg-gray-50">
      {" "}
      <h2 className="font-bold mb-3">Home Sections</h2>{" "}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        {" "}
        <SortableContext
          items={sections}
          strategy={verticalListSortingStrategy}
        >
          {" "}
          <div className="space-y-2">
            {" "}
            {sections.map((id) => (
              <SortableItem key={id} id={id} />
            ))}{" "}
          </div>{" "}
        </SortableContext>{" "}
      </DndContext>{" "}
    </div>
  );
}
