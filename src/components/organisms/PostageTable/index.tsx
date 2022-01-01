import styled from '@emotion/styled';

const Table = styled.table({
  borderCollapse: 'collapse',
  marginLeft: 'auto',
  marginRight: 'auto',
});

const Td = styled.td({
  border: '2px solid #aaaaaa',
  whiteSpace: 'nowrap',
  padding: '10px',
});

const Wrapper = styled.div({
  overflowX: 'scroll',
});

export const PostageTable: React.FC = () => {
  return (
    <Wrapper>
      <Table>
        <tr>
          <Td></Td>
          <Td>静岡県内</Td> <Td>関東、北陸、中部、関西</Td> <Td>東北、中国、四国</Td>
          <Td>九州、沖縄、北海道</Td>
        </tr>
        <tr>
          <Td>10000円以上のお買い上げ</Td> <Td colSpan={4}>無料</Td>
        </tr>
        <tr>
          <Td>5000円以上のお買い上げ</Td>
          <Td>300円</Td> <Td>400円</Td>
          <Td>500円</Td>
          <Td>600円</Td>
        </tr>
        <tr>
          <Td>5000円未満のお買い上げ</Td>
          <Td>650円</Td> <Td>750円</Td>
          <Td>950円</Td>
          <Td>1200円</Td>
        </tr>
      </Table>
    </Wrapper>
  );
};
