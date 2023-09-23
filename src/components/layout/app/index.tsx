'use client';
import { motion } from 'framer-motion';
import type { FC, PropsWithChildren } from 'react';

import { Brand } from '@mindplanr/ui/brand';
import useLocalStorage from '@mindplanr/utils/hooks/use-local-storage';
import { DashboardNavbar } from './Navbar';
import { SideMenuLink } from './SideMenuLink';
import { SideMenuModules } from './SideMenuModules';
import { pageLinks } from './static-data';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  // const [isSideMenuExpanded, setSideMenuExpanded] = useState(true);
  const [isSideMenuExpanded, setSideMenuExpanded] = useLocalStorage(
    'isSideMenuExpanded',
    true,
  );

  return (
    <div className="flex h-screen gap-6 py-6 pl-6">
      {/* Side Menu */}
      <motion.aside
        className="flex flex-col justify-between"
        animate={{ width: isSideMenuExpanded ? '181px' : '51px' }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <Brand className="ml-4" size={35} />

          <ul className="mt-8 flex flex-col gap-2">
            {pageLinks.map((link) => (
              <SideMenuLink
                key={link.href}
                {...link}
                isSideMenuExpanded={isSideMenuExpanded}
              />
            ))}
          </ul>
          <motion.div
            animate={{ opacity: isSideMenuExpanded ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <SideMenuModules />
          </motion.div>
        </div>
      </motion.aside>

      <div className="dark:bg-zinc-900 z-50 flex flex-1 flex-col overflow-scroll rounded-l-2xl border border-zinc-200 bg-zinc-50 px-6 py-4 shadow-small dark:border-zinc-800">
        {/* Top Navigation Bar */}
        <DashboardNavbar
          setSideMenuExpanded={() => setSideMenuExpanded(!isSideMenuExpanded)}
          isSideMenuExpanded={isSideMenuExpanded}
        />

        {/* Page Content */}
        <div className="flex h-full w-full overflow-scroll px-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export { DashboardLayout };
