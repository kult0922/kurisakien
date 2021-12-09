import { giftList } from '../../constants/store/giftList';
import { SectionTitle } from '../../components/atoms/SectionTitle';
import { Box } from '../../lib/styled';
import Link from 'next/link';
import styled from '@emotion/styled';
import React from 'react';
import { Header } from '../../components/organisms/Header';
import { GiftCard } from '../../components/molecules/giftCard';
///import { itemList } from '../../constants/store';

const ItemLink = styled.a({
  color: '#1b1b1b',
  textDecoration: 'none',
  display: 'inline-block',
});

const Wrapper = styled.div({
  textAlign: 'center',
});

const Gifts: React.FC = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Box mt={10}>
          <SectionTitle>商品一覧</SectionTitle>
        </Box>
        {Array.from(giftList.keys()).map((giftId) => {
          return (
            <Link key={giftId} href={`/gifts/${encodeURIComponent(giftId)}`} passHref>
              <ItemLink>
                <GiftCard item={giftList.get(giftId)[0]} m={10} width={300} />
              </ItemLink>
            </Link>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Gifts;
