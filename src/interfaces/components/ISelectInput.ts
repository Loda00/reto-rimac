import type { ChangeEvent } from 'react';

export interface IPropsSelectInput {
  onChangeSelect: (item: IDocument) => void
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
  valueInput: string
  selected: IDocument
  options: Array<IDocument>
  placeHolderSelect: string;
  placeHolderInput: string;
  disabledSelect: boolean;
  disabledInput: boolean;
  error?: string;
}

export interface IDocument {
  label: string
  value: string
  id: string
  text: string
}
