'use client';

import Logo from '@/components/shared/icons/logo';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import { buttonVariants } from '@mindplanr/ui/button';
import { cn } from '@mindplanr/utils/cn';
import {
  APP_DOMAIN,
  SHOW_BACKGROUND_SEGMENTS,
} from '@mindplanr/utils/constants';
import useScroll from '@mindplanr/utils/hooks/use-scroll';
import va from '@vercel/analytics';
import Link from 'next/link';
import { useParams, useSelectedLayoutSegment } from 'next/navigation';

export const navItems = [
  {
    name: 'features',
    slug: 'features',
  },
  {
    name: 'Changelog',
    slug: 'changelog',
  },
];

export default function Nav() {
  const { domain = 'mindplanr.com' } = useParams() as { domain: string };
  const scrolled = useScroll(80);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(`sticky inset-x-0 top-0 z-30 w-full transition-all`, {
        'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
        'border-b border-gray-200 bg-white':
          selectedLayout && !SHOW_BACKGROUND_SEGMENTS.has(selectedLayout),
      })}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href={domain === 'mindplanr.com' ? '/' : `https://mindplanr.com`}
              {...(domain !== 'mindplanr.com' && {
                onClick: () => {
                  va.track('Referred from custom domain', {
                    domain,
                    medium: 'logo',
                  });
                },
              })}
              className="flex items-center justify-start"
            >
              <Logo variation="outline" className="peer h-8 text-primary" />
              {/* <LogoType className="ml-4 -translate-x-2 text-primary opacity-0 transition ease-out peer-hover:translate-x-0 peer-hover:opacity-100" /> */}
            </Link>
          </div>

          <div className="hidden items-center space-x-3 lg:flex">
            {navItems.map(({ name, slug }) => (
              <Link
                id={`nav-${slug}`}
                key={slug}
                href={
                  domain === 'mindplanr.com'
                    ? `/${slug}`
                    : `https://mindplanr.com/${slug}`
                }
                {...(domain !== 'mindplanr.com' && {
                  onClick: () => {
                    va.track('Referred from custom domain', {
                      domain,
                      medium: `navbar item (${slug})`,
                    });
                  },
                })}
                className={cn(
                  'z-10 rounded-full px-4 py-1.5 text-sm font-medium capitalize text-gray-500 transition-colors ease-out hover:text-black',
                  {
                    'text-black': selectedLayout === slug,
                  },
                )}
              >
                {name}
              </Link>
            ))}
            <>
              <Link
                href={`${APP_DOMAIN}/login`}
                {...(domain !== 'dub.sh' && {
                  onClick: () => {
                    va.track('Referred from custom domain', {
                      domain,
                      medium: `navbar item (login)`,
                    });
                  },
                })}
                className="animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
              >
                Log in
              </Link>
              <Link
                href={`${APP_DOMAIN}/register`}
                {...(domain !== 'mindplanr.com' && {
                  onClick: () => {
                    va.track('Referred from custom domain', {
                      domain,
                      medium: `navbar item (signup)`,
                    });
                  },
                })}
                className={cn(
                  buttonVariants({
                    variant: 'primary',
                    scale: 'normal',
                  }),
                  'rounded-full',
                )}
              >
                Sign Up
              </Link>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
