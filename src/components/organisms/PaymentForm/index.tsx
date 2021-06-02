import { FormTable } from '../../atoms/FormTable';
import { FormTableHeader } from '../../atoms/FormTableHeader';
import { FormTableRow } from '../../atoms/FormTableRow';
import { FormTableData } from '../../atoms/FormTableData';
import { PaymentType } from '../../../@types/order';

interface Props {
  paymentType: PaymentType;
  onChangePaymentType: (paymentType: PaymentType) => void;
}

export const PaymentForm: React.FC<Props> = ({ paymentType, onChangePaymentType }) => {
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
                onChange={(event) => {
                  onChangePaymentType(event.target.value as PaymentType);
                }}
                checked={paymentType === 'postal'}
              />
            </FormTableHeader>
            <FormTableData>郵便振り込み</FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>
              <input
                type="radio"
                value="convenience"
                onChange={(event) => {
                  onChangePaymentType(event.target.value as PaymentType);
                }}
                checked={paymentType === 'convenience'}
              />
            </FormTableHeader>
            <FormTableData>コンビニ決済</FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>
              <input
                type="radio"
                value="bank"
                onChange={(event) => {
                  onChangePaymentType(event.target.value as PaymentType);
                }}
                checked={paymentType === 'bank'}
              />
            </FormTableHeader>
            <FormTableData>銀行振り込み</FormTableData>
          </FormTableRow>
        </tbody>
      </FormTable>
    </>
  );
};
