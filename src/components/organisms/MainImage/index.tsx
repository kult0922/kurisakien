import styled from '@emotion/styled';
import { bp } from '../../../constants/css';

const MainText = styled.div({
  position: 'absolute',
  fontSize: '24px',
  background: 'white',
  padding: '20px',
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
  padding: '20px',
  top: '60px',
  right: 'calc(100% - 200px)',
  writingMode: 'vertical-rl',
  [bp.md]: {
    display: 'none',
  },
});

const Image = styled.div({
  position: 'relative',
});

const Wrapper = styled.div({});

export const MainImage: React.FC = () => {
  return (
    <Wrapper>
      <Image>
        <img
          src="http://placehold.jp/24/cc9999/993333/1200x400.png?text=メイン画像"
          alt="栗崎園"
          width="100%"
        />
        <MainText>メインテキスト</MainText>
        <SubText>
          今の前の小説から。はいっ。
          <br />
          みんなまたはじめました。
          <br />
          ゴーシュも口をまげて一生懸命です。
        </SubText>
      </Image>
    </Wrapper>
  );
};
