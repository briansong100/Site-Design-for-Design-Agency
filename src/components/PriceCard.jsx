import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  margin-right: 50px;
  border-radius:10px;
  display: flex;
  flex-direction:column;
  align-items: center;
  box-shadow: 4px 14px 27px -8px rgba(0,0,0,0.62);
  -webkit-box-shadow: 4px 14px 27px -8px rgba(0,0,0,0.62);
  -moz-box-shadow: 4px 14px 27px -8px rgba(0,0,0,0.62);
  @media only screen and ( max-width:480px) {
    margin-right:0;
    margin-bottom:10px;
    padding: 10px;
  }

`
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`
const Price = styled.span`
font-weight: bold;
font-size: 50px;
@media only screen and ( max-width:480px) {
    font-size: 30px;
  }

`
const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  background-color: white;
  color: crimson;
  border-radius:20px;
  font-size: 15px;
  @media only screen and ( max-width:480px) {
    margin: 5px;
    padding: 5px;
    
  }

`
const List = styled.ul`
  list-style: none;
`
const ListItem = styled.li`
  margin: 25px 0;
  @media only screen and ( max-width:480px) {
    font-size: 12px;
    margin: 10px;
  }

`
const Button = styled.button`
  font-size: 15px;
  border:none;
  border-radius:10px;
  background-color: darkblue;
  color:white;
  padding: 10px;
  @media only screen and ( max-width:480px) {
    padding: 5px 10px;
    font-size: 12px;
  }

  
`


const PriceCard = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer >
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>200 hand-crafted templates</ListItem>
        <ListItem>Exclusive support</ListItem>
        <ListItem>50+ PreBuild websites</ListItem>
        <ListItem>Premimun Plugin</ListItem>{" "}
      </List>
      <Button>Join Now</Button>
    </Container>
  )
}

export default PriceCard
