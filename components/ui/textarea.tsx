import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholderSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'; // Add more sizes as needed
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, placeholderSize = 'md', ...props }, ref) => {
    // Map the placeholderSize prop to corresponding Tailwind CSS classes
    const placeholderSizeClass = {
      sm: 'placeholder:text-sm',
      md: 'placeholder:text-base',
      lg: 'placeholder:text-lg',
      xl: 'placeholder:text-xl',
      '2xl': 'placeholder:text-2xl',
    }[placeholderSize];

    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          placeholderSizeClass,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
