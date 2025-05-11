export interface IObject {
  label: string
  value: string
  id: string
  text: string
}

export interface IPropsSelect {
  onChange: (item: IObject) => void
  options: Array<IObject>
  selected?: IObject
  placeholder?: string
  showLabel?: boolean
  disabled?: boolean
}