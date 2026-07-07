import { useState, useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  ControlButton,
  MiniMap,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { StageNode, SkillNode } from './RoadmapNode';
import NodeSidebar from './NodeSidebar';
import './roadmapDiagram.css';

// Register custom node types
const nodeTypes = {
  stageNode: StageNode,
  skillNode: SkillNode,
};

const RoadmapDiagram = ({ roadmapData, onSkillToggle }) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [isLightMode, setIsLightMode] = useState(false);

  // Compute learned nodes from shared roadmap state
  const learnedNodes = useMemo(() => {
    const learned = new Set();
    if (roadmapData && roadmapData.stages) {
      roadmapData.stages.forEach(stage => {
        if (stage.skills) {
          stage.skills.forEach(skill => {
            if (skill.done) learned.add(skill.id);
          });
        }
      });
    }
    return learned;
  }, [roadmapData]);

  // Convert roadmap JSON into React Flow nodes using hierarchical vertical layout
  const buildNodes = useCallback(() => {
    const nodes = [];
    const edges = [];
    let yOffset = 0;
    const centerX = 3000; // Large center to avoid negative coords

    roadmapData.stages.forEach((stage, stageIndex) => {
      const stageId = `stage-${stage.id}`;

      // Stage Node (Yellow Box)
      nodes.push({
        id: stageId,
        type: 'stageNode',
        position: { x: centerX - 125, y: yOffset }, // 250px width -> -125 to center
        data: {
          label: `Stage ${stage.number || stageIndex + 1} — ${stage.title}`,
          stage: stage,
        },
        draggable: false,
      });

      // Yellow Dashed Edge to Next Stage
      if (stageIndex < roadmapData.stages.length - 1) {
        const nextStageId = `stage-${roadmapData.stages[stageIndex + 1].id}`;
        edges.push({
          id: `e-${stageId}-next`,
          source: stageId,
          target: nextStageId,
          sourceHandle: 'left',
          targetHandle: 'left',
          type: 'step',
          animated: true,
          style: { stroke: '#f5c518', strokeWidth: 3, strokeDasharray: '6 4' },
        });
      }

      yOffset += 130;

      // Skill Nodes (White Boxes spread horizontally)
      if (stage.skills && stage.skills.length > 0) {
        const nodeWidth = 180;
        const gap = 20;
        const maxPerRow = 6;
        const rows = Math.ceil(stage.skills.length / maxPerRow);

        for (let r = 0; r < rows; r++) {
          const skillsInRow = stage.skills.slice(r * maxPerRow, (r + 1) * maxPerRow);
          const totalWidth = skillsInRow.length * nodeWidth + (skillsInRow.length - 1) * gap;
          let startX = centerX - totalWidth / 2;

          skillsInRow.forEach((skill) => {
            nodes.push({
              id: skill.id,
              type: 'skillNode',
              position: { x: startX, y: yOffset },
              data: {
                label: skill.name,
                level: skill.level || 'Beginner',
                description: skill.description,
                estimated_hours: skill.estimated_hours,
                resources: skill.resources,
                onClick: (data) => setSelectedNode(data),
              },
              draggable: false,
            });

            // Smooth branch edge from stage bottom to skill top
            edges.push({
              id: `e-${stageId}-${skill.id}`,
              source: stageId,
              target: skill.id,
              sourceHandle: 'bottom',
              targetHandle: 'top',
              type: 'smoothstep',
              style: { stroke: '#9ca3af', strokeWidth: 1.5 },
            });

            startX += nodeWidth + gap;
          });

          yOffset += 110; // offset for next row of skills
        }
      }

      yOffset += 60; // Extra gap before next stage
    });

    return { nodes, edges };
  }, [roadmapData]);

  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => buildNodes(), [buildNodes]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleMarkLearned = () => {
    if (!selectedNode) return;
    if (onSkillToggle) {
      onSkillToggle(selectedNode.id);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 64px)' }} className={isLightMode ? 'flow-light' : 'flow-dark'}>
      {/* React Flow Diagram */}
      <ReactFlow
        colorMode={isLightMode ? 'light' : 'dark'}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.2}
        maxZoom={2}
        attributionPosition="bottom-left"
      >
        <Background
          color="#e5e7eb"
          gap={20}
          size={1}
          variant="dots"
        />
        <Controls
          style={{
            background: isLightMode ? '#ffffff' : '#1f2937',
            border: `1px solid ${isLightMode ? '#e5e7eb' : '#374151'}`,
            borderRadius: '8px',
          }}
        >
          <ControlButton 
            onClick={() => setIsLightMode(!isLightMode)}
            title="Toggle Light/Dark Mode"
          >
            <span 
              className="material-symbols-outlined" 
              style={{ fontSize: '16px', color: isLightMode ? '#374151' : '#f3f4f6' }}
            >
              {isLightMode ? 'dark_mode' : 'light_mode'}
            </span>
          </ControlButton>
        </Controls>
        <MiniMap
          nodeColor={node => {
            if (node.type === 'stageNode') return '#f5c518';
            if (learnedNodes.has(node.id)) return '#22c55e';
            return isLightMode ? '#e5e7eb' : '#374151';
          }}
          style={{
            background: isLightMode ? '#ffffff' : '#1f2937',
            border: `1px solid ${isLightMode ? '#e5e7eb' : '#374151'}`,
            borderRadius: '8px',
          }}
        />
      </ReactFlow>

      {/* Node Click Sidebar */}
      {selectedNode && (
        <NodeSidebar
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
          onMarkLearned={handleMarkLearned}
          isLearned={learnedNodes.has(
            selectedNode.id || selectedNode.label
          )}
        />
      )}
    </div>
  );
};

export default RoadmapDiagram;
