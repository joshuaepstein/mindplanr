import Button from '@/components/app/button';
import Logo from '@/components/shared/icons/logo';
import { constructMetadata } from '@/lib/meta';
import { Suspense } from 'react';
import LoginForm from './form';

export const metadata = constructMetadata({
  title: 'Sign in to Mindplanr.',
});

export default function LoginPage() {
  return (
    <div className="relative z-10 mt-[calc(30vh)] h-fit w-full max-w-md overflow-hidden border border-zinc-100 sm:rounded-2xl sm:shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-zinc-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
        <a href={'/'}>
          <Logo className="h-10 w-10" />
        </a>
        <h3 className="text-xl font-semibold">Sign in to Mindplanr.</h3>
        <p className="text-sm text-zinc-500">
          Start organising your mind, achieving your goals.
        </p>
      </div>
      <Suspense
        fallback={
          <div className="flex flex-col space-y-3 bg-zinc-50 px-4 py-8 sm:px-16">
            <Button disabled={true} text="" variant="secondary" />
            <Button disabled={true} text="" variant="secondary" />
            <Button disabled={true} text="" variant="secondary" />
            <div className="mx-auto h-5 w-3/4 rounded-lg bg-zinc-100" />
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
