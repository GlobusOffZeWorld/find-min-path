import styled from 'styled-components';

export const StyledCell = styled.button<{ $color: string }>`
  background-color: ${props => props.$color};
  width: 100%;
  height: 100%;
  border: none;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    outline: 2px solid ${props => props.$color};
  }
`;
