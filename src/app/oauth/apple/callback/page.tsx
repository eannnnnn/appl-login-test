"use client";

import { useSearchParams } from "next/navigation";
export const dynamic = "force-dynamic";
export default function Page() {
  const searchParams = useSearchParams();

  return <>{searchParams.get("body")}</>;
}
