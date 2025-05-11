import { } from 'react'
import type { FC, ReactNode } from 'react';
import Logo from 'assets/rimac.svg'
import LogoWhite from 'assets/rimac-white.svg'
import Phone from 'assets/phone.svg'

import './style.scss'
import Line from 'src/components/Line';

interface IProps {
  children: ReactNode | ReactNode[]
}

const Wrapper: FC<IProps> = ({ children }) => {

  return (
    <div className='wrapper'>
      <div className="header layout__spacing">
        <div className='header__content'>
          <div className='header__logo'>
            <img src={Logo} alt="log_rimac" />
          </div>
          <div className='header__contact'>
            <span className='header__message'>¡Compra por este medio!</span>
            <img src={Phone} alt="phone" />
            <span className='header__phone'>(01) 411 6001</span>
          </div>
        </div>
      </div>
      <div className='body layout__spacing'>
        {children}
      </div>
      <div className='footer layout__spacing'>
        <img src={LogoWhite} alt="logo_white" />
        <Line />
        <span>© {new Date().getFullYear()} RIMAC Seguros y Reaseguros.</span>
      </div>
    </div>
  )
}

export default Wrapper