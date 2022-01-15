import React from 'react'
import styled from 'styled-components'
import Search from '../components/img/search.png'

const MiniCard = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>

    </Container>
  )
}

export default MiniCard


const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  width:100px;
  padding: 20px;
  box-shadow: 4px 14px 27px -8px rgba(0,0,0,0.62);
  -webkit-box-shadow: 4px 14px 27px -8px rgba(0,0,0,0.62);
  -moz-box-shadow: 4px 14px 27px -8px rgba(0,0,0,0.62);
  @media only screen and ( max-width:480px) {
    width: 50px;
  }

`
const Image = styled.img`
  width: 20px;
`
const Text = styled.span`
  margin-top: 10px;
  text-align: center;
  @media only screen and ( max-width:480px) {
    font-size: 14px;
  }

`