import type { ChangeEvent, MouseEvent, ReactNode } from "react";

export interface IPropsCard {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  defaultChecked?: boolean;
  id: string
  icon: string;
  type: 'litle' | 'big';
  title: string;
  description?: string;
  textBadge?: string;
  list?: Array<ReactNode | ReactNode[]>
  price?: number;
}