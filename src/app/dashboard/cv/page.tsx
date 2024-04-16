import { Aside } from "@/components/cv/Aside";
import { ExperienceItem } from "@/components/cv/ExperienceItem";
import { Button } from "@nextui-org/react";
import { FaBeer, FaDatabase, FaIndustry, FaLaptopCode } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";

const CVList = [
  {
    id: 1,
    company: "Grupo Biomédico Azteca SA de CV",
    icono: <FaIndustry />,
    position: "Programador",
    startDate: "2021-Junio",
    endDate: "Actualmente",
    description: [
      "1. Análisis de procesos y diseño de diagramas UML, así como base de datos para la empresa. Modelos relacionales ( MySQL) y NoSQL (Firebase)",
      "2. Desarrollo, pruebas e implementación de sistemas con usuarios finales: React, Node.js, Firebase, SpringBoot, Hibernate, Maven, API RESTful",
      "3. Desarrollo de página y catálogo web: REACT, NEXT.JS REDUX, HTML, CSS, JAVASCRIPT, Bootstrap,",
      "4. Control de versiones de Git y GitHub",
      "5. Gestión de servidor de la empresa: Cpanel, dominios, correos, electrónicos, actualizaciones mediante FTP",
      "6. Mantenimiento a computadoras de la oficina",
    ],
    link: "",
  },
  {
    id: 2,
    company: "Freelancer",
    icono: <FaLaptopCode />,
    position: "Programador",
    startDate: "2018-Junio",
    endDate: "2021-Junio",
    description: [
      "1. Desarrollo de sitios web con herramientas: HTM, JAVASCRIPT, CSS, Bootstrap, WordPress",
      "2. Manejo de C Panel, dominios, correos electrónicos, actualizaciones mediante FTP",
    ],
    link: "",
  },
  {
    id: 3,
    company: "TSJCDMX (servicio social)",
    icono: <FaDatabase />,
    position: "Programador",
    startDate: "2019-Enero",
    endDate: "2019-Junio",
    description: [
      "1. Diseño (UML) y desarrollo de base de datos (SQL) para la gestión de datos personales en el TSJ CDMX en la materia familiar oral.",
      "2. Desarrollo de backend y front end con Java, Spring Boot, PrimeFaces, Hibernate, Tomcat.",
    ],
    link: "",
  },
];

export default function CVPage() {
  return (
    <>
      <div className="flex flex-wrap  justify-around ">
        <div className="w-7/12 flex flex-col gap-4">
          {CVList.map((item) => (
            <ExperienceItem {...item} />
          ))}
        </div>
        <div className="w-4/12">
          <Aside />
        </div>
      </div>
    </>
  );
}
