import { ButtonContainer } from '@/components/ButtonContainer';
import { Grid } from '@/components/Grid';

import { Info, Wrapper } from './appStyle';
import { Description } from './components/Description';

export const App = () => {
  return (
    <div className="App">
      <Wrapper>
        <Info>
          <Description />
          <ButtonContainer />
        </Info>
        <Grid />
      </Wrapper>
    </div>
  );
};

export default App;
