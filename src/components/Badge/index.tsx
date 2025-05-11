import {} from 'react'
import classNames from 'classnames';
import type { FC } from 'react';
import type { IPropsBadge } from 'src/interfaces/components/IBadge';

import './style.scss'

const Badge: FC<IPropsBadge> = ({ text, theme }) => {

  const themes = classNames({
    c_badge: true,
    c_badge__primary: theme === 'badge__primary',
    c_badge__aqua: theme === 'badge__aqua'
  })

  return (
    <div className={themes}>{text}</div>
  )
}

export default Badge