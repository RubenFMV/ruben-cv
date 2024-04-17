import { Spinner } from "@nextui-org/react";
import { MapsGrid } from "../../../components/GoogleMaps/MapsGrid";

export default function GooglePage() {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <p className="text-3xl">Trabajando...</p>
        <Spinner />
      </div>
      <div className=" flex justify-center mt-5">
        <MapsGrid></MapsGrid>
      </div>
    </div>
  );
}
