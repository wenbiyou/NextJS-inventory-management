// app/handler/[...stack]/page.tsx
import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";

export default function HandlerPage(props: unknown) {
  // 删掉 fullPage，只保留 app
  return <StackHandler app={stackServerApp} fullPage routeProps={props} />;
}

// 必须加这一行，解决脚本警告问题
export const runtime = "edge";
export const dynamic = "force-dynamic";
