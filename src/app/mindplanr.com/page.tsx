'use client';
import { APP_DOMAIN } from '@mindplanr/utils/constants';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export default function Page() {
  return (
    <>
      <div className="mx-auto mb-10 mt-12 flex max-w-lg flex-col justify-center px-2.5 text-center sm:max-w-xl sm:px-0 lg:min-h-[700px]">
        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
          Organisation with
          <br />
          <span className="bg-gradient-to-br from-primary via-purple-500 to-primary bg-clip-text font-bold text-transparent">
            Superpowers
          </span>
        </h1>
        <h2 className="mt-3 text-zinc-600">
          Plan your mind, achieve your goals - with Mindplanr.
        </h2>

        <div className="mx-auto mt-10 flex max-w-fit space-x-4">
          <a
            href={`${APP_DOMAIN}/register`}
            className="rounded-full border border-primary bg-primary px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-primary"
          >
            Start For Free
          </a>
          <a
            className="group flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
            href={`${APP_DOMAIN}/github`}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubLogoIcon className="h-5 w-5 text-black duration-200 group-hover:text-white" />
            <p className="text-sm">Star on GitHub</p>
          </a>
        </div>

        {/* <p className="text-sm font-medium mt-5 text-zinc-500">
          Coming Soon... (20th September 2023)
        </p>
        <h2 className="mt-2 text-zinc-600 text-4xl font-riffic">00:00</h2> */}
      </div>
    </>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: 'Coming Soon | Mindplanr',
//   };
// }
