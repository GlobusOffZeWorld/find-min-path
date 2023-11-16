import leftClickImage from '@/assets/icons/left-click.png';
import rightClickImage from '@/assets/icons/right-click.png';

import { Article, ResizedImage, Wrapper } from './style';

export const Description = () => {
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
    </Wrapper>
  );
};
