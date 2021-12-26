import styled from '@emotion/styled';
import { routing } from '../../../constants/routing';
import { Box, Flex } from '../../../lib/styled';
import Link from 'next/link';

const LinkText = styled.a({
  color: '#777',
});

const Text = styled.div({
  color: '#777',
  marginRight: '10px',
  marginLeft: '10px',
});

const Block = styled(Box)({
  height: '100px',
  backgroundColor: '#fcfcfc',
  textAlign: 'center',
});

export const Footer: React.FC = () => {
  return (
    <Block>
      <Flex justifyContent={'center'} flexWrap={'wrap'} mb={20} mt={20}>
        <Box mr={10}>
          <Link
            href={{
              pathname: routing.docs.privacy,
            }}
            passHref
          >
            <LinkText>プライバシーポリシー</LinkText>
          </Link>
        </Box>

        <Box>
          <Link
            href={{
              pathname: routing.docs.low,
            }}
            passHref
          >
            <LinkText>特定商取引法に基づく表示</LinkText>
          </Link>
        </Box>
      </Flex>
      <Flex justifyContent={'center'} flexWrap={'wrap'} mb={20}>
        <Text>developed by</Text>
        <LinkText href="https://twitter.com/KK_sep_TT">@KK_sep_TT</LinkText>
        <Text>and</Text>
        <LinkText href="https://twitter.com/PeeI043">@PeeI043</LinkText>
      </Flex>
    </Block>
  );
};
