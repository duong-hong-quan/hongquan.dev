import * as React from 'react';

import { mergeClasses } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> { }

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, children, ...props }: ContainerProps, ref) => {
    return (
      <section
        className={mergeClasses(
          'w-full py-20 md:py-28 2xl:py-32',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-6 md:gap-12 md:px-12 lg:px-16">
          {children}
        </div>
      </section>
    );
  }
);

Container.displayName = 'Container';

export default Container;
