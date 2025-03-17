import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export default async function middleware(request: NextRequest){
    const pathname = request.nextUrl.pathname
    const sessionCookie = getSessionCookie(request)

    if(sessionCookie && ( pathname === '/signup' || pathname === '/signin' ) )
        return NextResponse.redirect(new URL('/', request.url))
    
    if(!sessionCookie && pathname === '/')
        return NextResponse.redirect(new URL('/signin', request.url))

    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/signupsuccess', '/signup', '/signin']
}