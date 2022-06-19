import clsx from 'clsx';
import { ReactNode } from 'react';
import { match } from 'ts-pattern';
export type ChipType = 'hit' | 'new' | 'discount';
export type ChipProps = {
  children: ReactNode;
  label: string;
  type: ChipType;
  size: 'xs' | 'sm' | 'md';
};
export const Chip = ({
  children,
  size,
  type,
  label = 'somedata',
}: ChipProps) => {
  return (
    <div
      className={clsx(
        'text-sm font-semibold px-2.5 py-1 border rounded-xl',
        type === 'hit' && ' text-orange  border-orange',
        type === 'new' && 'text-green  border-green',
        type === 'discount' &&
          'text-white font-bold p-1.5 bg-orange rounded-3xl border-orange',
        match(size)
          .with('xs', () => 'w-20')
          .with('sm', () => 'w-1/5')
          .with('md', () => 'w-1/4')
          .exhaustive()
      )}
    >
      {children}
      {label}
    </div>
  );
};
