import styled from '@emotion/styled';
import Link from 'next/link';
import { BasicLink } from '~/components/atoms/BasicLink';
import { SectionTitle } from '~/components/atoms/SectionTitle';
import { CartTable } from '~/components/molecules/CartTable';
import { Button } from '~/components/ui/button';
import { routing } from '~/constants/routing';
import { Box, BoxProps } from '~/lib/styled';
import { GlobalStore } from '~/store/Global';

interface Props extends BoxProps {
  style?: React.CSSProperties;
}

const Wrapper = styled(Box)({
  textAlign: 'center',
});

export const Cart: React.FC<Props> = ({ style, ...props }) => {
  const { carts } = GlobalStore.useContainer().cart;
  return (
    <Wrapper style={style} mt={props.mt} mb={props.mb}>
      <Box mt={10}>
        <SectionTitle text="カートの中身" />
      </Box>
      <Box mt={10}>
        <Box>
          <CartTable editable showTotal />
          <Box mt={20}>
            <Link href={routing.checkout.root} passHref>
              <Button disabled={carts.length === 0}>注文に進む</Button>
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
