import styled from '@emotion/styled';
import { Box, Flex } from '../../../lib/styled';

interface Props {
  onChangeCutomer: (value: string, key: string) => void;
}

const Input = styled.input<{ width?: number | string }>(({ width }) => ({
  width,
  height: '25px',
  border: 'solid 1px #aaaaaa',
  backgroundColor: '#fde1e1',
}));

const Table = styled.table({
  border: 'solid 2px #aaaaaa',
  borderCollapse: 'collapse',
});

const TableHeader = styled.td({
  textAlign: 'left',
  paddingRight: '100px',
  paddingLeft: '20px',
  '@media (max-width: 767px)': {
    display: 'block',
    paddingTop: '20px',
  },
});

const TableRow = styled.tr({
  borderBottom: 'solid 1px #aaaaaa',
});

const TableData = styled.td({
  textAlign: 'left',
  padding: '20px',
  '@media (max-width: 767px)': {
    display: 'block',
  },
});

const Title = styled(Box)({
  fontSize: '28px',
});

const Wrapper = styled.div({
  textAlign: 'center',
});

export const CustomerForm: React.FC<Props> = ({ onChangeCutomer }) => {
  return (
    <Wrapper>
      <Box m={20}>
        <Title>お客様情報</Title>
      </Box>
      <Flex justifyContent={'center'}>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>郵便番号</TableHeader>

              <TableData>
                <Input
                  name="postalCode"
                  placeholder="123-4567"
                  onChange={(event) => {
                    onChangeCutomer(event.target.value, event.target.name);
                  }}
                />
              </TableData>
            </TableRow>

            <TableRow>
              <TableHeader>住所</TableHeader>
              <TableData>
                <Input
                  name="address"
                  placeholder="○○県△△市□□町１−２−３ Kハイツ ○○号室"
                  onChange={(event) => {
                    onChangeCutomer(event.target.value, event.target.name);
                  }}
                  width={300}
                />
              </TableData>
            </TableRow>

            <TableRow>
              <TableHeader>氏名</TableHeader>
              <TableData>
                <Flex>
                  <Box mr={5}>姓:</Box>
                  <Input
                    name="lastName"
                    placeholder="姓"
                    onChange={(event) => {
                      onChangeCutomer(event.target.value, event.target.name);
                    }}
                    width={100}
                  />
                  <Box ml={15} mr={5}>
                    名:
                  </Box>
                  <Input
                    name="firstName"
                    placeholder="名"
                    onChange={(event) => {
                      onChangeCutomer(event.target.value, event.target.name);
                    }}
                    width={100}
                  />
                </Flex>
              </TableData>
            </TableRow>

            <TableRow>
              <TableHeader>電話番号</TableHeader>
              <TableData>
                <Input
                  name="phone"
                  placeholder="123-456-7890"
                  onChange={(event) => {
                    onChangeCutomer(event.target.value, event.target.name);
                  }}
                  width={100}
                />
              </TableData>
            </TableRow>

            <TableRow>
              <TableHeader>メールアドレス</TableHeader>
              <TableData>
                <Input
                  name="email"
                  placeholder="example@example.com"
                  onChange={(event) => {
                    onChangeCutomer(event.target.value, event.target.name);
                  }}
                  type="email"
                  id="email"
                  width={300}
                />
              </TableData>
            </TableRow>
          </tbody>
        </Table>
      </Flex>
    </Wrapper>
  );
};
