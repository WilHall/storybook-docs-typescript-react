import React, { FunctionComponent, ReactNode } from 'react';

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

export const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
