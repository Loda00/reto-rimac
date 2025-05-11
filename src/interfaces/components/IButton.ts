import type { MouseEvent } from "react";

export interface IPropsButton {
  label: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  theme: ThemeButton;
}

type ThemeButton = 'black' | 'red'