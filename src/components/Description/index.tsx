import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import useMediaQuery from 'usehooks-ts/dist/esm/useMediaQuery/useMediaQuery';

import doubleTouch from '@/assets/icons/double-touch.png';
import errorImage from '@/assets/icons/error.png';
import leftClickImage from '@/assets/icons/left-click.png';
import rightClickImage from '@/assets/icons/right-click.png';
import timer from '@/assets/icons/timer.png';
import touch from '@/assets/icons/touch.png';
import { devices } from '@/constants/devices';
import { RootState } from '@/redux/store';

import { Article, ResizedImage, StyledH1, StyledH2, Wrapper } from './style';

export const Description = () => {
  const isLargerThan1024 = useMediaQuery(`${devices.tablet}`);

  const { time, error } = useSelector((state: RootState) => state.info);

  const desktopArticles = useMemo(
    () => (
      <>
        <Article>
          <ResizedImage src={leftClickImage} />
          <StyledH2>*Click&Move* left mouse button to create/remove wall</StyledH2>
        </Article>
        <Article>
          <ResizedImage src={rightClickImage} />
          <StyledH2>
            *Double click* / *Click right mouse button* to create/remove start/end
          </StyledH2>
        </Article>
      </>
    ),
    []
  );

  const mobileArticles = useMemo(
    () => (
      <>
        <Article>
          <ResizedImage src={touch} />
          <StyledH2>*Touch* to create/remove wall</StyledH2>
        </Article>
        <Article>
          <ResizedImage src={doubleTouch} />
          <StyledH2>*Double touch* to create/remove start/end</StyledH2>
        </Article>
      </>
    ),
    []
  );

  return (
    <Wrapper>
      <StyledH1>Find min path test app for elinext</StyledH1>
      {isLargerThan1024 ? desktopArticles : mobileArticles}
      <Article>
        <ResizedImage src={timer} />
        <StyledH2>Time: {time}ms</StyledH2>
      </Article>
      {error && (
        <Article>
          <ResizedImage src={errorImage} />
          <StyledH2>{error}</StyledH2>
        </Article>
      )}
    </Wrapper>
  );
};
