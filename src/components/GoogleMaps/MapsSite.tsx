"use client";
import { GoogleMap } from "@react-google-maps/api";
import { use, useCallback, useMemo, useRef } from "react";

type MapOptions = google.maps.MapOptions;
type LatLngLiteral = google.maps.LatLngLiteral;

export default function MapsSite() {
  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 19.363845550500574, lng: -99.07244538094683 }),
    []
  );
  const options = useMemo<MapOptions>(() => ({ disableDefaultUI: true }), []);
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  const style = {
    height: "100vh",
    width: "100%",
  };

  return (
    <div style={style}>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="maps-class"
        options={options}
        onLoad={onLoad}
      ></GoogleMap>
    </div>
  );
}
