import { Spinner } from "@nextui-org/react";
import { MapsGrid } from "../../../components/GoogleMaps/MapsGrid";

export default function GooglePage() {
  return (
    <div>
      <p className="text-center text-3xl">Trabajando...</p>

      <div className=" flex justify-center mt-5">
        {/* <Spinner className="h-48" /> */}
        <MapsGrid></MapsGrid>
      </div>
    </div>
  );
}
