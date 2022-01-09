import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Box from '../Box';

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
  const boxRef = useRef<HTMLDivElement>(null!);
  const { initX, initY, moveX, moveY, x, y } = position;

  const handleMouseMove = useCallback((e) => {
    if(mouseDown){
      const newX = initX + (e.clientX - moveX);
      const newY = initY + (e.clientY - moveY);
      const boxWidth = boxRef.current?.clientWidth
      const boxSideLinePositionX = (window.innerWidth / 2) - (boxWidth / 2);
      const boxSideLinePositionY = (window.innerHeight / 2) - (boxWidth / 2);

      if(newX < 0 && newY < 0){
        setPosition({
          ...position,
          x: Math.max(- (boxSideLinePositionX), newX),
          y: Math.max(- (boxSideLinePositionY), newY),
        })
      } else if(newX >= 0 && newY < 0){
        setPosition({
          ...position,
          x: Math.min(boxSideLinePositionX, newX),
          y: Math.max(- (boxSideLinePositionY), newY),
        })
      } else if(newX >= 0 && newY >= 0){
        setPosition({
          ...position,
          x: Math.min(boxSideLinePositionX, newX),
          y: Math.min(boxSideLinePositionY, newY),
        })
      } else if(newX < 0 && newY >= 0){
        setPosition({
          ...position,
          x: Math.max(- (boxSideLinePositionX), newX),
          y: Math.min(boxSideLinePositionY, newY),
        })
      }
    }
  },[initX, initY, mouseDown, moveX, moveY, position]);

  const handleMouseDown = useCallback((e) => {
    setPosition({
      ...position,
      initX: x,
      initY: y,
      moveX: e.clientX,
      moveY: e.clientY,
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
    <DraggableBlock data-testid="drag-zone">
      <Box
      ref={boxRef}
      handleMouseDown={handleMouseDown}
      handleMouseUp={handleMouseUp}
      style={{ transform: `translate(${x}px, ${y}px)`}}
      />
    </DraggableBlock>
  );
};

export default Draggable;