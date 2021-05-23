import { Input } from '../../atoms/Input';
import { FormTable } from '../../atoms/FormTable';
import { FormTableHeader } from '../../atoms/FormTableHeader';
import { FormTableRow } from '../../atoms/FormTableRow';
import { FormTableData } from '../../atoms/FormTableData';
import { Customer } from '../../../@types/order';
import { useState, useEffect, useCallback } from 'react';

export const CustomerInformation: React.FC<{ updateCustomer: (customer: Customer) => void }> = ({
  updateCustomer,
}) => {
  const [customer, setCustomer] = useState<Customer>({
    postalCode: '',
    address: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  // formが変化したら、customerを更新する
  const formChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCustomer((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    },
    [setCustomer],
  );

  // customerが更新されたら、親コンポーネントのcustomerを更新
  useEffect(() => {
    updateCustomer(customer);
  }, [customer, updateCustomer]);

  return (
    <>
      <h1>お客様情報入力</h1>
      <FormTable>
        <tbody>
          <FormTableRow>
            <FormTableHeader>郵便番号</FormTableHeader>
            <FormTableData>
              <Input name="postalCode" onChange={formChange} />
            </FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>住所</FormTableHeader>
            <FormTableData>
              <Input name="address" onChange={formChange} width={500} />
            </FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>氏名</FormTableHeader>
            <FormTableData>
              姓
              <Input name="lastName" onChange={formChange} width={100} />
              名
              <Input name="firstName" onChange={formChange} width={100} />
            </FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>電話番号</FormTableHeader>
            <FormTableData>
              <Input name="phone" onChange={formChange} width={100} />
            </FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>メールアドレス</FormTableHeader>
            <FormTableData>
              <Input name="email" onChange={formChange} type="email" id="email" width={300} />
            </FormTableData>
          </FormTableRow>
        </tbody>
      </FormTable>
    </>
  );
};
