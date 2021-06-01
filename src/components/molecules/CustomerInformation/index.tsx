import { Input } from '../../atoms/Input';
import { FormTable } from '../../atoms/FormTable';
import { FormTableHeader } from '../../atoms/FormTableHeader';
import { FormTableRow } from '../../atoms/FormTableRow';
import { FormTableData } from '../../atoms/FormTableData';

interface Props {
  onChangeCutomer: (value: string, key: string) => void;
}

export const CustomerInformation: React.FC<Props> = ({ onChangeCutomer }) => {
  return (
    <>
      <h1>お客様情報入力</h1>
      <FormTable>
        <tbody>
          <FormTableRow>
            <FormTableHeader>郵便番号</FormTableHeader>
            <FormTableData>
              <Input
                name="postalCode"
                onChange={(event) => {
                  onChangeCutomer(event.target.value, event.target.name);
                }}
              />
            </FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>住所</FormTableHeader>
            <FormTableData>
              <Input
                name="address"
                onChange={(event) => {
                  onChangeCutomer(event.target.value, event.target.name);
                }}
                width={500}
              />
            </FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>氏名</FormTableHeader>
            <FormTableData>
              姓
              <Input
                name="lastName"
                onChange={(event) => {
                  onChangeCutomer(event.target.value, event.target.name);
                }}
                width={100}
              />
              名
              <Input
                name="firstName"
                onChange={(event) => {
                  onChangeCutomer(event.target.value, event.target.name);
                }}
                width={100}
              />
            </FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>電話番号</FormTableHeader>
            <FormTableData>
              <Input
                name="phone"
                onChange={(event) => {
                  onChangeCutomer(event.target.value, event.target.name);
                }}
                width={100}
              />
            </FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>メールアドレス</FormTableHeader>
            <FormTableData>
              <Input
                name="email"
                onChange={(event) => {
                  onChangeCutomer(event.target.value, event.target.name);
                }}
                type="email"
                id="email"
                width={300}
              />
            </FormTableData>
          </FormTableRow>
        </tbody>
      </FormTable>
    </>
  );
};
