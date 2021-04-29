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
        <FormTableRow>
          <FormTableHeader>
            <input type="radio" value="1" onChange={handleChange} checked={val === '1'}></input>a
          </FormTableHeader>
          <FormTableData>郵便振り込みです</FormTableData>
        </FormTableRow>

        <FormTableRow>
          <FormTableHeader>
            <input type="radio" value="2" onChange={handleChange} checked={val === '2'}></input>b
          </FormTableHeader>
          <FormTableData>代引きです</FormTableData>
        </FormTableRow>

        <FormTableRow>
          <FormTableHeader>
            <input type="radio" value="3" onChange={handleChange} checked={val === '3'}></input>c
          </FormTableHeader>
          <FormTableData>銀行振り込みです</FormTableData>
        </FormTableRow>
      </FormTable>
    </>
  );
};
