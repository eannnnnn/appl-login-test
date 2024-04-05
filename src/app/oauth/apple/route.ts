import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  
  const json = await req.json();
  console.info(json);
  redirect(`/oauth/apple/callback?body=${JSON.stringify(json)}`);
}
