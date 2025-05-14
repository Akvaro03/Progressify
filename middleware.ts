// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define rutas públicas
const PUBLIC_PATHS = ['/auth']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Permitir rutas públicas
  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next()
  }

  // Acá iría tu lógica para verificar si el usuario está logueado
  const isLoggedIn = Boolean(request.cookies.get('token')) // Cambia esto según tu auth

  if (!isLoggedIn) {
    const loginUrl = new URL('/auth', request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
// Este middleware se ejecutará en todas las rutas, excepto en las que comienzan con _next/static, _next/image y favicon.ico