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
  background-color: gray;
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
