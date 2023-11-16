import { useSelector } from 'react-redux';

import leftClickImage from '@/assets/icons/left-click.png';
import rightClickImage from '@/assets/icons/right-click.png';
import timer from '@/assets/icons/timer.png';
import { RootState } from '@/redux/store';

import { Article, ResizedImage, Wrapper } from './style';

export const Description = () => {
  const { time, error } = useSelector((state: RootState) => state.info);
  return (
    <Wrapper>
      <h1>Find min path test app for elinext</h1>
      <Article>
        <ResizedImage src={leftClickImage} />
        <h2>Click left mouse button to make/remove wall</h2>
      </Article>
      <Article>
        <ResizedImage src={rightClickImage} />
        <h2>Click right mouse button to make/remove start/end</h2>
      </Article>
      <Article>
        <ResizedImage src={timer} />
        <h2>Time: {time}ms</h2>
      </Article>
      <Article>
        <h2>{error}</h2>
      </Article>
    </Wrapper>
  );
};
