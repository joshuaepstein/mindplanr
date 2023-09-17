import type { IconNames } from '@mindplanr/ui/Icon';
import { motion } from 'framer-motion';
import { type FC } from 'react';

import { Button } from '@mindplanr/ui/button';

import { ActiveLink } from '@mindplanr/ui/ActiveLink';
import { Icon } from '@mindplanr/ui/Icon';

type SideMenuLinkProps = {
  href: string;
  icon: IconNames;
  label: string;
  isSideMenuExpanded: boolean;
};

export const SideMenuLink: FC<SideMenuLinkProps> = ({
  href,
  icon,
  label,
  isSideMenuExpanded = true,
}) => (
  <li>
    <Button asChild className="w-full">
      <ActiveLink href={href} activeClassName="text-zinc-900 dark:text-zinc-50">
        <Icon name={icon} className="min-w-max" />
        <motion.span
          animate={{
            opacity: isSideMenuExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.span>
      </ActiveLink>
    </Button>
  </li>
);
