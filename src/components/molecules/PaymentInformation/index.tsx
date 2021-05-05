import { FormTable } from '../../atoms/FormTable';
import { FormTableHeader } from '../../atoms/FormTableHeader';
import { FormTableRow } from '../../atoms/FormTableRow';
import { FormTableData } from '../../atoms/FormTableData';
import React, { useState } from 'react';

export const PaymentInformation: React.FC = () => {
  const [val, setVal] = useState<string>('1');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setVal(e.currentTarget.value);

  return (
    <>
      <h1>決済方法の選択</h1>
      <FormTable>
        <tbody>
          <FormTableRow>
            <FormTableHeader>
              <input type="radio" value="1" onChange={handleChange} checked={val === '1'}></input>
            </FormTableHeader>
            <FormTableData>郵便振り込み</FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>
              <input type="radio" value="2" onChange={handleChange} checked={val === '2'}></input>
            </FormTableHeader>
            <FormTableData>コンビニ決済</FormTableData>
          </FormTableRow>

          <FormTableRow>
            <FormTableHeader>
              <input type="radio" value="3" onChange={handleChange} checked={val === '3'}></input>
            </FormTableHeader>
            <FormTableData>銀行振り込み</FormTableData>
          </FormTableRow>
        </tbody>
      </FormTable>
    </>
  );
};
