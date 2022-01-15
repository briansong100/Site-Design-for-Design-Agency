import React from 'react'
import styled from 'styled-components'
import App from '../components/img/appwithhand.png'
import AnimatedShapes from './AnimatedShapes'
const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br />
          <b>good</b> business
        </Title>
        <SubTitle>
          We know that good design means good business.
        </SubTitle>
        <Desc >
          We help our clients succeed by creating brand identities,
          digital experiences, and print materials that coumicate clearly, active maketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guaurantee you to accive maketin goals.
        </Desc>
        <Button>Lear More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  )
}

export default Feature

const Container = styled.div`
  display: flex;
  @media only screen and ( max-width:480px) {
    flex-direction:column;
    padding: 30px 20px;
  }

`
const Left = styled.div`
  width: 50%;
  @media only screen and ( max-width:480px) {
    display:none;
  }
`
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction:column;
  justify-content:center;
  @media only screen and ( max-width:480px) {
    width: 100%;
  }
`
const Image = styled.img`
  padding: 30px 100px 10px 0;
  width: 90%;
`
const Title = styled.span`
  font-size: 50px;
  @media only screen and ( max-width:480px) {
    font-size: 40px;
  }
`
const SubTitle = styled.span`
  font-size: 20px;
  margin-top: 20px;
  color: #333;
  font-style:italic;
`
const Desc = styled.p`
  font-size:14px;
  color: #777;
  margin-top: 30px;
`
const Button = styled.button`
  margin-top: 30px;
  width: 160px;
  background-color:crimson;
  font-size: 20px;
  border:none;
  margin-left:20px;
  border-radius:10px;
  color: white;
  padding: 10px 20px;
`