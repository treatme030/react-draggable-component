import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Draggable from '../Draggable'

test("default box position", () => {
  render(<Draggable />)
  const draggableEl = screen.getByTestId("draggable-box")
  
  expect(draggableEl).toHaveStyle(`transform: translate(0px, 0px)`)
})

test("default box size", () => {
  render(<Draggable />)
  const draggableEl = screen.getByTestId("draggable-box")
  
  expect(draggableEl).toHaveStyle({width: '200px', height: '200px'})
})