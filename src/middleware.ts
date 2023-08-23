import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { HOME_HOSTNAMES, HOME_HOSTNAMES_DEV } from './lib/constants';
import { parse } from './lib/middleware/utils';

export const config = {
  matcher: [
    /**
     * Match all paths except for
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_proxy, /_auth/ (special pages for OG tags proxying and password protection)
     * 4. /_static (inside /public)
     * 5. /_vercel (vercel internals)
     * 6. /favicon.ico, /sitemap.xml (static files)
     */
    '/((?!api|_next|_proxy|_auth|_static|_vercel|favicon.ico|sitemap.xml).*)',
  ],
};

const appRoutes = {
  static: '/_static',
};
export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { domain, path, key } = parse(req);

  for (const [key_, value] of Object.entries(appRoutes)) {
    if (
      domain === `${key_}.mindplanr.com` ||
      domain === `${key_}.localhost:3000`
    ) {
      console.log('redirecting to', `${value}${path}`);
      return NextResponse.rewrite(new URL(`${value}${path}`, req.url));
    }
  }

  if (HOME_HOSTNAMES_DEV.has(domain)) {
    return NextResponse.rewrite(new URL(`/mindplanr.com${path}`, req.url));
  }

  if (HOME_HOSTNAMES.has(domain)) {
    return NextResponse.rewrite(new URL(`/mindplanr.com${path}`, req.url));
  }

  return NextResponse.next();
}
