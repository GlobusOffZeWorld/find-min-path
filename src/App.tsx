import styled from 'styled-components';

import { ButtonContainer } from '@/components/ButtonContainer';
import { Grid } from '@/components/Grid';

import { Description } from './components/Description';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  background: linear-gradient(135deg, #a18484, #8aa9c0);
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const App = () => {
  return (
    <div className="App">
      <Wrapper>
        <Description />
        <Main>
          <Grid />
          <ButtonContainer />
        </Main>
      </Wrapper>
    </div>
  );
};

export default App;
