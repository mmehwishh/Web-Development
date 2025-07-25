import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    return NextResponse.json({message:"Hello from redirecting"})
  return NextResponse.redirect(new URL('/', request.url))
}
 
export const config = {
  matcher: '/About/:path*',
}