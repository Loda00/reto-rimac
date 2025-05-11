import { type FC } from 'react'
import type { IPropsLine } from 'src/interfaces/components/ILine'

import './style.scss'


const Line: FC<IPropsLine> = ({
  marginBottom,
  marginTop
}) => {
  return (
    <div className='c_line' style={{ marginTop, marginBottom }}></div>
  )
}

export default Line