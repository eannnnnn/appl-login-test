import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  redirect(`/oauth/apple/callback?body=${JSON.stringify(await req.json())}`);
}
