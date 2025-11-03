import { NextResponse } from "next/server";

export function middleware(req) {
  if (!req.nextUrl.pathname.startsWith("/admin")) return NextResponse.next();

  const auth = req.headers.get("authorization");
  const user = process.env.ADMIN_USER || "admin";
  const pass = process.env.ADMIN_PASS || "secret123";

  if (!auth?.startsWith("Basic ")) {
    return new NextResponse("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic realm=\"Secure Area\"" },
    });
  }
  const [, b64] = auth.split(" ");
  const [u, p] = Buffer.from(b64, "base64").toString().split(":");
  if (u === user && p === pass) return NextResponse.next();

  return new NextResponse("Forbidden", { status: 403 });
}

export const config = { matcher: "/admin/:path*" };
