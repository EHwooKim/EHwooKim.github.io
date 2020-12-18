import styled from 'styled-components'
import ChristmasBox from './components/ChristmasBox/ChristmasBox'

function App() {
  return (
    <StyledApp>
      <ChristmasBox/>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100vh;
  background: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default App;
