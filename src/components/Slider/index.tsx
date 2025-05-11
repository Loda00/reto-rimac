import { useState, type FC } from 'react'

import ArrowLeft from 'assets/arrow-left.svg'
import ArrowRight from 'assets/arrow-right.svg'
import ArrowLeftDisabled from 'assets/arrow-left-disabled.svg'
import ArrowRightDisabled from 'assets/arrow-right-disabled.svg'
import type { IPropsSlider } from 'src/interfaces/components/ISlider'

import './style.scss'

const Slider: FC<IPropsSlider> = ({ data }) => {
  console.log(data);

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToImage = (direction: string): void => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      }
    }
  }

  return (
    <div className="c_slider">
      <div className="c_slider__cards">
          {data[currentIndex]}
      </div>
      <div className='slider__arrows'>
        <img
          onClick={() => scrollToImage('prev')}
          src={currentIndex === 0 ? ArrowLeftDisabled : ArrowLeft}
          alt="arrow_left"
        />
        <span className='lato-regular'>{`${currentIndex + 1} / ${data.length}`}</span>
        <img
          onClick={() => scrollToImage('next')}
          src={currentIndex === data.length - 1 ? ArrowRightDisabled : ArrowRight}
          alt="arrow_right"
        />
      </div>
    </div>
  )
}

export default Slider