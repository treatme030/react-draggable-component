import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from './Box';

const DraggableBlock = styled.div`
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
`;

const Draggable = () => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({
    initX: 0,
    initY: 0,
    moveX: 0,
    moveY: 0,
    x: 0,
    y: 0,
  });
  const { initX, initY, moveX, moveY, x, y } = position;

  const handleMouseMove = useCallback((e) => {
    if(dragging){
      const newX = initX + (e.pageX - moveX);
      const newY = initY + (e.pageY - moveY);

      setPosition({
        ...position,
        x: newX,
        y: newY,
      })
    }
  },[initX, initY, dragging, moveX, moveY, position]);

  const handleMouseDown = useCallback((e) => {
    console.log(e)
    setPosition({
      ...position,
      initX: x,
      initY: y,
      moveX: e.pageX,
      moveY: e.pageY,
    })
    setDragging(true);
  },[position, x, y]);

  const handleMouseUp = useCallback((e) => {
    setDragging(false);
  },[]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemoup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemoup', handleMouseUp);
    }
  },[handleMouseMove, handleMouseUp]);

  return (
    <DraggableBlock
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    >
      <Box
      style={{ transform: `translate(${x}px, ${y}px)`}}
      />
    </DraggableBlock>
  );
};

export default Draggable;