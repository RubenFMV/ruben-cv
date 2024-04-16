import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
  ListboxSection,
  ListboxItem,
  Code,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import imagen from "/public/img/RubenMunoz.jpeg";

interface ExperienceItemProps {
  id: number;
  company: string;
  icono: React.ReactNode;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  link: string;
}

export const ExperienceItem = ({
  company,
  description,
  endDate,
  id,
  icono,
  link,
  position,
  startDate,
}: ExperienceItemProps) => {
  return (
    <>
      <Card>
        <CardHeader className="flex gap-3">
          <div className="rounded-sm text-4xl me-2 text-primary-300">
            {icono}
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-md font-semibold">{company}</p>
            <p className="text-small text-default-500">{position}</p>
            <p className="text-small text-default-500">
              Inicio: {startDate} - Termino: {endDate}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          {description.map((item, index) => (
            <p className=" mb-3 text-justify text-small" key={index}>
              {item}
            </p>
          ))}
        </CardBody>
        <Divider />
        <CardFooter>
          <Link href="#">Portafolio</Link>
        </CardFooter>
      </Card>
    </>
  );
};
