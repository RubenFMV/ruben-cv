import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // se puede ocupar + o Number para hacer un casteo a numero
  const take = +(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  //isNaN valida si el parametro es un numero
  if (isNaN(take)) {
    return NextResponse.json(
      { message: "take tiene que ser número" },
      { status: 400 }
    );
  }
  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "skip tiene que ser número" },
      { status: 400 }
    );
  }

  //Lo parametros que se envian son: Take= numero de elementos a tomar
  // skip: elementos que tiene que saltar y no va a retornar
  const todos = await prisma.todo.findMany({
    take,
    skip,
  });

  //   console.log(todos);

  return NextResponse.json(todos);
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});
export async function POST(request: Request) {
  try {
    //desestructuramos los elementos que nos importan para
    //que solo se guarden en base de datos
    const { description, complete } = await postSchema.validate(
      await request.json()
    );
    const todo = await prisma.todo.create({ data: { description, complete } });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
