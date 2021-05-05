import { Input } from '../../atoms/Input';
import { FormTable } from '../../atoms/FormTable';
import { FormTableHeader } from '../../atoms/FormTableHeader';
import { FormTableRow } from '../../atoms/FormTableRow';
import { FormTableData } from '../../atoms/FormTableData';

export const CustomerInformation: React.FC = () => {
  return (
    <>
      <h1>お客様情報入力</h1>
      <FormTable>
        <tbody>
          <FormTableRow>
            <FormTableHeader>郵便番号</FormTableHeader>
            <FormTableData>
              <Input />
            </FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>住所</FormTableHeader>
            <FormTableData>
              <Input width={500} />
            </FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>氏名</FormTableHeader>
            <FormTableData>
              姓
              <Input width={100} />
              名
              <Input width={100} />
            </FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>電話番号</FormTableHeader>
            <FormTableData>
              <Input width={100} />
            </FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>メールアドレス</FormTableHeader>
            <FormTableData>
              <Input type="email" id="email" width={300} />
            </FormTableData>
          </FormTableRow>
        </tbody>
      </FormTable>
    </>
  );
};
