import styled from "styled-components";
import bg from './images/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './components/Orb/Orb'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <AppStyled bg={bg} className="App">
      <Orb/>
      <MainLayout>
        <Navigation />
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg}); 
  position: relative;
`;

export default App;
