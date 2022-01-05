import React, { VFC, CSSProperties, MouseEvent } from 'react';
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
  style: CSSProperties;
  handleMouseUp: (e: MouseEvent) => void;
  handleMouseDown: (e: MouseEvent) => void;
}

const Box: VFC<Props> = ({ style, handleMouseUp, handleMouseDown }) => {
  return (
    <BoxStyles
    style={style}
    onMouseUp={handleMouseUp}
    onMouseDown={handleMouseDown}
    >
    </BoxStyles>
  );
};

export default Box;