import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Draggable from '../Draggable'

describe("Draggable", () => {
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
  
  test("Dragging should change the box position", () => {
    render(<Draggable />)
    const draggableEl = screen.getByTestId("draggable-box")
  
    expect(draggableEl).toHaveStyle(`transform: translate(0px, 0px)`)
  
    fireEvent.mouseDown(draggableEl)
    fireEvent.mouseMove(draggableEl, {
      clientX: 10,
      clientY: 20
    })
    fireEvent.mouseUp(draggableEl)
  
    expect(draggableEl).toHaveStyle(`transform: translate(10px, 20px)`)
  })
})
