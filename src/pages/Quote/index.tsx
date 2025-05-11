import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { uid } from 'uid'
import { useNavigate } from 'react-router-dom'
import Comeback from 'components/Comeback'
import ForMe from 'assets/for-me.svg'
import ForOthers from 'assets/for-others.svg'
import Home from 'assets/home.svg'
import type { For } from 'interfaces/pages/IQuote'
import Card from 'components/Card'
import Slider from 'components/Slider'
import { usePlans, type IDataPlans } from 'api/usePlans'
import { useMyContext } from 'context/useContext'
import { calcDiscount, diferenciaEnAnios, formatDate } from 'utils'

import './style.scss'
import Navigate from 'src/components/Navigate'
import { pathsNavigate } from 'src/const'

const Quote = () => {
  const navigate = useNavigate()
  const [check, setCheck] = useState<For>('')
  const [data, setData] = useState<Array<React.ReactNode>>([])

  const { _user, actFor, actPlan } = useMyContext()

  const { data: listPlans, isFetching } = usePlans()

  const hydrateCard = (ageUser: number) => {
    if (isFetching) return

    let applyDiscount: boolean
    const cards = listPlans.list
    .filter((item: IDataPlans) => item.age > ageUser)
    .map(({ description, name, price }: IDataPlans, i: number) => {
      applyDiscount = check === 'FOR_OTHERS'
      return (
        <Card
          key={i}
          id={uid()}
          icon={Home}
          type='big'
          textBadge={i === 1 ? 'Plan recomendado': ''}
          title={name}
          price={applyDiscount ? calcDiscount(price) : price}
          list={description}
          onClick={() => {
            actFor(check)
            actPlan({ plan: name, price: applyDiscount ? String(calcDiscount(price)) : String(price) })
            navigate('/sumary')
          }}
        />
      )
    })

    setData([...cards])
  }

  const validAge = useMemo(() => {
    const today = new Date();
    const todayFormat = formatDate(today)

    const diffAge = diferenciaEnAnios(_user.birthDay, todayFormat)
    hydrateCard(diffAge)
  }, [check])

  useEffect(() => {
    validAge
  }, [listPlans, isFetching])

  useEffect(() => {
    if (!_user.name) navigate('/')
  }, [check, _user])

  return (
    <>
      <Navigate flow={pathsNavigate} currentPath='/quote' step='1' prevPath='/' />
      <div className='quote'>
        <Comeback path='/' />
        <div className='quote__title lato-bold'>{_user.name} ¿Para quién deseas <br /> cotizar?</div>
        <div className='quote__subtitle lato-regular'>Selecciona la opción que se ajuste más a tus necesidades.</div>
        <div className='quote__forwho'>
          <Card
            onChange={() => setCheck('FOR_ME')}
            defaultChecked={check === 'FOR_ME'}
            id={uid()}
            icon={ForMe}
            type='litle'
            title='Para mi'
            description='Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
          />
          <Card
            onChange={() => setCheck('FOR_OTHERS')}
            defaultChecked={check === 'FOR_OTHERS'}
            id={uid()}
            icon={ForOthers}
            type='litle'
            title='Para alguien más'
            description='Realiza una cotización para uno de tus familiares o cualquier persona.'
          />
        </div>
        <br />
        {check && (
          <>
            <div className='quote__plans quote__slider-desktop'>
              <div>
                {data.map((item, i) => <Fragment key={i}>{item}</Fragment>)}
              </div>
            </div>
            <div className='quote__slider-mobile'>
              <Slider data={data} />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Quote