'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Room, RoomEvent, Track, type LocalParticipant, type RemoteParticipant, type VideoTrack } from 'livekit-client';
import { meetingApi, type Meeting, type MeetingParticipant } from '@/lib/api';
import { FRONTEND_ENV } from '@/lib/env';
import { useAuthStore } from '@/store/auth.store';

// ARQUIVO COMPLETO EM UM SÓ ARQUIVO - MEETING ROOM RESPONSIVO

// Types
interface Participant {
  id: string;
  userId: string;
  initials: string;
  name: string;
  role?: string;
  color: string;
  isSpeaking?: boolean;
  isMuted?: boolean;
  isCameraOff?: boolean;
  gradient?: string;
  videoTrack?: VideoTrack | null;
}

interface ReactionBurst {
  id: number;
  emoji: string;
  left: string;
}

interface ChatMessage {
  id: number;
  author: string;
  text: string;
  at: string;
}

// Icons as components for better control
const Icon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className = '', children, ...props }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={1.8} 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    {children}
  </svg>
);

const MicIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <Icon className={className} {...props}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </Icon>
);

const CameraIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <Icon className={className} {...props}>
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </Icon>
);

const ScreenShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <Icon className={className} {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </Icon>
);

const ChatIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <Icon className={className} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Icon>
);

const PeopleIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <Icon className={className} {...props}>
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
  </Icon>
);

const ReactionIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <Icon className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </Icon>
);

const MoreIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <Icon className={className} {...props}>
    <circle cx="5" cy="12" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
  </Icon>
);

const EndCallIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <Icon className={className} {...props}>
    <path 
      d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07C9.44 17.29 7.76 15.19 6.69 12.84A19.73 19.73 0 0 1 3.56 4.18 2 2 0 0 1 5.53 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.5 9.9a16 16 0 0 0 1.18 3.41z" 
      transform="rotate(135 12 12)" 
    />
  </Icon>
);

const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <Icon className={className} {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </Icon>
);

// Styles
const styles: Record<string, React.CSSProperties> = {
  roomWrap: {
    background: '#0a0e1a',
    borderRadius: '0px',
    minHeight: '100vh',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    border: '0.5px solid rgba(55,138,221,0.2)',
    width: '100%',
  } as React.CSSProperties,
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 20px)',
    borderBottom: '0.5px solid rgba(55,138,221,0.15)',
    background: 'rgba(10,14,26,0.95)',
    flexWrap: 'wrap',
    gap: '8px',
  },
  topLeft: { display: 'flex', alignItems: 'center', gap: 'clamp(6px, 1.5vw, 10px)', minWidth: 0, flex: '1 1 auto' },
  logoDot: {
    width: 'clamp(24px, 5vw, 28px)',
    height: 'clamp(24px, 5vw, 28px)',
    borderRadius: '7px',
    background: '#185FA5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'clamp(10px, 2vw, 12px)',
    fontWeight: 700,
    color: '#fff',
    letterSpacing: '-0.5px',
    flexShrink: 0,
  },
  meetingTitle: { fontSize: 'clamp(11px, 2.5vw, 14px)', fontWeight: 500, color: '#f0f4ff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  meetingSub: { fontSize: 'clamp(10px, 2vw, 12px)', color: '#8da4c4', marginTop: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  topCenter: { display: 'flex', alignItems: 'center', gap: '6px' },
  recDot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    background: '#e24b4a',
    animation: 'blink 1.4s infinite',
  },
  recLabel: { fontSize: '12px', color: '#e24b4a', fontWeight: 500, letterSpacing: '0.3px' },
  timer: { fontSize: '13px', color: '#f0f4ff', fontWeight: 500, letterSpacing: '1px', marginLeft: '12px' },
  topRight: { display: 'flex', alignItems: 'center', gap: '8px' },
  badgeParticipants: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    background: 'rgba(24,95,165,0.25)',
    border: '0.5px solid rgba(55,138,221,0.3)',
    borderRadius: '20px',
    padding: '4px 10px',
    fontSize: '12px',
    color: '#378ADD',
  },
  aiChip: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    background: 'rgba(83,74,183,0.25)',
    border: '0.5px solid rgba(127,119,221,0.3)',
    borderRadius: '20px',
    padding: '5px 12px',
    fontSize: '11px',
    color: '#AFA9EC',
    fontWeight: 500,
    cursor: 'pointer',
  },
  aiChipDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#7F77DD',
    animation: 'blink 2s infinite',
  },
  mainArea: {
    flex: 1,
    display: 'flex',
    gap: 0,
    overflow: 'hidden',
    position: 'relative',
    flexDirection: 'row',
  },
  hostStage: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#111827',
    minHeight: 'auto',
    width: '100%',
  },
  hostVideoSim: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    background: 'linear-gradient(145deg, #0d1930 0%, #0a1525 50%, #0d1e35 100%)',
  },
  hostAvatarBig: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: '#185FA5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '26px',
    fontWeight: 600,
    color: '#fff',
    border: '3px solid rgba(55,138,221,0.5)',
  },
  speakingRing: {
    position: 'absolute',
    width: '96px',
    height: '96px',
    borderRadius: '50%',
    border: '2px solid #378ADD',
    animation: 'pulse-ring 1.8s ease-out infinite',
    pointerEvents: 'none',
  },
  hostNameTag: {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(4px)',
    borderRadius: '8px',
    padding: '6px 12px',
    border: '0.5px solid rgba(55,138,221,0.2)',
  },
  hostName: { fontSize: '13px', fontWeight: 500, color: '#f0f4ff' },
  hostBadge: {
    fontSize: '10px',
    fontWeight: 600,
    color: '#378ADD',
    background: 'rgba(24,95,165,0.3)',
    borderRadius: '4px',
    padding: '2px 6px',
    letterSpacing: '0.5px',
  },
  qualityBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '11px',
    color: '#3b6d11',
    background: 'rgba(59,109,17,0.2)',
    borderRadius: '6px',
    padding: '3px 8px',
    border: '0.5px solid rgba(59,109,17,0.3)',
  },
  qualityBars: { display: 'flex', alignItems: 'flex-end', gap: '2px', height: '12px' },
  bar: { width: '3px', borderRadius: '1px', background: '#639922' },
  participantsSidebar: {
    width: 'clamp(140px, 20vw, 200px)',
    minWidth: '140px',
    background: 'rgba(10,14,26,0.7)',
    borderLeft: '0.5px solid rgba(55,138,221,0.12)',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    padding: 'clamp(6px, 1vw, 8px)',
    overflowY: 'auto',
  },
  sidebarLabel: {
    fontSize: 'clamp(9px, 1.5vw, 10px)',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    color: '#8da4c4',
    padding: '4px 6px 8px',
    fontWeight: 500,
  },
  participantTile: {
    borderRadius: '8px',
    background: '#111827',
    border: '0.5px solid rgba(55, 138, 221, 0.18)',
    padding: 0,
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'border-color 0.15s',
    position: 'relative',
  },
  tileVideo: {
    height: '72px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  tileAvatar: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    fontWeight: 600,
    color: '#fff',
  },
  tileInfo: {
    padding: '4px 6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: '0.5px solid rgba(55,138,221,0.1)',
  },
  tileName: { fontSize: '10px', color: '#f0f4ff', fontWeight: 400 },
  tileStatus: { display: 'flex', gap: '4px', alignItems: 'center' },
  mutedBadge: {
    background: 'rgba(226,75,74,0.25)',
    borderRadius: '4px',
    padding: '1px 5px',
    fontSize: '9px',
    color: '#f09595',
  },
  controlsBar: {
    padding: 'clamp(10px, 2vw, 14px) clamp(12px, 3vw, 20px)',
    background: 'rgba(10,14,26,0.96)',
    borderTop: '0.5px solid rgba(55,138,221,0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'clamp(8px, 2vw, 16px)',
    flexWrap: 'wrap',
  },
  ctrlGroup: { display: 'flex', alignItems: 'center', gap: 'clamp(6px, 1.5vw, 8px)', flexWrap: 'wrap', justifyContent: 'center' },
  ctrlBtn: {
    width: 'clamp(32px, 6vw, 36px)',
    height: 'clamp(32px, 6vw, 36px)',
    minWidth: '32px',
    minHeight: '32px',
    borderRadius: '8px',
    background: 'rgba(255,255,255,0.08)',
    border: '0.5px solid rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background 0.15s',
    position: 'relative',
    color: '#f0f4ff',
    padding: 0,
  } as React.CSSProperties,
  ctrlBtnActive: {
    background: 'rgba(24,95,165,0.35)',
    borderColor: 'rgba(55,138,221,0.4)',
  },
  ctrlBtnEnd: {
    background: '#a32d2d',
    borderColor: '#e24b4a',
    color: '#fff',
    width: 'auto',
    padding: 'clamp(6px, 1vw, 10px) clamp(14px, 3vw, 20px)',
    gap: '6px',
    fontSize: 'clamp(11px, 2vw, 13px)',
    fontWeight: 500,
    borderRadius: '8px',
    whiteSpace: 'nowrap',
    minHeight: '32px',
    minWidth: 'auto',
  } as React.CSSProperties,
  ctrlLabel: {
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: 'clamp(7px, 1vw, 9px)',
    color: '#8da4c4',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    opacity: 0,
    transition: 'opacity 0.15s',
  },
  ctrlSeparator: { width: '0.5px', height: '28px', background: 'rgba(255,255,255,0.1)', margin: '0 4px' },
  inviteBox: {
    marginTop: '8px',
    padding: '8px 6px',
    border: '0.5px dashed rgba(55,138,221,0.25)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
    color: '#8da4c4',
    fontSize: '11px',
  },
  preJoinOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(3,7,18,0.8)',
    backdropFilter: 'blur(6px)',
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  } as React.CSSProperties,
  preJoinCard: {
    width: 'min(460px, 100%)',
    background: '#0f172a',
    border: '1px solid rgba(55,138,221,0.3)',
    borderRadius: '14px',
    padding: '18px',
    color: '#f0f4ff',
    boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
  },
  preJoinTitle: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '6px',
  },
  preJoinText: {
    fontSize: '13px',
    color: '#8da4c4',
    marginBottom: '14px',
  },
  preJoinRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    padding: '10px 12px',
    marginBottom: '10px',
  },
  toggleBtn: {
    border: '1px solid rgba(55,138,221,0.35)',
    background: 'rgba(24,95,165,0.25)',
    color: '#f0f4ff',
    borderRadius: '999px',
    fontSize: '12px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  enterBtn: {
    width: '100%',
    border: '1px solid rgba(55,138,221,0.5)',
    background: '#185FA5',
    color: '#fff',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: 600,
    padding: '10px 12px',
    marginTop: '8px',
    cursor: 'pointer',
  },
  shareBadge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    background: 'rgba(24,95,165,0.55)',
    border: '1px solid rgba(55,138,221,0.5)',
    color: '#e6f1fb',
    borderRadius: '8px',
    fontSize: '11px',
    padding: '4px 8px',
    zIndex: 2,
  },
  reactionLayer: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
    zIndex: 5,
  } as React.CSSProperties,
  reactionItem: {
    position: 'absolute',
    bottom: '20px',
    fontSize: '24px',
    animation: 'float-up 1.8s ease-out forwards',
    filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.35))',
  } as React.CSSProperties,
  sidePanel: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: 'min(360px, 92vw)',
    height: '100%',
    background: 'rgba(7,10,18,0.96)',
    borderLeft: '1px solid rgba(55,138,221,0.2)',
    zIndex: 12,
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(6px)',
  } as React.CSSProperties,
  panelHeader: {
    padding: '12px 14px',
    borderBottom: '1px solid rgba(55,138,221,0.16)',
    color: '#f0f4ff',
    fontSize: '14px',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  panelBody: {
    flex: 1,
    overflowY: 'auto',
    padding: '10px',
  },
  panelCloseBtn: {
    border: '1px solid rgba(255,255,255,0.15)',
    background: 'rgba(255,255,255,0.06)',
    color: '#cdd8ea',
    borderRadius: '8px',
    padding: '4px 8px',
    cursor: 'pointer',
    fontSize: '11px',
  },
  chatMsg: {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    padding: '8px 10px',
    marginBottom: '8px',
    color: '#e6edf8',
    fontSize: '12px',
  },
  chatComposer: {
    borderTop: '1px solid rgba(55,138,221,0.16)',
    padding: '10px',
    display: 'flex',
    gap: '8px',
  },
  chatInput: {
    flex: 1,
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#fff',
    borderRadius: '8px',
    padding: '8px 10px',
    fontSize: '12px',
    outline: 'none',
  },
  participantRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    padding: '8px 10px',
    marginBottom: '8px',
  },
  moreMenu: {
    position: 'absolute',
    right: '14px',
    bottom: '62px',
    width: '220px',
    background: 'rgba(7,10,18,0.98)',
    border: '1px solid rgba(55,138,221,0.22)',
    borderRadius: '10px',
    zIndex: 20,
    overflow: 'hidden',
  } as React.CSSProperties,
  moreItem: {
    width: '100%',
    textAlign: 'left',
    padding: '10px 12px',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    color: '#d7e5fb',
    fontSize: '12px',
    cursor: 'pointer',
  },
  reactionPicker: {
    position: 'absolute',
    right: '84px',
    bottom: '62px',
    display: 'flex',
    gap: '6px',
    background: 'rgba(7,10,18,0.98)',
    border: '1px solid rgba(55,138,221,0.22)',
    borderRadius: '999px',
    padding: '6px 8px',
    zIndex: 20,
  } as React.CSSProperties,
  reactionPickBtn: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(255,255,255,0.08)',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

// Keyframes injection
const GlobalStyles: React.FC = () => (
  <style>{`
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
    @keyframes pulse-ring {
      0% { transform: scale(1); opacity: 0.7; }
      100% { transform: scale(1.5); opacity: 0; }
    }
    .ctrl-btn:hover .ctrl-label {
      opacity: 1 !important;
    }
    .participant-tile:hover {
      border-color: rgba(55,138,221,0.4) !important;
    }
    .ctrl-btn:hover {
      background: rgba(255,255,255,0.14) !important;
    }
    .ctrl-btn-end:hover {
      background: #791f1f !important;
    }
    @keyframes float-up {
      0% { transform: translateY(0) scale(0.9); opacity: 0; }
      15% { opacity: 1; }
      100% { transform: translateY(-180px) scale(1.2); opacity: 0; }
    }
  `}</style>
);

const palette = ['#185FA5', '#3C3489', '#3B6D11', '#714512', '#6B2C8A', '#0F766E'];
const gradients = [
  'linear-gradient(135deg,#0a1830,#0f2040)',
  'linear-gradient(135deg,#12101e,#1a1530)',
  'linear-gradient(135deg,#0e1d14,#13261a)',
  'linear-gradient(135deg,#1a1010,#251515)',
  'linear-gradient(135deg,#1a1024,#241436)',
  'linear-gradient(135deg,#0c1f23,#103036)',
];

const initialsFromName = (value: string): string =>
  value
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('') || 'U';

const parseRole = (participant: LocalParticipant | RemoteParticipant): string => {
  const attrRole = participant.attributes?.role;
  if (attrRole) return attrRole;
  if (participant.metadata) {
    try {
      const metadata = JSON.parse(participant.metadata) as { role?: string };
      if (metadata.role) return metadata.role;
    } catch {
      // ignore malformed metadata
    }
  }
  return 'viewer';
};

const getCameraTrack = (participant: LocalParticipant | RemoteParticipant): VideoTrack | null => {
  for (const publication of participant.videoTrackPublications.values()) {
    if (publication.track && publication.source === Track.Source.Camera) {
      return publication.track;
    }
  }
  return null;
};

const LiveVideo: React.FC<{ track: VideoTrack; muted?: boolean; style: React.CSSProperties }> = ({
  track,
  muted,
  style,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;
    track.attach(element);
    return () => {
      track.detach(element);
    };
  }, [track]);

  return <video ref={videoRef} autoPlay playsInline muted={muted} style={style} />;
};

const MeetingRoom: React.FC = () => {
  const { meetingId } = useParams<{ meetingId: string }>();
  const [searchParams] = useSearchParams();
  const { user } = useAuthStore();

  const roomUserId = user?.id || searchParams.get('userId') || 'guest-user';
  const roomRole = (searchParams.get('role') || 'viewer').toLowerCase();
  const roomDisplayName = searchParams.get('name') || user?.fullName || 'Participante';

  const [seconds, setSeconds] = useState(0);
  const [inMeeting, setInMeeting] = useState(false);
  const [preJoinOpen, setPreJoinOpen] = useState(true);
  const [micActive, setMicActive] = useState(true);
  const [camActive, setCamActive] = useState(true);
  const [shareActive, setShareActive] = useState(false);
  const [activePanel, setActivePanel] = useState<'chat' | 'participants' | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const [reactionPickerOpen, setReactionPickerOpen] = useState(false);
  const [reactions, setReactions] = useState<ReactionBurst[]>([]);
  const [reactionSeed, setReactionSeed] = useState(1);
  const [screenStream, setScreenStream] = useState<MediaStream | null>(null);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [mediaError, setMediaError] = useState<string | null>(null);
  const [joinError, setJoinError] = useState<string | null>(null);
  const [livekitRoom, setLivekitRoom] = useState<Room | null>(null);
  const [livekitParticipants, setLivekitParticipants] = useState<Participant[]>([]);
  const preJoinVideoRef = useRef<HTMLVideoElement | null>(null);

  const { data: meetingData } = useQuery<Meeting>({
    queryKey: ['meeting-room', meetingId],
    queryFn: () => meetingApi.get(meetingId as string),
    enabled: Boolean(meetingId),
    retry: 1,
  });

  const meetingStartedAt = useMemo(() => {
    const raw = (meetingData as Record<string, unknown> | undefined)?.createdAt;
    if (typeof raw !== 'string') return null;
    const parsed = Date.parse(raw);
    return Number.isNaN(parsed) ? null : parsed;
  }, [meetingData]);

  const syncLivekitParticipants = useCallback((room: Room) => {
    const all = [room.localParticipant, ...Array.from(room.remoteParticipants.values())];
    const mapped = all.map((participant, index) => {
      const identity = participant.identity || `participant-${index}`;
      const displayName = participant.name || participant.identity || `Participante ${index + 1}`;
      const isLocal = participant.sid === room.localParticipant.sid;
      return {
        id: participant.sid,
        userId: identity,
        initials: initialsFromName(displayName),
        name: displayName,
        role: parseRole(participant),
        color: palette[index % palette.length],
        gradient: gradients[index % gradients.length],
        isSpeaking: participant.isSpeaking,
        isMuted: isLocal ? !room.localParticipant.isMicrophoneEnabled : !participant.isMicrophoneEnabled,
        isCameraOff: isLocal ? !room.localParticipant.isCameraEnabled : !participant.isCameraEnabled,
        videoTrack: getCameraTrack(participant),
      } as Participant;
    });
    setLivekitParticipants(mapped);
  }, []);

  const participants = useMemo<Participant[]>(() => {
    if (livekitParticipants.length > 0) {
      return livekitParticipants;
    }

    const source = Array.isArray(meetingData?.participants) && meetingData?.participants.length > 0
      ? meetingData.participants
      : [{ userId: roomUserId, role: roomRole, name: roomDisplayName } satisfies MeetingParticipant];

    return source.map((participant, index) => {
      const display = participant.name || participant.userId || `Participante ${index + 1}`;
      const initials = display
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join('') || 'U';

      return {
        id: participant.userId || `participant-${index}`,
        userId: participant.userId || `participant-${index}`,
        initials,
        name: display,
        role: participant.role || 'viewer',
        color: palette[index % palette.length],
        gradient: gradients[index % gradients.length],
        isMuted: participant.userId === roomUserId ? !micActive : false,
        isCameraOff: participant.userId === roomUserId ? !camActive : false,
        videoTrack: null,
      };
    });
  }, [livekitParticipants, meetingData?.participants, roomUserId, roomRole, roomDisplayName, micActive, camActive]);

  const meetingTitle =
    (typeof meetingData?.title === 'string' && meetingData.title.trim()) ||
    `Reunião ${meetingId?.slice(0, 8) ?? 'nova'}`;

  const meetingSub = meetingData?.projectId
    ? `Projeto ${String(meetingData.projectId).slice(0, 8)} · Sala ${meetingId?.slice(0, 8) ?? 'nova'}`
    : `Sala ${meetingId?.slice(0, 8) ?? 'nova'}`;

  const leadParticipant = useMemo(
    () => participants.find((participant) => participant.role === 'host') || participants[0],
    [participants],
  );

  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  useEffect(() => {
    if (!inMeeting) {
      setSeconds(0);
      return;
    }
    const initialSeconds = meetingStartedAt
      ? Math.max(0, Math.floor((Date.now() - meetingStartedAt) / 1000))
      : 0;
    setSeconds(initialSeconds);
    const interval = window.setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(interval);
  }, [inMeeting, meetingStartedAt]);

  useEffect(() => {
    if (!localStream) {
      if (preJoinVideoRef.current) preJoinVideoRef.current.srcObject = null;
      return;
    }

    if (preJoinVideoRef.current) {
      preJoinVideoRef.current.srcObject = localStream;
    }
  }, [localStream, preJoinOpen]);

  useEffect(() => {
    if (!preJoinOpen) return;

    const wantsMedia = micActive || camActive;
    if (!wantsMedia) {
      setMediaError(null);
      setLocalStream((previous) => {
        if (previous) previous.getTracks().forEach((track) => track.stop());
        return null;
      });
      return;
    }

    let cancelled = false;

    const openUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: micActive,
          video: camActive,
        });
        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        setMediaError(null);
        setLocalStream((previous) => {
          if (previous) previous.getTracks().forEach((track) => track.stop());
          return stream;
        });
      } catch {
        if (cancelled) return;
        setMediaError('Permissão de câmera/microfone negada ou dispositivo indisponível.');
      }
    };

    void openUserMedia();

    return () => {
      cancelled = true;
    };
  }, [preJoinOpen, micActive, camActive]);

  useEffect(() => {
    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [localStream]);

  const pushSystemMessage = useCallback((text: string) => {
    setChatMessages((previous) => [
      ...previous,
      {
        id: Date.now() + Math.floor(Math.random() * 1000),
        author: 'Sistema',
        text,
        at: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  }, []);

  useEffect(() => {
    return () => {
      if (livekitRoom) {
        livekitRoom.disconnect();
      }
    };
  }, [livekitRoom]);

  const handleEndCall = useCallback(async () => {
    setInMeeting(false);
    setPreJoinOpen(true);
    setActivePanel(null);
    setMoreOpen(false);
    setReactionPickerOpen(false);
    setJoinError(null);
    if (livekitRoom) {
      livekitRoom.disconnect();
      setLivekitRoom(null);
      setLivekitParticipants([]);
    }
    if (screenStream) {
      screenStream.getTracks().forEach((track) => track.stop());
      setScreenStream(null);
    }
    setShareActive(false);
  }, [screenStream, livekitRoom]);

  const handleEnterMeeting = useCallback(async () => {
    if (!meetingId) {
      setJoinError('Meeting ID inválido.');
      return;
    }
    setJoinError(null);
    const wsUrl =
      searchParams.get('livekitUrl') ||
      FRONTEND_ENV.livekitUrl;

    try {
      const tokenPayload: Record<string, string> = {
        userId: roomUserId,
        role: roomRole,
      };
      const tenantId = searchParams.get('tenantId') || user?.tenantId;
      if (tenantId) tokenPayload.tenantId = tenantId;
      if (roomDisplayName) tokenPayload.name = roomDisplayName;

      const tokenData = await meetingApi.getToken(meetingId, tokenPayload);
      const token = tokenData.token;
      if (!token) {
        setJoinError('Token LiveKit não recebido.');
        return;
      }

      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
        setLocalStream(null);
      }

      const room = new Room({
        adaptiveStream: true,
        dynacast: true,
      });

      const sync = () => syncLivekitParticipants(room);
      room.on(RoomEvent.Connected, sync);
      room.on(RoomEvent.ParticipantConnected, sync);
      room.on(RoomEvent.ParticipantDisconnected, sync);
      room.on(RoomEvent.TrackSubscribed, sync);
      room.on(RoomEvent.TrackUnsubscribed, sync);
      room.on(RoomEvent.TrackPublished, sync);
      room.on(RoomEvent.TrackUnpublished, sync);
      room.on(RoomEvent.LocalTrackPublished, sync);
      room.on(RoomEvent.LocalTrackUnpublished, sync);
      room.on(RoomEvent.ActiveSpeakersChanged, sync);
      room.on(RoomEvent.ParticipantMetadataChanged, sync);

      await room.connect(wsUrl, token);
      await room.localParticipant.setMicrophoneEnabled(micActive);
      await room.localParticipant.setCameraEnabled(camActive);

      setLivekitRoom(room);
      sync();
      setInMeeting(true);
      setPreJoinOpen(false);
    } catch {
      setJoinError('Não foi possível entrar na sala em tempo real (LiveKit).');
      return;
    }

    if (chatMessages.length === 0) {
      pushSystemMessage(`${roomDisplayName} entrou na sala.`);
    }
  }, [
    meetingId,
    searchParams,
    roomUserId,
    roomRole,
    roomDisplayName,
    user?.tenantId,
    localStream,
    micActive,
    camActive,
    chatMessages.length,
    pushSystemMessage,
    syncLivekitParticipants,
  ]);

  const toggleMic = useCallback(async () => {
    if (!inMeeting) return;
    const next = !micActive;
    setMicActive(next);
    if (livekitRoom) {
      try {
        await livekitRoom.localParticipant.setMicrophoneEnabled(next);
        syncLivekitParticipants(livekitRoom);
      } catch {
        setMicActive(!next);
      }
    }
  }, [inMeeting, micActive, livekitRoom, syncLivekitParticipants]);

  const toggleCam = useCallback(async () => {
    if (!inMeeting) return;
    const next = !camActive;
    setCamActive(next);
    if (livekitRoom) {
      try {
        await livekitRoom.localParticipant.setCameraEnabled(next);
        syncLivekitParticipants(livekitRoom);
      } catch {
        setCamActive(!next);
      }
    }
  }, [inMeeting, camActive, livekitRoom, syncLivekitParticipants]);

  const handleToggleScreenShare = useCallback(async () => {
    if (!inMeeting) return;
    if (livekitRoom) {
      const next = !shareActive;
      try {
        await livekitRoom.localParticipant.setScreenShareEnabled(next);
        setShareActive(next);
        syncLivekitParticipants(livekitRoom);
        return;
      } catch {
        setShareActive(false);
      }
    }
    if (shareActive && screenStream) {
      screenStream.getTracks().forEach((track) => track.stop());
      setScreenStream(null);
      setShareActive(false);
      return;
    }

    try {
      if (!navigator.mediaDevices?.getDisplayMedia) return;
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
      setScreenStream(stream);
      setShareActive(true);
      const [videoTrack] = stream.getVideoTracks();
      if (videoTrack) {
        videoTrack.onended = () => {
          setShareActive(false);
          setScreenStream(null);
        };
      }
    } catch {
      setShareActive(false);
      setScreenStream(null);
    }
  }, [inMeeting, livekitRoom, shareActive, screenStream, syncLivekitParticipants]);

  const emitReaction = useCallback((emoji: string) => {
    if (!inMeeting) return;
    const id = reactionSeed;
    setReactionSeed((prev) => prev + 1);
    const left = `${12 + Math.floor(Math.random() * 76)}%`;
    setReactions((prev) => [...prev, { id, emoji, left }]);
    window.setTimeout(() => {
      setReactions((prev) => prev.filter((item) => item.id !== id));
    }, 1800);
  }, [inMeeting, reactionSeed]);

  const handleSendChat = useCallback(() => {
    if (!chatInput.trim()) return;
    const nextMessage: ChatMessage = {
      id: Date.now(),
      author: roomDisplayName,
      text: chatInput.trim(),
      at: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }),
    };
    setChatMessages((previous) => [...previous, nextMessage]);
    setChatInput('');
  }, [chatInput, roomDisplayName]);

  const togglePanel = useCallback((panel: 'chat' | 'participants') => {
    setActivePanel((previous) => (previous === panel ? null : panel));
    setMoreOpen(false);
    setReactionPickerOpen(false);
  }, []);

  const copyCurrentLink = useCallback(async () => {
    if (typeof window === 'undefined') return;
    try {
      await navigator.clipboard.writeText(window.location.href);
      pushSystemMessage('Link da reunião copiado para a área de transferência.');
    } catch {
      pushSystemMessage('Não foi possível copiar o link automaticamente.');
    }
  }, [pushSystemMessage]);

  return (
    <>
      <GlobalStyles />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      {preJoinOpen && (
        <div style={styles.preJoinOverlay}>
          <div style={styles.preJoinCard}>
            <div style={styles.preJoinTitle}>Antes de entrar na reunião</div>
            <div style={styles.preJoinText}>Escolha se deseja iniciar com microfone e câmera ligados.</div>
            <div
              style={{
                width: '100%',
                height: '180px',
                borderRadius: '10px',
                border: '1px solid rgba(55,138,221,0.2)',
                background: '#0b1322',
                overflow: 'hidden',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {camActive && localStream ? (
                <video
                  ref={preJoinVideoRef}
                  autoPlay
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <span style={{ color: '#8da4c4', fontSize: '12px' }}>Pré-visualização da câmera</span>
              )}
            </div>
            <div style={styles.preJoinRow}>
              <span style={{ fontSize: '13px' }}>Microfone</span>
              <button style={styles.toggleBtn} onClick={() => setMicActive((value) => !value)}>
                {micActive ? 'Ligado' : 'Desligado'}
              </button>
            </div>
            <div style={styles.preJoinRow}>
              <span style={{ fontSize: '13px' }}>Câmera</span>
              <button style={styles.toggleBtn} onClick={() => setCamActive((value) => !value)}>
                {camActive ? 'Ligada' : 'Desligada'}
              </button>
            </div>
            {mediaError && (
              <div style={{ color: '#f8b4b4', fontSize: '12px', marginBottom: '6px' }}>{mediaError}</div>
            )}
            <button style={styles.enterBtn} onClick={handleEnterMeeting}>
              Entrar na reunião
            </button>
            {joinError && (
              <div style={{ color: '#f8b4b4', fontSize: '12px', marginTop: '8px' }}>{joinError}</div>
            )}
          </div>
        </div>
      )}

      <div style={styles.roomWrap}>
        <div style={styles.topBar}>
          <div style={styles.topLeft}>
            <div style={styles.logoDot}>NP</div>
            <div>
              <div style={styles.meetingTitle}>{meetingTitle}</div>
              <div style={styles.meetingSub}>{meetingSub}</div>
            </div>
          </div>

          <div style={styles.topCenter}>
            <div style={styles.recDot} />
            <span style={styles.recLabel}>REC</span>
            <span style={styles.timer}>{formatTime(seconds)}</span>
          </div>

          <div style={styles.topRight}>
            <div style={styles.badgeParticipants}>
              <PeopleIcon style={{ width: '14px', height: '14px' }} />
              {participants.length} participantes
            </div>
            <div style={styles.aiChip}>
              <div style={styles.aiChipDot} />
              IA a transcrever
            </div>
          </div>
        </div>

        <div style={styles.mainArea}>
          <div style={styles.hostStage}>
            <div style={styles.hostVideoSim}>
              {inMeeting && micActive && <div style={styles.speakingRing} />}
              {leadParticipant?.videoTrack && !leadParticipant.isCameraOff ? (
                <LiveVideo
                  track={leadParticipant.videoTrack}
                  muted={leadParticipant.userId === roomUserId}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={styles.hostAvatarBig}>{leadParticipant?.initials || 'NP'}</div>
              )}
              {shareActive && inMeeting && <div style={styles.shareBadge}>A partilhar ecrã</div>}
              <div style={styles.reactionLayer}>
                {reactions.map((item) => (
                  <div key={item.id} style={{ ...styles.reactionItem, left: item.left }}>
                    {item.emoji}
                  </div>
                ))}
              </div>

              <div style={styles.qualityBadge}>
                <div style={styles.qualityBars}>
                  <div style={{ ...styles.bar, height: '4px' }} />
                  <div style={{ ...styles.bar, height: '7px' }} />
                  <div style={{ ...styles.bar, height: '10px' }} />
                  <div style={{ ...styles.bar, height: '12px' }} />
                </div>
                HD
              </div>

              <div style={styles.hostNameTag}>
                <span style={styles.hostBadge}>
                  {leadParticipant?.role === 'host' ? 'Anfitrião' : (leadParticipant?.role || roomRole)}
                </span>
                <span style={styles.hostName}>{leadParticipant?.name || roomDisplayName}</span>
                <MicIcon style={{ width: '14px', height: '14px', color: micActive ? '#378ADD' : '#f09595' }} />
              </div>
            </div>
          </div>

          <div style={styles.participantsSidebar}>
            <div style={styles.sidebarLabel}>Participantes</div>

            {participants.map((participant) => (
              <div
                key={participant.id}
                className="participant-tile"
                style={{
                  ...styles.participantTile,
                  ...(participant.isSpeaking ? { borderColor: 'rgba(55,138,221,0.6)' } : {}),
                }}
              >
                <div
                  style={{
                    ...styles.tileVideo,
                    background: participant.gradient || '#111827',
                    ...(participant.isSpeaking ? { background: 'rgba(24,95,165,0.08)' } : {}),
                  }}
                >
                  {participant.videoTrack && !participant.isCameraOff ? (
                    <LiveVideo
                      track={participant.videoTrack}
                      muted={participant.userId === roomUserId}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : participant.isCameraOff ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                      <div style={{ ...styles.tileAvatar, background: participant.color, width: '28px', height: '28px', fontSize: '10px' }}>
                        {participant.initials}
                      </div>
                      <span style={{ fontSize: '8px', color: '#8da4c4' }}>câmera off</span>
                    </div>
                  ) : (
                    <div style={{ ...styles.tileAvatar, background: participant.color }}>{participant.initials}</div>
                  )}
                </div>
                <div style={styles.tileInfo}>
                  <span style={styles.tileName}>{participant.name}</span>
                  <div style={styles.tileStatus}>
                    {participant.isMuted ? (
                      <span style={styles.mutedBadge}>muted</span>
                    ) : (
                      <MicIcon style={{ width: '11px', height: '11px', color: '#378ADD' }} />
                    )}
                  </div>
                </div>
              </div>
            ))}

            <button style={styles.inviteBox} onClick={copyCurrentLink}>
              <PlusIcon style={{ width: '12px', height: '12px' }} />
              Copiar link da sala
            </button>
          </div>

          {activePanel && (
            <aside style={styles.sidePanel}>
              <div style={styles.panelHeader}>
                <span>{activePanel === 'chat' ? 'Chat da reunião' : 'Participantes na sala'}</span>
                <button style={styles.panelCloseBtn} onClick={() => setActivePanel(null)}>
                  Fechar
                </button>
              </div>
              <div style={styles.panelBody}>
                {activePanel === 'chat' && (
                  <>
                    {chatMessages.length === 0 ? (
                      <div style={{ color: '#8da4c4', fontSize: '12px' }}>Sem mensagens ainda.</div>
                    ) : (
                      chatMessages.map((message) => (
                        <div key={message.id} style={styles.chatMsg}>
                          <div style={{ fontWeight: 600, fontSize: '11px', marginBottom: '3px' }}>
                            {message.author} • {message.at}
                          </div>
                          <div>{message.text}</div>
                        </div>
                      ))
                    )}
                  </>
                )}

                {activePanel === 'participants' && (
                  <>
                    {participants.map((participant) => (
                      <div key={`panel-${participant.id}`} style={styles.participantRow}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ ...styles.tileAvatar, background: participant.color }}>{participant.initials}</div>
                          <div>
                            <div style={{ color: '#f0f4ff', fontSize: '12px' }}>{participant.name}</div>
                            <div style={{ color: '#8da4c4', fontSize: '10px' }}>{participant.role || 'viewer'}</div>
                          </div>
                        </div>
                        {participant.isMuted ? (
                          <span style={styles.mutedBadge}>muted</span>
                        ) : (
                          <MicIcon style={{ width: '12px', height: '12px', color: '#378ADD' }} />
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
              {activePanel === 'chat' && (
                <div style={styles.chatComposer}>
                  <input
                    style={styles.chatInput}
                    value={chatInput}
                    onChange={(event) => setChatInput(event.target.value)}
                    placeholder="Escreve uma mensagem..."
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') handleSendChat();
                    }}
                  />
                  <button style={styles.toggleBtn} onClick={handleSendChat}>
                    Enviar
                  </button>
                </div>
              )}
            </aside>
          )}
        </div>

        <div style={styles.controlsBar}>
          <div style={styles.ctrlGroup}>
            <button
              className="ctrl-btn"
              onClick={toggleMic}
              style={{
                ...styles.ctrlBtn,
                ...(micActive ? styles.ctrlBtnActive : {}),
                ...(!inMeeting ? { opacity: 0.5, cursor: 'not-allowed' } : {}),
              }}
            >
              <MicIcon style={{ width: '16px', height: '16px' }} />
              <span className="ctrl-label" style={styles.ctrlLabel}>Microfone</span>
            </button>

            <button
              className="ctrl-btn"
              onClick={toggleCam}
              style={{
                ...styles.ctrlBtn,
                ...(camActive ? styles.ctrlBtnActive : {}),
                ...(!inMeeting ? { opacity: 0.5, cursor: 'not-allowed' } : {}),
              }}
            >
              <CameraIcon style={{ width: '16px', height: '16px' }} />
              <span className="ctrl-label" style={styles.ctrlLabel}>Câmera</span>
            </button>

            <button
              className="ctrl-btn"
              onClick={handleToggleScreenShare}
              style={{
                ...styles.ctrlBtn,
                ...(shareActive ? styles.ctrlBtnActive : {}),
                ...(!inMeeting ? { opacity: 0.5, cursor: 'not-allowed' } : {}),
              }}
            >
              <ScreenShareIcon style={{ width: '16px', height: '16px' }} />
              <span className="ctrl-label" style={styles.ctrlLabel}>Partilhar ecrã</span>
            </button>
          </div>

          <div style={styles.ctrlGroup}>
            <button
              className="ctrl-btn"
              onClick={() => togglePanel('chat')}
              style={{
                ...styles.ctrlBtn,
                ...(activePanel === 'chat' ? styles.ctrlBtnActive : {}),
              }}
            >
              <ChatIcon style={{ width: '16px', height: '16px' }} />
              <span className="ctrl-label" style={styles.ctrlLabel}>Chat</span>
            </button>

            <button
              className="ctrl-btn"
              onClick={() => togglePanel('participants')}
              style={{
                ...styles.ctrlBtn,
                ...(activePanel === 'participants' ? styles.ctrlBtnActive : {}),
              }}
            >
              <PeopleIcon style={{ width: '16px', height: '16px' }} />
              <span className="ctrl-label" style={styles.ctrlLabel}>Participantes</span>
            </button>

            <button
              className="ctrl-btn"
              style={{ ...styles.ctrlBtn, ...(!inMeeting ? { opacity: 0.5, cursor: 'not-allowed' } : {}) }}
              onClick={() => {
                if (!inMeeting) return;
                setReactionPickerOpen((previous) => !previous);
                setMoreOpen(false);
              }}
            >
              <ReactionIcon style={{ width: '16px', height: '16px' }} />
              <span className="ctrl-label" style={styles.ctrlLabel}>Reações</span>
            </button>

            <div style={styles.ctrlSeparator} />

            <button
              className="ctrl-btn"
              style={styles.ctrlBtn}
              onClick={() => {
                setMoreOpen((previous) => !previous);
                setReactionPickerOpen(false);
              }}
            >
              <MoreIcon style={{ width: '16px', height: '16px' }} />
              <span className="ctrl-label" style={styles.ctrlLabel}>Mais</span>
            </button>
          </div>

          {inMeeting ? (
            <button
              className="ctrl-btn ctrl-btn-end"
              onClick={handleEndCall}
              style={{ ...styles.ctrlBtn, ...styles.ctrlBtnEnd }}
            >
              <EndCallIcon style={{ width: '14px', height: '14px' }} />
              Terminar
            </button>
          ) : (
            <button
              className="ctrl-btn ctrl-btn-end"
              onClick={handleEnterMeeting}
              style={{ ...styles.ctrlBtn, ...styles.ctrlBtnEnd, background: '#185FA5', borderColor: '#378ADD' }}
            >
              <ScreenShareIcon style={{ width: '14px', height: '14px' }} />
              Entrar
            </button>
          )}
        </div>

        {reactionPickerOpen && (
          <div style={styles.reactionPicker}>
            {['👍', '👏', '❤️', '🔥'].map((emoji) => (
              <button
                key={emoji}
                style={styles.reactionPickBtn}
                onClick={() => {
                  emitReaction(emoji);
                  setReactionPickerOpen(false);
                }}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}

        {moreOpen && (
          <div style={styles.moreMenu}>
            <button style={styles.moreItem} onClick={copyCurrentLink}>Copiar link da reunião</button>
            <button style={styles.moreItem} onClick={() => togglePanel('participants')}>Ver lista completa de participantes</button>
            <button style={styles.moreItem} onClick={() => togglePanel('chat')}>Abrir chat da reunião</button>
            <button style={{ ...styles.moreItem, borderBottom: 'none', color: '#ffb3b3' }} onClick={handleEndCall}>
              Sair da reunião
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MeetingRoom;
