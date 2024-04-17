import { Card, CardHeader, Divider, CardBody, Code } from "@nextui-org/react";

export default function ContactoPage() {
  return (
    <div className="flex justify-center">
      <Card className=" w-6/12">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md font-bold ">CONTACTO</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-2"></div>
        </CardBody>
        <Divider />
      </Card>
    </div>
  );
}
