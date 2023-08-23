'use client';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';

import { cn } from '@/lib';
import { cva } from 'class-variance-authority';

const avatarVariants = cva('relative flex shrink-0 overflow-hidden', {
  variants: {
    size: {
      default: 'h-10 w-10',
      small: 'h-8 w-8',
      large: 'h-12 w-12',
    },
    rounded: {
      default: 'rounded-full',
      square: 'rounded-none',
      medium: 'rounded-md',
      large: 'rounded-lg',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    size: 'default',
    rounded: 'default',
  },
});

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: 'default' | 'small' | 'large';
    rounded?: 'default' | 'square' | 'medium' | 'large' | 'full';
  }
>(({ className, size, rounded, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      avatarVariants({
        size,
        rounded,
        className,
      }),
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800',
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
