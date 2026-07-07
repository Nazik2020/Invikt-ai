// src/components/roadmap/StageAccordion.jsx
import { useState } from 'react';

const LEVEL_STYLE = {
  Beginner:     { bg: '#dcfce7', color: '#15803d' },
  Intermediate: { bg: '#fef9c3', color: '#a16207' },
  Advanced:     { bg: '#fee2e2', color: '#b91c1c' },
};

export const StageAccordion = ({ stage }) => {
  const [open, setOpen] = useState(stage.number === 1 || stage.id === 'stage-1');

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      overflow: 'hidden',
    }}>
      {/* Stage header */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: open ? '#fffbeb' : '#ffffff',
          border: 'none',
          cursor: 'pointer',
          borderBottom: open ? '1px solid #fde68a' : 'none',
          transition: 'background 0.15s',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Stage number badge */}
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: '#f5c518',
            color: '#1a1a1a',
            fontSize: '13px',
            fontWeight: '800',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            {stage.number || 1}
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{
              fontSize: '15px',
              fontWeight: '700',
              color: '#111827',
              fontFamily: 'Manrope, sans-serif',
            }}>
              {stage.title}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#6b7280',
              marginTop: '2px',
            }}>
              {stage.skills ? stage.skills.length : 0} skills
            </div>
          </div>
        </div>
        <span style={{
          fontSize: '14px',
          color: '#6b7280',
          transition: 'transform 0.2s',
          transform: open ? 'rotate(180deg)' : 'rotate(0)',
          display: 'inline-block',
        }}>
          ▼
        </span>
      </button>

      {/* Skills list */}
      {open && stage.skills && (
        <div style={{ padding: '12px' }}>
          {stage.skills.map((skill, i) => {
            const lvl = LEVEL_STYLE[skill.level] || LEVEL_STYLE.Beginner;
            return (
              <div
                key={skill.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  background: '#f9fafb',
                  borderRadius: '8px',
                  marginBottom: i < stage.skills.length - 1 ? '6px' : 0,
                  border: '1px solid #f3f4f6',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}>
                  {/* Checkbox */}
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '2px solid #d1d5db',
                    flexShrink: 0,
                    cursor: 'pointer',
                  }} />
                  <span style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#111827',
                  }}>
                    {skill.name}
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: '700',
                    padding: '2px 8px',
                    borderRadius: '20px',
                    background: lvl.bg,
                    color: lvl.color,
                    textTransform: 'uppercase',
                  }}>
                    {skill.level || 'Beginner'}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    color: '#9ca3af',
                  }}>
                    ~{skill.estimated_hours || 0}h
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StageAccordion;
