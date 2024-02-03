import Link from 'next/link';
import React from 'react';

interface Props {
  text: string;
  path: string;
}

export const BasicLink: React.FC<Props> = ({ text, path }) => {
  return (
    <Link
      href={{
        pathname: path,
      }}
      passHref
    >
      <a className="text-slate-700 underline">{text}</a>
    </Link>
  );
};
