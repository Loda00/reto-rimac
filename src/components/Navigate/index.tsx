import { Fragment, type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowLeft from 'assets/arrow-left-disabled.svg'

import './style.scss'

export interface IFlow {
  name: string;
  path: string;
  id: number
}

interface IPropsNavigate {
  flow: Array<IFlow>;
  currentPath: string;
  step: string;
  prevPath?: string
}

const Navigate: FC<IPropsNavigate> = ({ flow, currentPath, step, prevPath }) => {

  const navigate = useNavigate()

  return (
    <>
      <div className='c_navigate'>
        {flow.map(({ name, path }: IFlow, i) => (
          <Fragment key={i}>
            {i > 0 && <div className={`c_navigate__gap ${path === currentPath ? 'c_navigate__active' : ''}`}>- - - -</div>}
            <div className={`c_navigate__number ${path === currentPath ? 'c_navigate__active' : ''}`}>{i + 1}</div>
            <div className={`c_navigate__name ${path === currentPath ? 'c_navigate__activeName' : ''}`}>{name}</div>
          </Fragment>
        ))}
      </div>
      <div className='c_navigate__mobile'>
        <img src={ArrowLeft} alt="" onClick={() => prevPath && navigate(prevPath)}/>
        <span className='lato-black'>PASO {step} DE {flow.length}</span>
        <div className='c_navigate__bar'>
          <div style={{ width: `${step === '1' ? '50%' : '100%'}` }} />
        </div>
      </div>
    </>
  )
}

export default Navigate