import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Props {
  path: string;
  children: ReactNode;
}

export const BasicLink: React.FC<Props> = ({ children, path }) => {
  return (
    <Link
      href={{
        pathname: path,
      }}
      passHref
    >
      <a className="text-slate-700 underline">{children}</a>
    </Link>
  );
};
