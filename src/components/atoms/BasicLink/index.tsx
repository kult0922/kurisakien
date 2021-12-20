import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

interface Props {
  text: string;
  path: string;
}

const Text = styled.a({
  color: '#1b1b1b',
});

export const BasicLink: React.FC<Props> = ({ text, path }) => {
  return (
    <Link
      href={{
        pathname: path,
      }}
      passHref
    >
      <Text>{text}</Text>
    </Link>
  );
};
