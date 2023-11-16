import { ButtonHTMLAttributes, FC } from 'react';

import { StyledButton } from './style';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...otherProps
}) => {
  return (
    <StyledButton
      $isPressed
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};
