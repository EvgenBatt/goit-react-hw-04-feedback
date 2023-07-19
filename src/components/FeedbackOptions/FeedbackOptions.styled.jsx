import styled from '@emotion/styled';

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  border-radius: 4px;
  border: 1px solid #5f5f5f9b;
  padding: 5px 10px;
  background-color: #fff;

  :hover {
    border: ${props => {
      if (props.option === 'good') {
        return '1px solid #006312e1';
      }
      if (props.option === 'neutral') return '1px solid #9a9a00';
      if (props.option === 'bad') return '1px solid red';
    }};

    background-color: ${props => {
      if (props.option === 'good') {
        return '#00a51e27';
      }
      if (props.option === 'neutral') {
        return '#bdb70027';
      }
      if (props.option === 'bad') {
        return '#a52c0027';
      }
    }};
  }
`;
