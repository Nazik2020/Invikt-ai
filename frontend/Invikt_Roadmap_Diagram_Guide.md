// ═══════════════════════════════════════════════════
// INVIKT — ROADMAP DIAGRAM COMPLETE SETUP GUIDE
// ═══════════════════════════════════════════════════

// ─────────────────────────────────────────────────────
// FILE 1: src/pages/RoadmapDetail.jsx
// Replace your existing file with this
// ─────────────────────────────────────────────────────

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RoadmapDiagram from '../components/roadmap/RoadmapDiagram';
import StageAccordion from '../components/roadmap/StageAccordion';

const RoadmapDetail = () => {
  const { id }    = useParams();
  const navigate  = useNavigate();
  const [roadmap, setRoadmap]   = useState(null);
  const [loading, setLoading]   = useState(true);
  const [view, setView]         = useState('diagram');

  useEffect(() => {
    setLoading(true);
    import(`../data/roadmaps/${id}.json`)
      .then(data => {
        setRoadmap(data.default);
        setLoading(false);
      })
      .catch(() => navigate('/roadmap'));
  }, [id]);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        gap: '16px',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid #e5e7eb',
          borderTopColor: '#f5c518',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
        <p style={{
          color: '#6b7280',
          fontSize: '14px',
        }}>
          Loading roadmap...
        </p>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>

      {/* ── TOP BAR ── */}
      <div style={{
        background: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}>
        {/* Back button */}
        <button
          onClick={() => navigate('/roadmap')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '7px 14px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#374151',
            cursor: 'pointer',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#f9fafb';
            e.currentTarget.style.borderColor = '#d1d5db';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'none';
            e.currentTarget.style.borderColor = '#e5e7eb';
          }}
        >
          ← All Roadmaps
        </button>

        {/* View toggle */}
        <div style={{
          display: 'flex',
          background: '#f3f4f6',
          borderRadius: '10px',
          padding: '3px',
          gap: '2px',
        }}>
          {[
            { key: 'diagram', icon: '🗺️', label: 'Diagram' },
            { key: 'list',    icon: '☰',  label: 'List View' },
          ].map(btn => (
            <button
              key={btn.key}
              onClick={() => setView(btn.key)}
              style={{
                padding: '7px 16px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.15s',
                background: view === btn.key ? '#ffffff' : 'transparent',
                color: view === btn.key ? '#111827' : '#6b7280',
                boxShadow: view === btn.key
                  ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
              }}
            >
              <span>{btn.icon}</span>
              <span>{btn.label}</span>
            </button>
          ))}
        </div>

        {/* Share / bookmark placeholder */}
        <div style={{
          fontSize: '12px',
          color: '#9ca3af',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          <span style={{ fontSize: '16px' }}>{roadmap?.icon}</span>
          <span style={{ fontWeight: '600', color: '#374151' }}>
            {roadmap?.title}
          </span>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      {view === 'diagram' ? (
        <RoadmapDiagram roadmapData={roadmap} />
      ) : (
        // List view — your existing accordion
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '32px 24px' }}>
          {/* Roadmap info header */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '24px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '12px',
            }}>
              <span style={{ fontSize: '36px' }}>{roadmap.icon}</span>
              <div>
                <h1 style={{
                  margin: 0,
                  fontSize: '24px',
                  fontWeight: '800',
                  color: '#111827',
                  fontFamily: 'Manrope, sans-serif',
                }}>
                  {roadmap.title}
                </h1>
                <p style={{
                  margin: '4px 0 0',
                  fontSize: '13px',
                  color: '#6b7280',
                }}>
                  {roadmap.stages_count} stages
                  &nbsp;•&nbsp;
                  {roadmap.skills_count} skills
                  &nbsp;•&nbsp;
                  ~{roadmap.estimated_time}
                </p>
              </div>
            </div>
            <p style={{
              margin: 0,
              color: '#374151',
              fontSize: '14px',
              lineHeight: '1.6',
            }}>
              {roadmap.description}
            </p>
          </div>

          {/* Stages accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {roadmap.stages.map(stage => (
              <StageAccordion
                key={stage.id}
                stage={stage}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapDetail;


// ─────────────────────────────────────────────────────
// FILE 2: src/components/roadmap/StageAccordion.jsx
// Simple list view fallback — light theme
// ─────────────────────────────────────────────────────

import { useState } from 'react';

const LEVEL_STYLE = {
  Beginner:     { bg: '#dcfce7', color: '#15803d' },
  Intermediate: { bg: '#fef9c3', color: '#a16207' },
  Advanced:     { bg: '#fee2e2', color: '#b91c1c' },
};

export const StageAccordion = ({ stage }) => {
  const [open, setOpen] = useState(stage.number === 1);

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
            {stage.number}
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
              {stage.skills.length} skills
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
      {open && (
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
                    {skill.level}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    color: '#9ca3af',
                  }}>
                    ~{skill.estimated_hours}h
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


// ═══════════════════════════════════════════════════
// SETUP STEPS — DO THESE IN ORDER
// ═══════════════════════════════════════════════════

/*

STEP 1 — Install React Flow
────────────────────────────
cd frontend
npm install reactflow

STEP 2 — Create these files
────────────────────────────
Copy RoadmapDiagram_Fixed.jsx  →  src/components/roadmap/RoadmapDiagram.jsx
Copy NodeSidebar_Fixed.jsx     →  src/components/roadmap/NodeSidebar.jsx
Copy this file sections        →  src/pages/RoadmapDetail.jsx
                               →  src/components/roadmap/StageAccordion.jsx

STEP 3 — Import React Flow CSS in main.jsx
───────────────────────────────────────────
Add this line to src/main.jsx:
import 'reactflow/dist/style.css';

STEP 4 — Test it locally
─────────────────────────
npm run dev
Open: http://localhost:5173/roadmap
Click any roadmap card
You should see the diagram

STEP 5 — If nodes look wrong
──────────────────────────────
Run this in browser console:
document.querySelectorAll('.react-flow__node').length
If 0 — check your JSON has stages and skills
If > 0 — nodes exist, check CSS

STEP 6 — What the diagram should look like
───────────────────────────────────────────

White background with grey dots

    ┌─────────────────────────────┐
    │  Stage 1 — FOUNDATIONS      │   ← yellow box
    └─────────┬───────────────────┘
              │
    ┌──────────────────────────────────────┐
    │         │          │         │       │
    ▼         ▼          ▼         ▼       ▼
┌────────┐ ┌────────┐ ┌───────┐ ┌───────┐ ...
│HTML&CSS│ │  JS    │ │Git    │ │ CSS   │    ← white boxes dark border
└────────┘ └────────┘ └───────┘ └───────┘
                │
    (yellow dashed line to next stage)
                │
    ┌─────────────────────────────┐
    │  Stage 2 — CORE TOOLS      │   ← yellow box
    └─────────────────────────────┘

Minimap: bottom right corner
Zoom buttons: bottom left corner
Progress bar: top right corner

CLICKING A NODE shows sidebar:
────────────────────────────────
Right side panel slides in
Shows skill name and description
Shows all resource links
YouTube, Courses, Docs, Practice
Mark as Learned yellow button

═══════════════════════════════════════════════════
VISUAL STYLE SUMMARY
═══════════════════════════════════════════════════

Background:   White #ffffff with grey dot grid
Stage boxes:  Yellow #f5c518 with dark border
Skill boxes:  White with dark border #374151
Advanced:     Blue tinted #dbeafe
Optional:     Green tinted #f0fdf4 dashed border
Hover:        Yellow tint + slight lift
Lines:        Grey #9ca3af smooth curves
Stage→Stage:  Yellow dashed animated line
Text:         Dark #111827 always readable
Sidebar:      White panel slides from right
Button:       Yellow #f5c518 — matches theme

═══════════════════════════════════════════════════
TROUBLESHOOTING
═══════════════════════════════════════════════════

Problem: Blank white canvas with no nodes
Fix: Check JSON file has stages array
     console.log(roadmap.stages)

Problem: Nodes show but very tiny
Fix: fitView is set — try zooming in
     Or increase node padding values

Problem: Text cut off in nodes
Fix: Increase maxWidth in RoadmapNode.jsx
     Change 190px to 220px

Problem: Lines not connecting
Fix: Handle positions must match
     source bottom → target top works
     for vertical layout

Problem: Sidebar not opening on click
Fix: data.onClick must be passed to node
     Check handleNodeClick is defined
     Check nodeTypes registered correctly

Problem: React Flow CSS not applying
Fix: Make sure this is in main.jsx:
     import 'reactflow/dist/style.css'

Problem: Error "Cannot find module reactflow"
Fix: npm install reactflow
     Restart dev server

═══════════════════════════════════════════════════
*/