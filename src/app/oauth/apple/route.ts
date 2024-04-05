import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  console.info(Array.from(form.entries()));
  // const json = await req.json();
  // console.info(json);
  redirect(
    `/oauth/apple/callback?body=${encodeURI(
      JSON.stringify(Array.from(form.entries()))
    )}`
  );
}
