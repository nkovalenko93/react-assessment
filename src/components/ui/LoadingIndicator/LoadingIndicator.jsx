import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export default styled.div`
  border: 7px solid #23629a;
  border-top: 7px solid #f3f3f3;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${rotate} 2s linear infinite;
`;
