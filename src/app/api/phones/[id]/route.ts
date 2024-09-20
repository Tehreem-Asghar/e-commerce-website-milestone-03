import { NextResponse } from 'next/server';
import products from "@/mydb/mydb";


export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const phone = products.find((p) => p.id === parseInt(id));

  if (!phone) {
    return NextResponse.json({ message: 'Phone not found' }, { status: 404 });
  }

  return NextResponse.json(phone);
}
