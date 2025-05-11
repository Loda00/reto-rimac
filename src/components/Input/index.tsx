import { type FC } from 'react'
import type { IPropsInput } from 'interfaces/components/IInput'
import './style.scss'

const Input: FC<IPropsInput> = ({
  onChange,
  placeholder,
  value = '',
  disabled,
  error
}) => {

  return (
    <div className='c_input'>
      <input disabled={disabled} className='c_input__form' onChange={onChange} />
      <span className={value.length === 0 ? '' : 'fill'}>{placeholder}</span>
      {error && <p className='c_input__error'>{error}</p>}
    </div>
  )
}

export default Input