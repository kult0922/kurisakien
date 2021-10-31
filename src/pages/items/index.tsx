import { itemList } from '../../constants/store';
import { ItemCard } from '../../components/molecules/ItemCard';
import { SectionTitle } from '../../components/atoms/SectionTitle';
import { Box } from '../../lib/styled';
import Link from 'next/link';
import styled from '@emotion/styled';
import React from 'react';
import { Header } from '../../components/organisms/Header';

const ItemLink = styled.a({
  color: '#1b1b1b',
  textDecoration: 'none',
  display: 'inline-block',
});

const Wrapper = styled.div({
  textAlign: 'center',
});

const Items: React.FC = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Box mt={10}>
          <SectionTitle>商品一覧</SectionTitle>
        </Box>
        {itemList.map((item, i) => {
          return (
            <Link key={i} href={`/items/${encodeURIComponent(item.id)}`} passHref>
              <ItemLink>
                <ItemCard item={item} m={10} width={300} />
              </ItemLink>
            </Link>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Items;
