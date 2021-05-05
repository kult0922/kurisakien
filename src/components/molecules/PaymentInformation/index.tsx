import { FormTable } from '../../atoms/FormTable';
import { FormTableHeader } from '../../atoms/FormTableHeader';
import { FormTableRow } from '../../atoms/FormTableRow';
import { FormTableData } from '../../atoms/FormTableData';
import { useState } from 'react';

export const PaymentInformation: React.FC = () => {
  const [paymentOption, setPaymentOption] = useState<string>('1');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentOption(e.currentTarget.value);
  };

  return (
    <>
      <h1>決済方法の選択</h1>
      <FormTable>
        <tbody>
          <FormTableRow>
            <FormTableHeader>
              <input
                type="radio"
                value="1"
                onChange={handleChange}
                checked={paymentOption === '1'}
              />
            </FormTableHeader>
            <FormTableData>郵便振り込み</FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>
              <input
                type="radio"
                value="2"
                onChange={handleChange}
                checked={paymentOption === '2'}
              />
            </FormTableHeader>
            <FormTableData>コンビニ決済</FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>
              <input
                type="radio"
                value="3"
                onChange={handleChange}
                checked={paymentOption === '3'}
              />
            </FormTableHeader>
            <FormTableData>銀行振り込み</FormTableData>
          </FormTableRow>
        </tbody>
      </FormTable>
    </>
  );
};
