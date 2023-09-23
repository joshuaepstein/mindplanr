'use client';
import Logo from '@/components/shared/icons/logo';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import { buttonVariants } from '@mindplanr/ui/button';
import { cn } from '@mindplanr/utils/cn';
import { SHOW_BACKGROUND_SEGMENTS } from '@mindplanr/utils/constants';
import useScroll from '@mindplanr/utils/hooks/use-scroll';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';

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
  const scrolled = useScroll(80);
  const selectedLayout = useSelectedLayoutSegment();
  const allLayouts = useSelectedLayoutSegments();

  const session = useSession();

  if (allLayouts.find((l) => l === '(auth)')) {
    return null;
  }

  return (
    <div
      className={cn(`sticky inset-x-0 top-0 z-30 w-full transition-all`, {
        'border-b border-zinc-200 bg-white/75 backdrop-blur-lg': scrolled,
        'border-b border-zinc-200 bg-white':
          selectedLayout && !SHOW_BACKGROUND_SEGMENTS.has(selectedLayout),
      })}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href={`/`} className="flex items-center justify-start">
              <Logo variation="outline" className="peer h-8 text-primary" />
              {/* <LogoType className="ml-4 -translate-x-2 text-primary opacity-0 transition ease-out peer-hover:translate-x-0 peer-hover:opacity-100" /> */}
            </Link>
          </div>

          <div className="hidden items-center space-x-3 lg:flex">
            {navItems.map(({ name, slug }) => (
              <Link
                id={`nav-${slug}`}
                key={slug}
                href={`/${slug}`}
                className={cn(
                  'z-10 rounded-full px-4 py-1.5 text-sm font-medium capitalize text-zinc-500 transition-colors ease-out hover:text-black',
                  {
                    'text-black': selectedLayout === slug,
                  },
                )}
              >
                {name}
              </Link>
            ))}
            {(!session && (
              <>
                <Link
                  href={`/app/login`}
                  className="animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-zinc-500 transition-colors ease-out hover:text-black"
                >
                  Log in
                </Link>
                <Link
                  href={`/app/register`}
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
            )) || (
              <>
                <Link
                  href={`/app`}
                  className={cn(
                    buttonVariants({
                      variant: 'primary',
                      scale: 'normal',
                    }),
                    'rounded-full',
                  )}
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
