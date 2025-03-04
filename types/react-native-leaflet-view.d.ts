declare module 'react-native-leaflet-view' {
  import React from 'react';

  export type WebviewLeafletMessagePayload = any;

  export interface WebviewLeafletMessage {
    event?: string;
    payload?: WebviewLeafletMessagePayload;
  }

  export interface Marker {
    id: string;
    position: {
      lat: number;
      lng: number;
    };
    icon: string;
    size: number[];
  }

  export interface LeafletViewProps {
    mapCenterPosition: {
      lat: number;
      lng: number;
    };
    zoom: number;
    markers: Marker[];
    onMessageReceived?: (message: WebviewLeafletMessage) => void;
  }

  export class LeafletView extends React.Component<LeafletViewProps> {}
}
