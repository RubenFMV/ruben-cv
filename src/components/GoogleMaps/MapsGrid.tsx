"use client";
import { LoadScript, GoogleMap } from "@react-google-maps/api";
import { GoogleApiWrapper, Map } from "google-maps-react";
import React, { useEffect, useState } from "react";

declare global {
  interface ImportMeta {
    env: Record<string, string>;
  }
}

const mapStyles = {
  height: "100vh",
  width: "100%",
};

export const MapsGrid = () => {
  //   console.log(process.env.GOOGLE_MAPS_API_KEY);
  //   const ApyKey = process.env.GOOGLE_MAPS_API_KEY;

  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoad(true);
    }
  }, []);

  return (
    <div>
      {isLoad && (
        <Map
          google={window.google}
          zoom={17}
          style={mapStyles}
          initialCenter={{
            lat: 19.020145856138136,
            lng: -98.24006775697993,
          }}
        ></Map>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY ?? "",
})(MapsGrid);
