import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Button } from '@/components/Button';
import { clearMatrix } from '@/redux/slices/gridSlice';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
`;

export const ButtonContainer = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Button onClick={() => dispatch(clearMatrix())}>Clear field</Button>
      <Button>Build path</Button>
    </Wrapper>
  );
};
