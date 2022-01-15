import React, { useState } from 'react'
import styled from 'styled-components'
import MiniCard from './MiniCard'

import Play from '../components/img/play.png'
import Work from '../components/img/work.mp4'
import Inspect from '../components/img/inspect.png'

const Service = () => {

  const [isOpen, setIsOpen] = useState(false)
  const isSmallScreen = window.screen.width <= 480;

  return (
    <Container>
      <Left>
        <Image src={Inspect} isOpen={isOpen} />
        {/* <Video autoPlay controls loop isOpen={isOpen} src="https://media.istockphoto.com/videos/female-ux-architect-consults-design-engineer-they-work-on-mobile-at-video-id840781662" /> */}
        <Video autoPlay controls loop isOpen={isOpen} src={Work} />
      </Left>
      <Right Right >
        <Wrapper>
          <Title>
            Simple process to start
          </Title>
          <Desc>
            We provide digital experience services to startups and small business to looking for a partner
            of their degital media, design development, lead generation and communications requirents.
            We work with you, not for you. Although we have great responses.
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>

          {/* <Button onen={isOpen} onClick={() => setIsOpen(!isOpen)} >How it works </Button> */}
          <Button onen={isOpen} onClick={() => setIsOpen(!isOpen)} ><PlayIcon src={Play} />How it works </Button>
        </Wrapper>
      </Right >
      {isSmallScreen && isOpen && (
        <Modal>
          {/* <Video autoPlay controls loop isOpen={isOpen} src="Work" /> */}
          <CloseButton onClick={() => setIsOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container >
  )
}

export default Service

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position:absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.5)
`
const CloseButton = styled.button`
  position:absolute;
  padding:5px;
  border:none;
  border-radius:5px;
  top:33%;
  right:5px;
`
const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and ( max-width:480px) {
    flex-direction:column;
  }
`
const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and ( max-width:480px) {
   display: none;
  }
`
const Image = styled.img`
  display: ${props => props.isOpen && "none"};
  padding: 30px 20px 10px 0;
  width: 90%;
  margin-left: 50px;
`
const Video = styled.video`
  display: ${props => !props.isOpen && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30px;
  margin:auto;
  @media only screen and ( max-width:480px) {
    width:100%;
    left:0;
  }

`
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction:column;
  @media only screen and ( max-width:480px) {
    width: 100%;
  }

`
const Wrapper = styled.div`
padding: 50px;
  display: flex;  
  flex-direction:column;
  /* align-items: center; */
  @media only screen and ( max-width:480px) {
    padding: 20px;
  }
`

const Title = styled.h1`
`
const Desc = styled.div`
  margin-top: 30px;
  font-size:16px;
  color: #666;
`
const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`
const Button = styled.button`
  cursor: pointer;
  margin-top:50px;
  width: 210px;
  background-color:darkblue;
  font-size: 20px;
  border:none;
  border-radius:10px;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
 
`
const PlayIcon = styled.img`
  width: 20px;
  padding: 0 10px;
`