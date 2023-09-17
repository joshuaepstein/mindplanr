import { type IconNames } from '@/components/ui/Icon';

type PageLink = {
  href: string;
  icon: IconNames;
  label: string;
};

const pageLinks: PageLink[] = [
  {
    href: '/app',
    icon: 'home',
    label: 'Home',
  },
  {
    href: '/app/workspaces',
    icon: 'briefcase',
    label: 'Workspaces',
  },
  {
    href: '/app/projects',
    icon: 'grid-2x2',
    label: 'Projects',
  },
];

export { pageLinks };
