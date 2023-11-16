import styled from 'styled-components';

export const Wrapper = styled.button<{ $isPressed?: boolean }>`
  background-color: #00000060;
  border-radius: 28px;
  border: none;
  color: white;
  width: fit-content;
  height: fit-content;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #49494961;
  }
`;
