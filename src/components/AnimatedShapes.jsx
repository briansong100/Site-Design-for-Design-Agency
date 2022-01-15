import React from 'react'
import styled from 'styled-components'

const Squre = styled.div`
  width: 60px;
  height: 60px;
  background-color: blueviolet;
  position:absolute;
  top:-60px;
  left:-60px;
  z-index:-1;
  opacity:0.7;
  animation: square 25s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh)
    }

  }
`
const Rect = styled.div`
  width: 50px;
  height: 100px;
  background-color: #61dd61;
  position:absolute;
  top: 400px;
  left:-50px;
  z-index:-1;
  opacity:0.5;
  animation: rect 20s linear alternate infinite;

  @keyframes rect {
    to {
      transform: translate(100vw, -50vh)
    }
  }
`
const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius:50%;
  background-color: #f096a5;
  position:absolute;
  top:200px;
  left:-100px;
  z-index:-1;
  opacity:1;
  animation: circle 25s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(100vw, -20vh)
    }
  }
`
const AnimatedShapes = () => {
  return (
    <>
      <Squre />
      <Circle />
      <Rect />
    </>
  )
}

export default AnimatedShapes
