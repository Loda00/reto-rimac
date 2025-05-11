import type { FC } from 'react';

import Select from 'components/Select'
import Input from 'components/Input';
import type { IPropsSelectInput } from 'interfaces/components/ISelectInput';
import './style.scss'

const SelectInput: FC<IPropsSelectInput> = ({
  onChangeInput,
  valueInput,
  placeHolderInput,
  onChangeSelect,
  selected,
  options,
  placeHolderSelect,
  disabledInput,
  disabledSelect,
  error
}) => {
  return (
    <div className="c_selectInput">
      <Select
        onChange={onChangeSelect}
        placeholder={placeHolderSelect}
        showLabel={false}
        selected={selected}
        options={options}
        disabled={disabledSelect}
      />
      <Input
        onChange={onChangeInput}
        placeholder={placeHolderInput}
        value={valueInput}
        disabled={disabledInput}
        error={error}
      />
    </div>
  )
}

export default SelectInput