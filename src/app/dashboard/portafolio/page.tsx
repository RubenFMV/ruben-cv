import { Spinner } from "@nextui-org/react";

export default function PortafolioPage() {
  return (
    <div>
      <p className="text-center text-3xl">Trabajando...</p>

      <div className=" flex justify-center mt-5">
        <Spinner className="h-48" />
      </div>
    </div>
  );
}
