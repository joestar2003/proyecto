import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  const { nombre, email, password } = await req.json();
  if (!nombre || !email || !password) {
    return NextResponse.json({ error: 'Faltan campos' }, { status: 400 });
  }
  const existe = await prisma.user.findUnique({ where: { email } });
  if (existe) {
    return NextResponse.json({ error: 'El email ya está registrado' }, { status: 400 });
  }
  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { nombre, email, password: hash },
  });
  return NextResponse.json({ ok: true, user: { id: user.id, nombre: user.nombre, email: user.email } });
}
