import styled from '@emotion/styled';
import { bp } from '../../../../constants/css';
import { P } from '../../../atoms/P';

const MainText = styled.div({
  position: 'absolute',
  fontSize: '24px',
  background: 'white',
  padding: '15px',
  top: '30px',
  right: 'calc(100% - 300px)',
  writingMode: 'vertical-rl',
  [bp.md]: {
    display: 'none',
  },
});

const SubText = styled.div({
  textAlign: 'left',
  position: 'absolute',
  fontSize: '14px',
  background: 'white',
  padding: '15px',
  top: '60px',
  right: 'calc(100% - 200px)',
  writingMode: 'vertical-rl',
  [bp.md]: {
    display: 'none',
  },
});

const Wrapper = styled.div({
  position: 'relative',
});

export const MainImage: React.FC = () => {
  return (
    <Wrapper>
      <img
        src="http://placehold.jp/24/cc9999/993333/1200x400.png?text=メイン画像"
        alt="栗崎園"
        width="100%"
      />
      <MainText>メインテキスト</MainText>
      <SubText>
        <P m={3}>今の前の小説から。はいっ。</P>
        <P m={3}>みんなまたはじめました。</P>
        <P m={3}>ゴーシュも口をまげて一生懸命です。</P>
      </SubText>
    </Wrapper>
  );
};
