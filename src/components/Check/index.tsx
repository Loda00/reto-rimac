import type { FC } from 'react'
import IconCheck from 'assets/check-white.svg'
import type { IPropsCheck } from 'src/interfaces/components/ICheck'

import './style.scss'
import classnames from 'classnames';

const Check : FC<IPropsCheck> = ({
  onChange,
  defaultChecked = true,
  id,
  label,
  name,
  theme = 'theme01'
}) => {

  const classes = classnames({
    c_check__theme1: theme === 'theme01',
    c_check__theme2: theme === 'theme02',
  })

  return (
    <div className="c_check">
      <div className={`c_check__form ${classes}`}>
        <input
          type="checkbox"
          name={id || name}
          onChange={onChange}
          id={id}
          checked={defaultChecked}
        />
        <label htmlFor={id}>
          <img src={IconCheck} alt="check"/>
        </label>
      </div>
      {label && (
        <label className='c_check__label' htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  )
}

export default Check