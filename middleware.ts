import NextAuth from "next-auth";
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from "@/routes";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  // const { nextUrl } = req;
  // const isAuthenticated = !!req.auth;

  // // Protect all routes except public routes and the root path
  // if (
  //   !isAuthenticated &&
  //   !PUBLIC_ROUTES.includes(nextUrl.pathname) &&
  //   nextUrl.pathname !== ROOT
  // ) {
  //   return Response.redirect(new URL(ROOT, nextUrl)); // Redirect to login on non-public, non-root paths
  // }

  // // If authenticated, handle redirection based on specific logic (optional)
  // if (isAuthenticated) {
  //   return Response.redirect(new URL("/dashboard", nextUrl));
  //   // Implement your custom logic for redirecting authenticated users,
  //   // considering factors like previous URL, user role, etc.
  //   // You can remove this block if no specific redirection behavior is needed.
  // }

  // // No redirection needed, explicitly return void
  // return;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
