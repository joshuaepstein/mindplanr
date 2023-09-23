'use client';
import Button from '@/components/app/button';
import Google from '@/components/shared/icons/google';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function RegisterForm() {
  const searchParams = useSearchParams();
  const next = searchParams?.get('next');
  const [clickedGoogle, setClickedGoogle] = useState(false);

  return (
    <div className="flex flex-col space-y-3 bg-zinc-50 px-4 py-8 sm:px-16">
      <Button
        text="Continue with Google"
        onClick={() => {
          setClickedGoogle(true);
          signIn('google', {
            ...(next && next.length > 0 ? { callbackUrl: next } : {}),
          });
        }}
        loading={clickedGoogle}
        icon={<Google className="h-4 w-4" />}
      />
      <p className="text-center text-sm text-zinc-500">
        Already have an account?{' '}
        <Link
          href="/login"
          className="font-semibold text-zinc-500 transition-colors hover:text-black"
        >
          Sign in
        </Link>
        .
      </p>
    </div>
  );
}
