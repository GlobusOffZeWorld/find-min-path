import { ButtonHTMLAttributes, FC } from 'react';

import { Wrapper } from './style';

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
