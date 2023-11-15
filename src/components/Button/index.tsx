import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button<{ $isPressed?: boolean }>`
  background-color: black;
  border-radius: 20px;
  border: none;
  color: white;
  width: fit-content;
  padding: 15px 20px;
  font-size: 20px;
  cursor: pointer;
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
