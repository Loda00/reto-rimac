import type { ChangeEvent } from "react"

export interface IPropsCheck {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultChecked: boolean;
  id: string;
  label?: string;
  name?: string;
  theme?: ThemeCheck;
}

export type ThemeCheck = 'theme01' | 'theme02'