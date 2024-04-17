"use client";
import { Spinner } from "@nextui-org/react";
import { useLoadScript } from "@react-google-maps/api";
import MapsSite from "@/components/GoogleMaps/MapsSite";

declare global {
  interface ImportMeta {
    env: Record<string, string>;
  }
}

export default function GooglePage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_APY_KEY ?? " ",
    libraries: ["places"],
  });

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <p className="text-3xl">Trabajando...</p>
      </div>
      <div className=" flex justify-center mt-5">
        {!isLoaded ? <Spinner /> : <MapsSite />}
      </div>
    </div>
  );
}
