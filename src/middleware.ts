
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });


  console.log('Middleware token:', token);

  const { pathname } = request.nextUrl;

  const isServiceProviderRoute = pathname.startsWith('/serviceProvider');
  const isCustomerRoute = pathname.startsWith('/customer/');


  const protectedRoutes = isServiceProviderRoute || isCustomerRoute;
  if (protectedRoutes && !token) {
    const loginUrl = new URL('/sign-in', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }


  if (token) {
    const userRole = token.role as string;

    if (userRole) {
     
      if (isCustomerRoute && userRole === 'serviceprovider') {
        return NextResponse.redirect(new URL('/serviceProvider/dashboard', request.url));
      }

      if (isServiceProviderRoute && userRole === 'customer') {
        return NextResponse.redirect(new URL(`/customer/dashboard/${token.id}`, request.url)); 
      }
    }
  }


  return NextResponse.next();
}


export const config = {
  matcher: [
    '/customer/:path*',
    '/serviceProvider/:path*',
  ],
};