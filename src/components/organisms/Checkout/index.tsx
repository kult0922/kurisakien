import styled from '@emotion/styled';
import React from 'react';
import { NextButton } from '~/components/atoms/Buttons/next';
import { bp } from '~/constants/css';
import { Box, BoxProps, Flex } from '~/lib/styled';
import { useCheckout } from '~/store/organisms/Checkout';
import { PaymentTable } from '~/components/organisms/PaymentTable';
import { PostageTable } from '~/components/organisms/PostageTable';

interface Props extends BoxProps {
  style?: React.CSSProperties;
}

const Wrapper = styled(Box)({
  textAlign: 'center',
});

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
  [bp.md]: {
    display: 'block',
    paddingTop: '20px',
  },
});

const TableRow = styled.tr({
  borderBottom: 'solid 1px #aaaaaa',
});

const AreaSelect = styled.td({
  textAlign: 'left',
  padding: '20px',
  display: 'block',
});

const TableData = styled.td({
  textAlign: 'left',
  alignItems: 'center',
  display: 'flex',
  padding: '20px',
  flexWrap: 'wrap',
});

const CardImage = styled.img({
  height: '24px',
});

const Title = styled(Box)({
  fontSize: '28px',
});

const ErrorText = styled(Box)({
  fontSize: '12px',
  color: 'red',
});

export const Checkout: React.FC<Props> = ({ style, ...props }) => {
  const { onSubmit, register, handleSubmit, errors } = useCheckout();

  return (
    <Wrapper style={style} mt={props.mt} mb={props.mb}>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                      placeholder="123-4567"
                      {...register('postalCode', {
                        required: true,
                        pattern: /^[0-9]{3}-?[0-9]{4}$/,
                      })}
                    />
                    <ErrorText>
                      {errors.postalCode?.types?.required && '郵便番号を入力してください'}
                      {errors.postalCode?.types?.pattern &&
                        '郵便番号を正しく入力してください（半角数字）'}
                    </ErrorText>
                  </TableData>
                </TableRow>

                <TableRow>
                  <TableHeader>住所</TableHeader>
                  <TableData>
                    <Input
                      placeholder="○○県△△市□□町１−２−３ Kハイツ ○○号室"
                      width={300}
                      {...register('address', { required: true })}
                    />
                    <ErrorText>
                      {errors.address?.types?.required && '住所を入力してください'}
                    </ErrorText>
                  </TableData>
                </TableRow>

                <TableRow>
                  <TableHeader>配送地域</TableHeader>
                  <AreaSelect>
                    <div>
                      <input
                        type="radio"
                        {...register('area', { required: true })}
                        value="shizuoka"
                      />
                      静岡県内
                    </div>
                    <div>
                      <input type="radio" {...register('area', { required: true })} value="near" />
                      関東、北陸、中部、関西
                    </div>
                    <div>
                      <input
                        type="radio"
                        {...register('area', { required: true })}
                        value="middle"
                      />
                      東北、中国、四国
                    </div>
                    <div>
                      <input type="radio" {...register('area', { required: true })} value="far" />
                      九州、沖縄、北海道
                    </div>
                    <ErrorText>
                      {errors.area?.types?.required && '配送地域を選択してください'}
                    </ErrorText>
                  </AreaSelect>
                </TableRow>

                <TableRow>
                  <TableHeader>氏名</TableHeader>
                  <TableData>
                    <Flex>
                      <Box mr={5}>姓:</Box>
                      <Input
                        placeholder="姓"
                        {...register('lastName', { required: true })}
                        width={100}
                      />
                      <Box ml={15} mr={5}>
                        名:
                      </Box>
                      <Input
                        placeholder="名"
                        {...register('firstName', { required: true })}
                        width={100}
                      />
                    </Flex>
                    <ErrorText>
                      {errors.lastName?.types?.required && '姓を入力してください'}
                    </ErrorText>
                    <ErrorText>
                      {errors.firstName?.types?.required && '名を入力してください'}
                    </ErrorText>
                  </TableData>
                </TableRow>

                <TableRow>
                  <TableHeader>電話番号</TableHeader>
                  <TableData>
                    <Input
                      placeholder="123-456-7890"
                      {...register('phone', {
                        required: true,
                        pattern: /^[0-9]{2,4}-?[0-9]{2,4}-?[0-9]{3,4}$/,
                      })}
                      width={100}
                    />
                    <ErrorText>
                      {errors.phone?.types?.required && '電話番号を入力してください'}
                      {errors.phone?.types?.pattern &&
                        '電話番号を正しく入力してください（半角数字）'}
                    </ErrorText>
                  </TableData>
                </TableRow>

                <TableRow>
                  <TableHeader>メールアドレス</TableHeader>
                  <TableData>
                    <Input
                      placeholder="example@example.com"
                      {...register('email', {
                        required: true,
                        pattern: /^.+@.+\..+$/,
                      })}
                      type="email"
                      width={300}
                    />
                    <ErrorText>
                      {errors.email?.types?.required && 'メールアドレスを入力してください'}
                      {errors.email?.types?.pattern &&
                        'メールアドレスを正しく入力してください（半角数字）'}
                    </ErrorText>
                  </TableData>
                </TableRow>
              </tbody>
            </Table>
          </Flex>
          <Box m={20}>
            <Title>お支払い方法</Title>
          </Box>
          <Flex justifyContent={'center'}>
            <Table>
              <tbody>
                <TableRow>
                  <TableData>
                    <Box>
                      <input
                        type="radio"
                        {...register('paymentType', { required: true })}
                        value="card"
                      />
                    </Box>
                    クレジットカード
                    <Box ml={20}>
                      <CardImage src="/image/card/visa.png" />
                      <CardImage src="/image/card/jcb.png" />
                      <CardImage src="/image/card/master.png" />
                      <CardImage src="/image/card/amex.png" />
                    </Box>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableData>
                    <input
                      type="radio"
                      {...register('paymentType', { required: true })}
                      value="postal"
                    />
                    郵便振り込み
                    <div>(現金での振込の場合手数料 110円)</div>
                  </TableData>
                </TableRow>

                <TableRow>
                  <TableData>
                    <input
                      type="radio"
                      {...register('paymentType', { required: true })}
                      value="convenience"
                    />
                    コンビニ決済 (手数料 200円)
                  </TableData>
                </TableRow>

                <TableRow>
                  <TableData>
                    <input
                      type="radio"
                      {...register('paymentType', { required: true })}
                      value="bank"
                    />
                    銀行振り込み (振り込み手数料がかかります)
                  </TableData>
                </TableRow>

                <TableRow>
                  <TableData>
                    <input
                      type="radio"
                      {...register('paymentType', { required: true })}
                      value="delivery"
                    />
                    代金引換払い (手数料 450円)
                  </TableData>
                </TableRow>
              </tbody>
            </Table>
          </Flex>
          <ErrorText>
            {errors.paymentType?.types?.required && '支払い方法を選択してください'}
          </ErrorText>

          <Box mt={40}>ご意見、ご要望等ありましたら以下にお書きください</Box>
          <textarea
            rows={10}
            cols={44}
            {...register('voice', {
              required: false,
            })}
          ></textarea>

          <Box m={30}>
            <NextButton type="submit">注文内容確認へ</NextButton>
          </Box>
        </form>
      </Box>
      <Box mt={80}>※送料について</Box>
      <PostageTable />
      <Box mb={5} mt={20}>
        ※支払い方法の詳細
      </Box>
      <PaymentTable />
    </Wrapper>
  );
};
