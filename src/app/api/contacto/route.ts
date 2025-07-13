import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { nombre, email, mensaje } = await req.json();
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }
    const nuevoMensaje = await prisma.message.create({
      data: { nombre, email, mensaje },
    });
    return NextResponse.json({ ok: true, message: nuevoMensaje });
  } catch (error) {
    return NextResponse.json({ error: "Error al guardar el mensaje" }, { status: 500 });
  }
}
