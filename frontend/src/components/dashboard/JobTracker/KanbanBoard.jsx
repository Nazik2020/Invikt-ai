import React, { useRef, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { API_URL } from "../../../config/api";
import { useAuth } from "../../../context/AuthContext";

const KanbanBoard = ({ stages, filteredApps, statusFilter, setSelectedApp, setApps, apps }) => {
  const kanbanContainerRef = useRef(null);
  const columnRefs = useRef({});
  const { getAuthHeaders } = useAuth();

  const handleDragEnd = async (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newStage = destination.droppableId;
    const stageObj = stages.find(s => s.key === newStage);

    // Optimistic update
    setApps(prev => prev.map(app => {
      if (app.id === draggableId) {
        return { ...app, stage: newStage, badge: stageObj ? stageObj.name.toUpperCase() : app.badge };
      }
      return app;
    }));

    try {
      await fetch(`${API_URL}/jobs/${draggableId}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify({ stage: newStage, badge: stageObj ? stageObj.name.toUpperCase() : "" }),
      });
    } catch (error) {
      console.error("Failed to update stage:", error);
      // Ideally revert state on failure
    }
  };

  // Auto-scroll Kanban board when a specific status is selected
  useEffect(() => {
    if (kanbanContainerRef.current) {
      const container = kanbanContainerRef.current;
      
      if (statusFilter === "All") {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else if (columnRefs.current[statusFilter]) {
        const targetColumn = columnRefs.current[statusFilter];
        const containerRect = container.getBoundingClientRect();
        const targetRect = targetColumn.getBoundingClientRect();
        const scrollTarget =
          container.scrollLeft + targetRect.left - containerRect.left - 16; // 16px padding

        container.scrollTo({
          left: scrollTarget,
          behavior: "smooth",
        });
      }
    }
  }, [statusFilter]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div
        ref={kanbanContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 pt-2 -mx-4 px-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
      >
        {stages.map((stage) => {
          const columnApps = filteredApps.filter((a) => a.stage === stage.key);
          return (
            <div
              key={stage.key}
              ref={(el) => (columnRefs.current[stage.key] = el)}
              className="w-80 shrink-0 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between px-1 shrink-0">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${stage.dot}`} />
                  <span className="text-[0.7rem] uppercase tracking-[0.15em] font-black text-slate-500 dark:text-white/45">
                    {stage.name}
                  </span>
                </div>
                <span
                  className={`text-[0.7rem] font-bold px-2 py-0.5 rounded-full ${stage.badgeStyle}`}
                >
                  {columnApps.length.toString().padStart(2, "0")}
                </span>
              </div>

              <Droppable droppableId={stage.key}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`flex-1 min-h-[420px] rounded-2xl transition-colors duration-200 ${snapshot.isDraggingOver ? "bg-white/5" : ""}`}
                  >
                    <div className="space-y-3">
                      {columnApps.map((app, index) => (
                        <Draggable key={app.id} draggableId={app.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              onClick={() => setSelectedApp(app)}
                              className={`p-5 rounded-2xl bg-white dark:bg-[#1e1f23]/60 border border-slate-200 dark:border-white/5 space-y-4 hover:border-slate-200 dark:border-white/10 hover:bg-white dark:bg-[#1e1f23]/80 transition-all group ${snapshot.isDragging ? "shadow-2xl shadow-violet-500/20 rotate-2 z-50 cursor-grabbing" : "cursor-pointer"}`}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`w-10 h-10 rounded-xl ${app.logoColor} flex items-center justify-center shrink-0 font-extrabold text-sm`}
                                  >
                                    {app.logoText}
                                  </div>
                                  <div>
                                    <h4 className="text-[0.95rem] font-bold text-slate-900 dark:text-white group-hover:text-violet-400 transition-colors leading-tight">
                                      {app.role}
                                    </h4>
                                    <p className="text-[0.75rem] text-slate-500 dark:text-white/40 mt-0.5">
                                      {app.company} • {app.time}
                                    </p>
                                  </div>
                                </div>
                                <button className="text-slate-400 dark:text-white/20 hover:text-slate-600 dark:text-white/60 cursor-pointer transition-colors">
                                  <span className="material-symbols-outlined text-[18px]">
                                    more_horiz
                                  </span>
                                </button>
                              </div>
                              <div className="flex items-center justify-between pt-1">
                                <span
                                  className={`text-[0.6rem] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-md border ${stage.badgeStyle}`}
                                >
                                  {app.badge}
                                </span>
                                {app.info ? (
                                  <span className="text-[0.7rem] text-rose-400 font-bold">
                                    {app.info}
                                  </span>
                                ) : (
                                  <span className="material-symbols-outlined text-slate-400 dark:text-white/25 text-[16px]">
                                    schedule
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                      {columnApps.length === 0 && !snapshot.isDraggingOver && (
                        <div className="text-center py-12 border border-dashed border-slate-200 dark:border-white/5 rounded-2xl text-slate-400 dark:text-white/20 text-xs">
                          No applications in this stage
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
