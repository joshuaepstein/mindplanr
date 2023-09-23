'use client';

import LoadingSpinner from '@/components/shared/icons/loading-spinner';
import { cn } from '@/lib/cn';
import { ReactNode } from 'react';
import Tooltip from './tooltip';

export default function Button({
  text,
  variant = 'primary',
  className,
  onClick,
  disabled,
  loading,
  icon,
  disabledTooltip,
}: {
  text: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  className?: string;
  onClick?: any;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  disabledTooltip?: string | ReactNode;
}) {
  if (disabledTooltip) {
    return (
      <Tooltip content={disabledTooltip} fullWidth>
        <div className="flex h-10 w-full cursor-not-allowed items-center justify-center rounded-md border border-zinc-200 bg-zinc-100 px-4 text-sm text-zinc-400 transition-all focus:outline-none">
          <p>{text}</p>
        </div>
      </Tooltip>
    );
  }
  return (
    <button
      // if onClick is passed, it's a "button" type, otherwise it's being used in a form, hence "submit"
      type={onClick ? 'button' : 'submit'}
      className={cn(
        'flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all focus:outline-none',
        disabled || loading
          ? 'cursor-not-allowed border-zinc-200 bg-zinc-100 text-zinc-400'
          : {
              'border-black bg-black text-white hover:bg-white hover:text-black':
                variant === 'primary',
              'border-zinc-200 bg-white text-zinc-500 hover:border-black hover:text-black':
                variant === 'secondary',
              'border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500':
                variant === 'success',
              'border-red-500 bg-red-500 text-white hover:bg-white hover:text-red-500':
                variant === 'danger',
            },
        className,
      )}
      {...(onClick ? { onClick } : {})}
      disabled={disabled || loading}
    >
      {loading ? <LoadingSpinner /> : icon ? icon : null}
      <p>{text}</p>
    </button>
  );
}
