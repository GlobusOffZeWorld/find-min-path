import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button<{ $isPressed?: boolean }>`
  background-color: #00000060;
  border-radius: 28px;
  border: none;
  color: white;
  width: fit-content;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #49494961;
  }
`;

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...otherProps
}) => {
  return (
    <Wrapper
      $isPressed
      {...otherProps}
    >
      {children}
    </Wrapper>
  );
};
