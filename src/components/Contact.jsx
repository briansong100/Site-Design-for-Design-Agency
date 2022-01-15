import React from 'react'
import styled from 'styled-components'
import Phone from '../components/img/phone.png'
import Map from '../components/img/map.png'
import Send from '../components/img/send.png'

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>Questions?<br />Let's Get in Touch</Title>
          <Form >
            <LeftForm>
              <Input placeholder='Your Name' />
              <Input placeholder='Your Email' />
              <Input placeholder='Subject' />
            </LeftForm>
            <RightForm>
              <TextArea placeholder='message' />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Image src={Map} />
            <Text>4101 GCR, Sultan St. Mandaluyong City, MM, Philippines</Text>
          </AddressItem>
          <AddressItem>
            <Image src={Phone} />
            <Text>(63) 977-393-4168</Text>{" "}
            <Text>(63) 977-393-4168</Text>
          </AddressItem>
          <AddressItem>
            <Image src={Send} />
            <Text>regis100@gmail.com</Text>{" "}
            <Text>regis100@gmail.com</Text>
          </AddressItem>
        </AddressContainer>

      </Wrapper>
    </Container >
  )
}

export default Contact

const Container = styled.div`
  height: 90%;
`
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and ( max-width:480px) {
  flex-direction:column;
  }
`
const FormContainer = styled.div`
  width: 50%;
  @media only screen and ( max-width:480px) {
  width: 100%;
  }
`
const Title = styled.h1`
  margin:20px ;
  margin-top: 0;
  @media only screen and ( max-width:480px) {
    margin: 20px;
  }
`
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and ( max-width:480px) {
    flex-direction:column;
  }
`

const LeftForm = styled.div`
  width:50%;
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  
  @media only screen and ( max-width:480px) {
    align-items: center;
    justify-content: center;
    width:100%;
  }
`
const RightForm = styled.div`
  height: 100%;
  width:50%;
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  @media only screen and ( max-width:480px) {
    align-items: center;
    justify-content: center;
    width:100%;
  }
`
const Input = styled.input`
  padding: 10px;
  width: 80%;
  margin-bottom: 20px;
  @media only screen and ( max-width:480px) {
    width: 92%;
  }

`
const TextArea = styled.textarea`
  padding: 10px;
  width: 80%; 
  height: 55%;
  @media only screen and ( max-width:480px) {
    width: 92%;
  } 
`
const Button = styled.button`
  cursor: pointer;
  margin-top:10px;
  width:40%;
  min-width:100px;
  background-color:crimson;
  font-size: 16px;
  border:none;
  border-radius:10px;
  color: white;
  padding: 10px 20px;
  @media only screen and ( max-width:480px) {
    width: 93%;
    font-size: 12px;  
    padding: 10px 10px;
    margin-top:10px;      
  }
`

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  margin-top:50px;
  @media only screen and ( max-width:480px) {
    width: 100%;
    margin-top:30px;
  }
`
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin-bottom: 50px;
  @media only screen and ( max-width:480px) {
    margin-bottom: 20px;
  }
`
const Image = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and ( max-width:480px) {
    width:15px;
  }

`
const Text = styled.span`
  font-size: 15px;
  margin-right:15px;
`