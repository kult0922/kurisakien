import React, { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
}

export const ExternalLink: React.FC<Props> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 underline">
      {children}
    </a>
  );
};
