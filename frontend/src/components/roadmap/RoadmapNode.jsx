import { Handle, Position } from '@xyflow/react';

export const StageNode = ({ data }) => {
  return (
    <div className="stage-node">
      <Handle type="source" position={Position.Left} id="left" style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Left} id="left" style={{ opacity: 0 }} />
      
      <Handle type="target" position={Position.Top} id="top" style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Bottom} id="bottom" style={{ opacity: 0 }} />
      
      {data.label}
    </div>
  );
};

export const SkillNode = ({ data }) => {
  const isAdvanced = data.level === 'Advanced';
  const isOptional = data.level === 'Optional';
  
  let className = "skill-node";
  if (isAdvanced) className += " advanced";
  if (isOptional) className += " optional";

  return (
    <div 
      className={className}
      onClick={() => data.onClick && data.onClick(data)}
    >
      <Handle type="target" position={Position.Top} id="top" style={{ opacity: 0 }} />
      {data.label}
    </div>
  );
};
