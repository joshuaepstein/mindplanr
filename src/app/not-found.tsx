'use client';

import { BrandWithoutSize } from '@mindplanr/ui/brand';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-3">
        <BrandWithoutSize className="w-[80vw] text-primary xs:w-[300px] md:w-[600px]" />
        <h3 className="text-xl tracking-wide md:text-2xl lg:text-4xl">
          coming soon.
        </h3>
        <p className="mt-12 font-[inter] font-medium">
          You&apos;ve tried to access a page which does not exist.
        </p>
      </div>
      <BrandWithoutSize
        height={1000}
        className="absolute inset-x-0 -z-10 w-full stroke-primary-50 stroke-[3] font-[Riffic] text-white"
      />
    </div>
  );
}
