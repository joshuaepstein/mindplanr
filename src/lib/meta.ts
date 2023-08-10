import { Metadata } from 'next';

export function constructMetadata({
  title = 'Mindplanr',
  description = '', //TODO: Default description
  image = 'https://mindplanr.com/_static/images/og.png',
}: {
  title?: string;
  description?: string;
  image?: string;
}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicons/favicon-16x16.png',
      apple: '/favicons/apple-touch-icon.png',
    },
    openGraph: {
      title: {
        default: title,
        template: `%s | ${title}`,
      },
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    metadataBase: new URL('https://mindplanr.com/'),
    themeColor: '#ffffff',
  };
}
