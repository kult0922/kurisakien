import styled from '@emotion/styled';
import Link from 'next/link';
import { routing } from '../../../constants/routing';
import { Box, BoxProps } from '../../../lib/styled';
import { BasicLink } from '../../atoms/BasicLink';
import { NextButton } from '../../atoms/Buttons/next';
import { SectionTitle } from '../../atoms/SectionTitle';
import { CartTable } from '../../molecules/CartTable';

interface Props extends BoxProps {
  style?: React.CSSProperties;
}

const Wrapper = styled(Box)({
  textAlign: 'center',
});

export const Cart: React.FC<Props> = ({ style, ...props }) => {
  return (
    <Wrapper style={style} mt={props.mt} mb={props.mb}>
      <Box mt={10}>
        <SectionTitle>カートの中身</SectionTitle>
      </Box>
      <Box mt={10}>
        <Box>
          <CartTable editable showTotal />
          <Box mt={20}>
            <Link href={routing.checkout.root} passHref>
              <NextButton>注文に進む</NextButton>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box mt={20}>
        <BasicLink path={routing.items.root} text={'買い物を続ける'}></BasicLink>
      </Box>
    </Wrapper>
  );
};
