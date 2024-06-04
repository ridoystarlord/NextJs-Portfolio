import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholderSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'; // Add more sizes as needed
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholderSize = 'md', ...props }, ref) => {
    // Map the placeholderSize prop to corresponding Tailwind CSS classes
    const placeholderSizeClass = {
      sm: 'placeholder:text-sm',
      md: 'placeholder:text-base',
      lg: 'placeholder:text-lg',
      xl: 'placeholder:text-xl',
      '2xl': 'placeholder:text-2xl',
    }[placeholderSize];

    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          placeholderSizeClass,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
