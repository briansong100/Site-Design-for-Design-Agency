import styled, { css } from 'styled-components';
import Feature from './components/Feature';
import Intro from './components/intro';
import Service from './components/Service';
import Navbar from './components/Navbar'
import Price from './components/Price';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Home from './pages/Home';

function App() {
  const isSmallScreen = window.screen.width <= 480;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        {!isSmallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>

    </>
  );
}

export default App;
const Container = styled.div`
  height: 100vh;
  overflow: hidden;  
  position: relative;
`;

const Shape = css`
  width: 100%;
  height:100%;
  top: 0;
  left:0;
  position:absolute;
  z-index:-1;
  `
const IntroShape = styled.div`
  ${Shape};
  clip-path: polygon(70% 0, 100% 0%, 100% 100%, 51% 100%);
  background-color: crimson;
  `
const FeatureShape = styled.div`
  ${Shape};
  clip-path: polygon(0 0, 51% 0%, 32% 100%, 0% 100%);
  background-color: pink;
`
const ServiceShape = styled.div`
  ${Shape};
  clip-path: polygon( 0% 0%, 32% 0%, 32% 100%, 0% 100%);
  background-color: #602892 ;
`
const PriceShape = styled.div`
  ${Shape};
  clip-path: polygon( 32% 0%, 100% 0%, 100% 100%, 51% 100%);
  background-color: crimson ;
`  