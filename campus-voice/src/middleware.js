import { withAuth } from "next-auth/middleware"
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    if(req.nextUrl.pathname.split('/').pop() === "Dashboard"){
        const role = req.nextauth.token.role.replace(req.nextauth.token.role.charAt(0), req.nextauth.token.role.charAt(0).toUpperCase());
        return NextResponse.rewrite(new URL(`/Dashboard/${role}`,req.url));
    }

    if(req.nextauth.token.role === "student" && !req.nextUrl.pathname.startsWith('/Dashboard/Student' || '/Student')){
        return NextResponse.rewrite(new URL('/Unauthorized',req.url));
    }
    if(req.nextauth.token.role === "resolver" && !req.nextUrl.pathname.startsWith('/Dashboard/Resolver' || '/Resolver')){
        return NextResponse.rewrite(new URL('/Unauthorized',req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "student" || token?.role==="resolver",
    },
  }
)



export const config = { 
    matcher: ["/Dashboard/:path*","/Resolver/:path*","/Student/:path*"] 
}