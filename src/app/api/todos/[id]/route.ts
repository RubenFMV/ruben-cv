import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

interface Arguments {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | null> => {
  return await prisma.todo.findFirst({ where: { id } });
};

export async function GET(request: Request, { params }: Arguments) {
  //   console.log(params);

  const todo = await getTodo(params.id);

  if (todo == null)
    return NextResponse.json(
      { message: "elemento no encontrado " },
      { status: 404 }
    );

  //   console.log(todo);

  return NextResponse.json(todo);
}

const putSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional(),
});
export async function PUT(request: Request, { params }: Arguments) {
  const todo = await getTodo(params.id);

  if (todo == null)
    return NextResponse.json(
      { message: "elemento no encontrado " },
      { status: 404 }
    );

  try {
    const { description, complete } = await putSchema.validate(
      await request.json()
    );
    // console.log(description, complete);

    const updated = await prisma.todo.update({
      where: { id: params.id },
      data: {
        description,
        complete,
      },
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }

  //   console.log(todo);
}
