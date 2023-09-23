import { useRouter } from 'next/navigation';
import type { Dispatch, FC, SetStateAction } from 'react';

import { Button } from '@mindplanr/ui/button';

import { Icon } from '@mindplanr/ui/Icon';

type NavbarProps = {
  isSideMenuExpanded: boolean;
  setSideMenuExpanded: Dispatch<SetStateAction<boolean>>;
};

export const DashboardNavbar: FC<NavbarProps> = ({
  isSideMenuExpanded = true,
  setSideMenuExpanded,
}) => {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between px-3">
      <div className="flex items-center gap-2">
        <Button
          type="button"
          size="icon"
          variant={'ghost'}
          onClick={() => {
            setSideMenuExpanded((prev) => !prev);
          }}
        >
          <Icon
            name={isSideMenuExpanded ? 'panel-left-close' : 'panel-left-open'}
          />
        </Button>
      </div>

      <div className="flex flex-row-reverse items-center gap-4">
        <Button type="button" size="icon" variant="ghost2">
          <Icon name="bell-ring" />
        </Button>
      </div>
    </nav>
  );
};
