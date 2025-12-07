
'use client';

import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export function LoadingScreen() {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500'
      )}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute h-24 w-24 animate-pulse rounded-full bg-primary/20" />
        <div className="absolute h-32 w-32 animate-pulse rounded-full bg-primary/10 delay-75" />
        <Icons.logo className="h-16 w-16" />
      </div>
    </div>
  );
}
