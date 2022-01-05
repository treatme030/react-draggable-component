import React, { VFC, CSSProperties } from 'react';
import styled from 'styled-components';

const BoxStyles = styled.div`
  width: 200px;
  height: 200px;
  background: #ecdb41;
  color: #3870b9;
  box-shadow: 2px 2px 5px rgba(94, 104, 121, 0.3);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grabbing;
  h1 {
    user-select: none;
  }
`;

interface Props {
  style: CSSProperties
}

const Box: VFC<Props> = ({ style }) => {
  return (
    <BoxStyles
    style={style}
    >
      <h1>Drag!!</h1>
    </BoxStyles>
  );
};

export default Box;