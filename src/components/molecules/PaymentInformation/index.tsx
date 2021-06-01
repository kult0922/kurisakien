import { FormTable } from '../../atoms/FormTable';
import { FormTableHeader } from '../../atoms/FormTableHeader';
import { FormTableRow } from '../../atoms/FormTableRow';
import { FormTableData } from '../../atoms/FormTableData';
import { PaymentType } from '../../../@types/order';

interface Props {
  paymentOption: PaymentType;
  onChangePaymentOption: (paymentMethod: PaymentType) => void;
}

export const PaymentInformation: React.FC<Props> = ({ paymentOption, onChangePaymentOption }) => {
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
                  onChangePaymentOption(event.target.value as PaymentType);
                }}
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
                onChange={(event) => {
                  onChangePaymentOption(event.target.value as PaymentType);
                }}
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
                onChange={(event) => {
                  onChangePaymentOption(event.target.value as PaymentType);
                }}
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
