import { Card, CardHeader, Divider, CardBody, Code } from "@nextui-org/react";
import React from "react";

export const Aside = () => {
  return (
    <>
      <Card>
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Lenguajes</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-2">
            <Code color="secondary">JavaScipt</Code>
            <Code color="primary">HTML</Code>
            <Code color="primary">CSS</Code>
            <Code color="secondary">Java</Code>
            <Code color="secondary">SQL</Code>
            <Code color="default">NoSQL</Code>
            <Code color="default">XML</Code>
            <Code color="default">UML</Code>
          </div>
        </CardBody>
        <Divider />
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Librerías y frameworks</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-2">
            <Code color="secondary">React</Code>
            <Code color="secondary">Next.js</Code>
            <Code color="primary">Redux</Code>
            <Code color="primary">Node</Code>
            <Code color="primary">NexUI</Code>
            <Code color="primary">Flowbite</Code>
            <Code color="primary">Bootstrap</Code>
            <Code color="primary">Tailwind</Code>
            <Code color="secondary">SpringBoot</Code>
            <Code color="default">Hibernate</Code>
            <Code color="default">Maven</Code>
          </div>
        </CardBody>
        <Divider />
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Otras herramientas</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-2">
            <Code color="primary">Git</Code>
            <Code color="primary">Github</Code>
            <Code color="primary">Firebase</Code>
            <Code color="secondary">RESTapi</Code>
            <Code color="primary">MySQL</Code>
            <Code color="primary">Cpanel</Code>
            <Code color="primary">Asana</Code>
            <Code color="primary">GANT</Code>
            <Code color="primary">KANBAN</Code>
            <Code color="primary">LucidChart</Code>
            <Code color="primary">Office</Code>
            <Code color="primary">WordPress</Code>
          </div>
        </CardBody>
        <Divider />
      </Card>
    </>
  );
};
