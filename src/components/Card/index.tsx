import { type FC } from 'react'
import Check from 'components/Check'
import Badge from 'components/Badge';
import Button from 'components/Button';
import Line from 'components/Line';
import type { IPropsCard } from 'interfaces/components/ICard';

import './style.scss'

const Card: FC<IPropsCard> = ({
  onChange,
  defaultChecked,
  id,
  icon,
  title,
  description,
  type,
  textBadge,
  list,
  price,
  onClick,
}) => {
  return (
    <label className={`card ${type === 'big' && 'card__big'}`} htmlFor={id}>
      <div className='card__head'>
        {type === 'litle' ? (
          <div className='card_check'>
            <Check
              onChange={(e) => {
                if (onChange) onChange(e)
              }}
              defaultChecked={defaultChecked || false}
              theme='theme02'
              id={id}
            />
          </div>
        ) : (
          <div className='card_badge'>
            {textBadge && <Badge text={textBadge} theme='badge__aqua' />}
          </div>
        )}
        <div className={`${type === 'big' ? 'card__plan' : ''}`}>
          <img className='card__icon' src={icon} alt="for_me" />
          <div className='card__title lato-black'>{title}</div>
        </div>
        {type === 'litle' && <div  className='card__description lato-regular'>{description}</div>}
      </div>
        {type === 'big' && (
          <div className='card__info'>
            <div className='card__plan lato-black'>COSTO DEL PLAN</div>
            <div className='card__price lato-black'>${price} al mes</div>
            <Line marginBottom='24px' marginTop='24px' />
            <ul className='card__list'>
              {list?.map((item, i) => (
                <li className='lato-regular' key={i}>{item}</li>
              ))}
            </ul>
            <div className='card__button'>
              <Button theme='red' label='Seleccionar Plan' onClick={(e) => {
                if (onClick) onClick(e)
              }} />
            </div>
          </div>
        )}
    </label>
  )
}

export default Card