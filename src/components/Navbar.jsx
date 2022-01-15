import styled from 'styled-components'


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Right>JOIN TODAY
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  height: 50px;
`
const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  justify-content:  space-between;
  align-items: center;
`
const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
`
const Right = styled.button`
  border: 2px solid white;
  padding: 10px 20px;
  background-color:crimson;
  /* height:40px; */
  font-weight: bold;
  color:white;
  border-radius:10px;
  cursor: pointer;  
`
const Logo = styled.h1`
  font-weight: bold;
  text-decoration:underline crimson;
`
const Menu = styled.ul`
  display: flex;
  justify-content:space-between;
  list-style:none;
  @media only screen and ( max-width:480px) {
    display:none;
  }
`
const MenuItem = styled.li`
  padding: 0 10px ;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`
