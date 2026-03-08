
export enum IntegrityStatus {
  SECURE = 'SECURE',
  CORRUPTED = 'CORRUPTED',
  SIGNAL_LOSS = 'SIGNAL LOSS',
  TAMPERED = 'TAMPERED'
}

export interface CCTVFeed {
  id: string;
  cameraName: string;
  timestamp: string;
  status: IntegrityStatus;
  frameLoss: number;
  location: string;
  lastPacket: string;
  videoUrl: string;
}

export interface TimelineEvent {
  time: string;
  event: string;
  type: 'system' | 'alert' | 'user';
  description: string;
}

export interface QueryResponse {
  query: string;
  response: string;
  timestamp: string;
}
