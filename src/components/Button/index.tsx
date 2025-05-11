import { type FC } from 'react'
import classnames from 'classnames'

import './style.scss'
import type { IPropsButton } from 'src/interfaces/components/IButton'

const Button: FC<IPropsButton> = ({
  label,
  onClick,
  theme
}) => {

  const classes = classnames({
    c_button: true,
    c_button__back: theme === 'black',
    c_button__red: theme === 'red',
  })

  return (
    <button className={classes} type='submit' onClick={onClick}>{label}</button>
  )
}

export default Button