import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { cn } from '@mindplanr/utils/cn';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    activeClassName?: string;
  };

const ActiveLink = forwardRef<HTMLAnchorElement, ActiveLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const router = usePathname();
    const active = href === router;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, active && activeClassName)}
        {...props}
      />
    );
  },
);

ActiveLink.displayName = 'ActiveLink';

export { ActiveLink };
