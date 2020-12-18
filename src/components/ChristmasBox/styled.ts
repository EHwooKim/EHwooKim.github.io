import styled, { keyframes } from 'styled-components'

export const MoveLid = keyframes`
  0% {
    top: 0;
    left: 0;
    transform: rotateZ(0deg);
  }
  30% {
    top: -100px;
    left: 10px;
    transform: rotateZ(10deg);    
  }
  60% {
    top: -100px;
    left: 10px;
    transform: rotateZ(10deg);    
  }
  90% {
    top: 0;
    left: 0;
    transform: rotateZ(0deg);
  }
  100% {
    top: 0;
    left: 0;
    transform: rotateZ(0deg);
  }
`
export const MoveGreeting = keyframes`
  0% {
    top: 10px;
  }
  30% {
    top: -80px;
  }
  60% {
    top: -80px;
  }
  90% {
    top: 10px;
  }
  100% {
    top: 10px;
  }
`
export const Present = styled.div`
  width: 410px;
`
export const BoxAndLid = styled.div`
  background: 
    radial-gradient(white 15%, transparent 15.1%),
    rgb(240, 58, 58);
  background-position: 0 0, 25px 25px;
  background-size: 50px 50px;
  position: relative;
  margin: 0 auto;
  & span {
    position: absolute;
    display: block;
    background-color: rgba(235, 199, 0, 0.8);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, -0.8);
  }
`
export const Lid = styled((BoxAndLid))`
  width: 400px;
  height: 70px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 0 2px;
  background-color: rgb(216, 52, 52);
  animation: ${MoveLid} 4s 1s ease-out infinite;
  & span {
    width: 60px;
    height: 100%;
    left: 202px;
  }
`
export const Box = styled(BoxAndLid)`
  width: 400px;
  height: 250px;
  & span:first-child {
    width: 100%;
    height: 60px;
    top: 80px;
  }
  & span:last-child {
    width: 60px;
    height: 100%;
    left: 200px;
  }
`
export const Greeting = styled.div`
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: center;
  position: relative;
  top: 10px;
  height: 0;
  transition: all ease-out 0.7s;
  animation: ${MoveGreeting} 4s 1s ease-out infinite;
  p {
    font-size: 24px;
    margin: 0;    
  }
  h2 {
    font-size: 40px;
    margin: 0;
  }
`