import React from 'react'
import styled from 'styled-components'
import woman from '../components/img/woman2.png'
import AnimatedShapes from '../components/AnimatedShapes'

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Advantures in creative age</Title>
        <Desc>We beleive that designing products and services in close partnership with our client is the only way to have real impact on their business</Desc>
        <Info >
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us +63-977-393-4168</Phone>
            <ContactText>For any question and concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right><Image src={woman} /></Right>
      <AnimatedShapes />
    </Container>
  )
}

export default Intro

const Container = styled.div`
  height:calc( 100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and ( max-width:480px) {
    flex-direction:column;
  }
`
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  @media only screen and ( max-width:480px) {
    width:100%;
    height: 100%;
  }
 
`
const Title = styled.div`
  width: 60%;
  font-size: 50px;
  font-weight: bold;
  @media only screen and ( max-width:480px) {
    width:100%;
    font-size: 50px;
  }

`
const Desc = styled.p`
  margin-top: 20px;
  width: 60%;
  font-size: 20x;
  @media only screen and ( max-width:480px) {
    width:100%;
  }
`
const Info = styled.div`
  width: 60%;
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content:space-between;
  @media only screen and ( max-width:480px) {
    width:100%;
    flex-direction:column;
  }
`
const Button = styled.button`
padding: 15px;
background-color: darkblue;
color:white;
border:none;
border-radius:10px;
font-weight: bold; 
letter-spacing:2px;
cursor: pointer;
@media only screen and ( max-width:480px) {
  margin-bottom: 20px;
  }

`
const Contact = styled.div`
  display: flex;
  flex-direction:column;
  margin-left:20px;
`
const Phone = styled.span`
  color: #f06678;
  font-weight: bold;
  font-size: 14px;
`
const ContactText = styled.span`
  color:gray;
  margin-top: 5px;
  font-size: 12px;
`
const Right = styled.div`
  width: 40%;
  @media only screen and ( max-width:480px) {
    display:none;
}
`
const Image = styled.img`

  width: 100%;
`