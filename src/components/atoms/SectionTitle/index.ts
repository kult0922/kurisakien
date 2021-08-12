import styled from '@emotion/styled';

export const SectionTitle = styled.div({
  position: 'relative',
  display: 'inline-block',
  padding: '0 70px',
  fontSize: '1.2rem',
  margin: '20px',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    display: 'inline-block',
    width: '50px',
    height: '1px',
    backgroundColor: 'black',
    left: '0',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    display: 'inline-block',
    width: '50px',
    height: '1px',
    backgroundColor: 'black',
    right: '0',
  },
});
