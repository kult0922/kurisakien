import { FormTable } from '../../atoms/FormTable';
import { FormTableHeader } from '../../atoms/FormTableHeader';
import { FormTableRow } from '../../atoms/FormTableRow';
import { FormTableData } from '../../atoms/FormTableData';
import { useState, useCallback, useEffect } from 'react';
import { PaymentMethod } from '../../../@types/order';

export const PaymentInformation: React.FC<{
  updatePaymentMethod: (paymentMethod: PaymentMethod) => void;
}> = ({ updatePaymentMethod }) => {
  const [paymentOption, setPaymentOption] = useState<PaymentMethod>('postal');

  // ラジオボタンが変更されたら、paymentOptionを更新する
  const onChangePaymentOption = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPaymentOption(event.currentTarget.value as PaymentMethod);
    },
    [setPaymentOption],
  );

  // paymentOptionが更新されたら、親コンポーネントのpaymentOptionを更新
  useEffect(() => {
    updatePaymentMethod(paymentOption);
  }, [paymentOption, updatePaymentMethod]);

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
