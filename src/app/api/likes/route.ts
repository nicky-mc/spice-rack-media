import { NextResponse } from "next/server";
import { connect } from "@/utils/databaseConnection";

async function connectToDatabase() {
  const client = await connect();
  return client;
}

export async function GET() {
  const client = await connectToDatabase();
  const result = await client.query("SELECT * FROM likes");
  return NextResponse.json({ likes: result.rows });
}

export async function POST(request: Request) {
  const client = await connectToDatabase();
  const data = await request.json();
  const result = await client.query(
    "INSERT INTO likes (column1, column2) VALUES ($1, $2) RETURNING *",
    [data.column1, data.column2]
  );
  return NextResponse.json({ message: "Like created", data: result.rows[0] });
}

export async function DELETE(request: Request) {
  const client = await connectToDatabase();
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const result = await client.query(
    "DELETE FROM likes WHERE id = $1 RETURNING *",
    [id]
  );
  return NextResponse.json({ message: "Like deleted", id: result.rows[0].id });
}
