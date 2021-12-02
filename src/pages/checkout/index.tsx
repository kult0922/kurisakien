import styled from '@emotion/styled';
import { Box, Flex } from '../../lib/styled';
import { Order } from '../../@types/order';
import { routing } from '../../constants/routing';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GlobalStore } from '../../store/Global';
import { bp } from '../../constants/css';
import { useRouter } from 'next/router';
import PostageTable from '../../components/organisms/PostageTable';

const Wrapper = styled.div({
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

const TableData = styled.td({
  textAlign: 'left',
  padding: '20px',
  [bp.md]: {
    display: 'block',
  },
});

const Title = styled(Box)({
  fontSize: '28px',
});

const ErrorText = styled(Box)({
  fontSize: '12px',
  color: 'red',
});

const Checkout: React.FC = () => {
  const { order: orderContainer } = GlobalStore.useContainer();
  const { setOrder } = orderContainer;
  const router = useRouter();
  // const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Order>({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: false,
  });

  const onSubmit: SubmitHandler<Order> = (data) => {
    setOrder(data);
    router.push(routing.checkout.confirm);
  };

  return (
    <Wrapper>
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
                <TableData>
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
                    <input type="radio" {...register('area', { required: true })} value="middle" />
                    東北、中国、四国
                  </div>
                  <div>
                    <input type="radio" {...register('area', { required: true })} value="far" />
                    九州、沖縄、北海道
                  </div>
                  <ErrorText>
                    {errors.area?.types?.required && '配送地域を選択してください'}
                  </ErrorText>
                </TableData>
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
                    {errors.phone?.types?.pattern && '電話番号を正しく入力してください（半角数字）'}
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
                  <input
                    type="radio"
                    {...register('paymentType', { required: true })}
                    value="postal"
                  />
                  郵便振り込み (手数料無料)
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
        <Box m={20}>
          <input type="submit" value="注文内容確認へ" />
        </Box>
      </form>
      <Box mb={5}>※送料について</Box>
      <PostageTable />
    </Wrapper>
  );
};

export default Checkout;
