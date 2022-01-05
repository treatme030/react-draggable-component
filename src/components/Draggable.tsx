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
  const [mouseDown, setMouseDown] = useState(false);
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
    if(e.pageX <= 0 || e.pageY <= 0){
      return;
    }
    if(mouseDown){
      console.log(e)
      const newX = initX + (e.pageX - moveX);
      const newY = initY + (e.pageY - moveY);

      setPosition({
        ...position,
        x: newX,
        y: newY,
      })
    }
  },[initX, initY, mouseDown, moveX, moveY, position]);

  const handleMouseDown = useCallback((e) => {
    setPosition({
      ...position,
      initX: x,
      initY: y,
      moveX: e.pageX,
      moveY: e.pageY,
    })
    setMouseDown(true);
  },[position, x, y]);

  const handleMouseUp = useCallback(() => {
    setMouseDown(false);
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
    <DraggableBlock>
      <Box
      handleMouseDown={handleMouseDown}
      handleMouseUp={handleMouseUp}
      style={{ transform: `translate(${x}px, ${y}px)`}}
      />
    </DraggableBlock>
  );
};

export default Draggable;