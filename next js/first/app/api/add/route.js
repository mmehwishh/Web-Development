import { NextResponse } from "next/server";
export async function POST(request) {
  
  const body = await request.json();

  // Do something with body
  console.log("Received data:", body);
  return NextResponse.json({name:"harry",body})
  
}
