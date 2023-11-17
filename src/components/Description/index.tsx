import { useSelector } from 'react-redux';

import leftClickImage from '@/assets/icons/left-click.png';
import rightClickImage from '@/assets/icons/right-click.png';
import timer from '@/assets/icons/timer.png';
import { RootState } from '@/redux/store';

import { Article, ResizedImage, StyledH1, StyledH2, Wrapper } from './style';

export const Description = () => {
  const { time, error } = useSelector((state: RootState) => state.info);
  return (
    <Wrapper>
      <StyledH1>Find min path test app for elinext</StyledH1>
      <Article>
        <ResizedImage src={leftClickImage} />
        <StyledH2>Click&Move left mouse button to make/remove wall</StyledH2>
      </Article>
      <Article>
        <ResizedImage src={rightClickImage} />
        <StyledH2>Click right mouse button to make/remove start/end</StyledH2>
      </Article>
      <Article>
        <ResizedImage src={timer} />
        <StyledH2>Time: {time}ms</StyledH2>
      </Article>
      {error && (
        <Article>
          <StyledH2>{error}</StyledH2>
        </Article>
      )}
    </Wrapper>
  );
};
