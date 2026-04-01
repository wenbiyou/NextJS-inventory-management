// app/handler/[...stack]/page.tsx
import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";

export default function HandlerPage() {
  // 删掉 fullPage，只保留 app
  return <StackHandler app={stackServerApp} />;
}

export const dynamic = "force-dynamic";
