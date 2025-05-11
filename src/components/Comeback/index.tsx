import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Return from 'assets/return.svg'
import type { IPropsComeback } from 'src/interfaces/components/IComeback'

import './style.scss'

const Comeback: FC<IPropsComeback> = ({ path = '' }) => {
  const navigate = useNavigate()
  return (
    <div className='c_comeback' onClick={() => {
      if (path) navigate(path)
    }}>
      <img src={Return} alt="come_back" />
      <span className='c_comeback__text lato-bold'>Volver</span>
    </div>
  )
}

export default Comeback