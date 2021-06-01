import { FormTable } from '../../atoms/FormTable';
import { FormTableHeader } from '../../atoms/FormTableHeader';
import { FormTableRow } from '../../atoms/FormTableRow';
import { FormTableData } from '../../atoms/FormTableData';
import { useState, useCallback, useEffect } from 'react';
import { PaymentType } from '../../../@types/order';

export const PaymentInformation: React.FC<{
  updatePaymentType: (paymentMethod: PaymentType) => void;
}> = ({ updatePaymentType }) => {
  const [paymentOption, setPaymentOption] = useState<PaymentType>('postal');

  // ラジオボタンが変更されたら、paymentOptionを更新する
  const onChangePaymentOption = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentOption(event.currentTarget.value as PaymentType);
  }, []);

  // paymentOptionが更新されたら、親コンポーネントのpaymentOptionを更新
  useEffect(() => {
    updatePaymentType(paymentOption);
  }, [paymentOption, updatePaymentType]);

  return (
    <>
      <h1>決済方法の選択</h1>
      <FormTable>
        <tbody>
          <FormTableRow>
            <FormTableHeader>
              <input
                type="radio"
                value="postal"
                onChange={onChangePaymentOption}
                checked={paymentOption === 'postal'}
              />
            </FormTableHeader>
            <FormTableData>郵便振り込み</FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>
              <input
                type="radio"
                value="convenience"
                onChange={onChangePaymentOption}
                checked={paymentOption === 'convenience'}
              />
            </FormTableHeader>
            <FormTableData>コンビニ決済</FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>
              <input
                type="radio"
                value="bank"
                onChange={onChangePaymentOption}
                checked={paymentOption === 'bank'}
              />
            </FormTableHeader>
            <FormTableData>銀行振り込み</FormTableData>
          </FormTableRow>
        </tbody>
      </FormTable>
    </>
  );
};
