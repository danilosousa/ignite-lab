import { Slot } from '@radix-ui/react-slot';

import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}
export function Button({ children, asChild}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={clsx(
      'py-4 px-3 bg-marron-500 rounded font-semibold text-black focus:ring-marron-900 text-sm transition-colors w-full hover:bg-marron-300',
    )}>
      {children}
    </Comp>
  )
}