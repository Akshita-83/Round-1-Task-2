
import { CCTVFeed, IntegrityStatus, TimelineEvent } from './types';

export const COLORS = {
  bg: '#19171b',      // Charcoal Board
  primary: '#75020f', // Crimson Accent
  secondary: '#51080d', // Maroon Detail
  shadow: '#111012',
};

// Expanded zones to accommodate more variety
const ZONES = [
  'LAB 7 - ENTRANCE', 
  'LAB 7 - SERVER RACK', 
  'LAB 7 - CORRIDOR', 
  'LAB 7 - RECEPTION',
  'LAB 7 - LOADING DOCK',
  'LAB 7 - VENTILATION'
];

const TIME_STEPS = ['21:10', '21:40'];

// Original Video URLs - Added 2 more public samples
// Placeholder Evidence Links for participants
const VIDEO_SOURCES = [
  "https://evidence-vault.internal/case-24-11/cam-alpha-2100.mp4",
  "https://evidence-vault.internal/case-24-11/cam-beta-2120.mp4",
  "https://evidence-vault.internal/case-24-11/cam-gamma-2140.mp4",
  "https://evidence-vault.internal/case-24-11/cam-delta-2200.mp4",
  "https://evidence-vault.internal/case-24-11/cam-epsilon-2220.mp4"
];

export const MOCK_FEEDS: CCTVFeed[] = [];

ZONES.forEach((zone, zIdx) => {
  TIME_STEPS.forEach((time, tIdx) => {
    MOCK_FEEDS.push({
      id: `EX-${zIdx + 1}${tIdx + 1}`,
      cameraName: zone,
      timestamp: `2024-11-24 ${time}:00`,
      status: IntegrityStatus.SECURE,
      frameLoss: Math.random() * 5,
      location: zone,
      lastPacket: '0.02s',
      // Assigns a unique video based on the zone index
      videoUrl: VIDEO_SOURCES[zIdx % VIDEO_SOURCES.length]
    });
  });
});

export const MOCK_TIMELINE: TimelineEvent[] = [
  { time: '21:00:00', event: 'BOOT', type: 'system', description: '' },
  { time: '21:15:40', event: 'VPN_IN', type: 'user', description: '' },
  { time: '21:45:12', event: 'VPN_OUT', type: 'user', description: '' },
  { time: '22:05:00', event: 'SYNC', type: 'system', description: '' },
  { time: '22:30:00', event: 'END', type: 'system', description: '' },
];
