import styled from 'styled-components'

function App() {
  return (
    <StyledApp>
      Hi!
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
