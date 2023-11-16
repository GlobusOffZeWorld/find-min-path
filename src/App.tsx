import styled from 'styled-components';

import { ButtonContainer } from '@/components/ButtonContainer';
import { Grid } from '@/components/Grid';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  /* background-color: #a18484; */
  background: linear-gradient(135deg, #a18484, #8aa9c0);
`;

export const App = () => {
  return (
    <div className="App">
      <Wrapper>
        <Grid />
        <ButtonContainer />
      </Wrapper>
    </div>
  );
};

export default App;
