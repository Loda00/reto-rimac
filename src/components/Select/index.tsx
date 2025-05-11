import { useState, useRef } from 'react'
import type { FC } from 'react';
import Arrow from 'assets/arrow.svg'
import type { IObject, IPropsSelect } from 'src/interfaces/components/ISelect';

import './style.scss'

const Select : FC<IPropsSelect> = ({
  options,
  selected,
  placeholder = 'Seleccionar',
  onChange,
  showLabel = true,
  disabled
}) => {
  const [isOpen, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<IObject | undefined>(selected)
  const refDropDown = useRef(null)

  const closeDropDown = () => {
    if (isOpen && !selectedItem) {
      setOpen(false)
    }
  }

  const toggleDropdown = () => setOpen(!isOpen)

  const handleItemClick = (item: IObject) => {
    setSelectedItem(item)
    onChange(item)
    setOpen(false)
  }

  const showValueDefault = () => {
    const value: IObject | undefined = options.find((item: IObject) => item.id === selectedItem?.id)

    return (
      <div className="c_dropdown_selected">
        {showLabel && <p className="label">{value?.label}</p>}
        <p className="text">{value?.text}</p>
      </div>
    )
  }

  return (
    <div className='c_dropdown' tabIndex={0} ref={refDropDown}>
      <button type='button' disabled={disabled} className='c_dropdown_header' onClick={toggleDropdown} onBlur={() => closeDropDown()}>
        {selectedItem?.id ? showValueDefault(): placeholder}
        <img src={Arrow} alt="arrow" className={`${!isOpen && 'rotate_arrow'}`}/>
      </button >
      <div className={`c_dropdown_body ${isOpen && 'open'}`}>
        {options.map((item: IObject, i: number) => (
          <div className="c_dropdown_item" onClick={() => handleItemClick(item)} id={item.id} key={i}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Select