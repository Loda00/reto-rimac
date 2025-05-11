import type { ChangeEvent } from "react";

export interface IPropsInput {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  disabled: boolean;
  error?: string;
}