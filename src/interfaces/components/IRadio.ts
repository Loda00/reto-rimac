import type { ChangeEvent } from "react"

export interface IPropsRadio {
  label?: string
  name?: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type?: string
}