"use client";

import {
  APIProvider,
  AdvancedMarker,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";

declare global {
  interface ImportMeta {
    env: Record<string, string>;
  }
}

const mapStyles = {
  height: "100vh",
  width: "100%",
};

const lugaresVisitadors = [
  { lat: 19.363845550500574, lng: -99.07244538094683 },
  { lat: 19.44086457325696, lng: -99.20470010351339 },
  { lat: 19.43395776847618, lng: -99.1462870746778 },
  { lat: 20.679228255438563, lng: -88.56833208381535 },
  { lat: 16.850711630765424, lng: -99.90267307217813 },
];

interface Point {
  lat: number;
  lng: number;
}

interface MarkersProps {
  points: Point[];
}

const Markers = ({ points }: MarkersProps) => {
  return (
    <>
      {points.map((point, index) => (
        <AdvancedMarker key={index} position={point}></AdvancedMarker>
      ))}
    </>
  );
};

export const MapsGrid = () => {
  const postion = {
    lat: 19.363845550500574,
    lng: -99.07244538094683,
  };
  return (
    <>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_APY_KEY ?? " "}>
        <div style={mapStyles}>
          <Map
            zoom={8}
            center={postion}
            mapId={process.env.NEXT_PUBLIC_GOOGLE_APY_KEY}>
            <Markers points={lugaresVisitadors}></Markers>
          </Map>
        </div>
      </APIProvider>
    </>
  );
};

//  The  APIProvider  component is used to provide the API key to the  Map  component.
//  The  Map  component is the main component that renders the Google Maps.
//  The  AdvancedMarker  component is used to add a marker to the map.
//  The  Pin  component is used to customize the marker.
//  The  mapStyles  object is used to style the map.
//  The  postion  object is used to set the initial position of the map.
//  The  lugaresVisitadors  array is used to store the coordinates of the places to be visited.
//  The  MapsGrid  component is the main component that renders the map.
//  The  MapsGrid  component renders the  APIProvider  component, the  Map  component, the  AdvancedMarker  component, and the  Pin  component.
//  The  APIProvider  component provides the API key to the  Map  component.
//  The  Map  component renders the Google Maps.
//  The  AdvancedMarker  component adds a marker to the map.
//  The  Pin  component customizes the marker.
//  The  mapStyles  object styles the map.
//  The  postion  object sets the initial position of the map.
//  The  lugaresVisitadors  array stores the coordinates of the places to be visited.
//  Step 4: Run the Application
//  To run the application, run the following command:
//  npm run dev

//  The application will be available at  http://localhost:3000/ .
//  Conclusion
//  By following the steps outlined in this tutorial, you should now have a good understanding of how to integrate Google Maps into a Next.js application. You should also be able to customize the map and add markers to it.
//  Happy coding!
//  Peer Review Contributions by:  Saiharsha Balasubramaniam
