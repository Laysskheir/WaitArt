import { auth } from "./auth";

export default auth((req) => {
  // const { nextUrl } = req;
  // const isLoggedIn = !!req.auth;
  // const DEFAULT_LOGIN_REDIRECT = process.env.DEFAULT_LOGIN_REDIRECT!;

  // if (isLoggedIn) {
  //   return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  // }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
