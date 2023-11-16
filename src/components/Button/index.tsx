import { ButtonHTMLAttributes, FC } from 'react';

import { StyledButton } from './style';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...otherProps
}) => <StyledButton {...otherProps}>{children}</StyledButton>;
