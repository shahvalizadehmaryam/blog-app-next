export function middleware(request) {
  const url = request.url;
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/profile")) {
    // set cookie refresh and access token
  }
}

export const config = {
  matcher: "/profile/:path*",
};
