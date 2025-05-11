import type { IFlow } from "components/Navigate";
import type { IDocument } from "interfaces/components/ISelectInput";

export const documentOptions: Array<IDocument> = [
  {
    id: '1',
    label: 'DNI',
    value: 'DNI',
    text: 'DNI'
  },
  {
    id: '2',
    label: 'CE',
    value: 'CE',
    text: 'CE'
  }
]

export const pathsNavigate: IFlow[] = [
  {
    name: 'Planes y coberturas',
    path: '/quote',
    id: 1
  },
  {
    name: 'Resumen',
    path: '/sumary',
    id: 2
  }
]