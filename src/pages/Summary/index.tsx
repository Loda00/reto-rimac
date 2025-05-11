import Comeback from 'components/Comeback'
import Users from 'assets/users.svg'
import Line from 'components/Line'
import { useMyContext } from 'context/useContext'

import './style.scss'
import { pathsNavigate } from 'src/const'
import Navigate from 'src/components/Navigate'

const Summary = () => {
  const { _user, _numberDocument, _typeDocumet, _plan, _phone } = useMyContext()

  return (
    <>
      <Navigate flow={pathsNavigate} currentPath='/summary' step='2' prevPath='/quote' />
      <div className='summary'>
        <Comeback path='/quote' />
        <div className='summary__title lato-bold'>Resumen del seguro </div>
        <div className='summary__card'>
          <div className='summary__cardTitle lato-black'>Precios calculados para:</div>
          <div className='summary__user'>
            <img src={Users} alt="" />
            <span>{_user.name} {_user.lastName}</span>
          </div>
          <Line marginBottom='16px' marginTop='16px' />
          <div className='summary__cardInfo'>
            <div>Responsable de pago</div>
            <div>{_typeDocumet}: {_numberDocument}</div>
            <div>Celular: {_phone}</div>
          </div>
          <div className='summary__cardInfo'>
            <div>Plan elegido</div>
            <div>{_plan.plan}</div>
            <div>Costo del Plan: ${_plan.price} al mes</div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Summary