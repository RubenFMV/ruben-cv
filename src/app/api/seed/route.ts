import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  //   const todo = await prisma.todo.create({
  //     data: {
  //       description: "hacer la tarea",
  //     },
  //   });

  //   console.log(todo);

  await prisma.todo.createMany({
    data: [
      {
        description: "hacer la tarea",
      },
      {
        description: "hacer otra tarea",
      },
      {
        description: "Ir de compras",
      },
    ],
  });

  return NextResponse.json({
    Response: "creados",
  });
}
