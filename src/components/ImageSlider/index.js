import React, { Component } from 'react';
import Link from 'gatsby-link';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { canUseDOM } from 'exenv';

import { ACTIVATE_IMAGESLIDER, DISABLE_IMAGESLIDER } from '../../actionTypes';

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
    >
      <svg className='next-arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20">
        <title>Visa nästa bild</title>
        <polygon points="19.43 20 32 10.05 32 9.95 19.43 0 19.25 0 19.25 8.06 0 8.06 0 12.3 19.25 12.3 19.25 20 19.43 20"/>
        </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
    >
      <svg className='prev-arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20">
        <title>Visa förra bilden</title>
        <polygon points="12.57 0 0 9.95 0 10.05 12.57 20 12.75 20 12.75 11.94 32 11.94 32 7.7 12.75 7.7 12.75 0 12.57 0"/>
      </svg>
    </div>
  );
}

class ImageSlider extends React.Component {
  render () {
    const { imageSliders } = this.props;

    const sliderSettings = {
      className: 'image-slider',
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }

    return (        
      <Slider {...sliderSettings} className={imageSliders && !imageSliders.get('isActive') ? 'image-slider inactive' : 'image-slider active'}>
        <div><img src='/media/uploads/ImageSliderImage01.png' alt='Bild 1'/></div>
        <div><img src='/media/uploads/ImageSliderImage02.png' alt='Bild 2'/></div>
        <div><img src='/media/uploads/ImageSliderImage03.png' alt='bild 3'/></div>
      </Slider>
    );
  }
}

const styles = {
  slider: {
    backgroundColor: 'red',
    minHeight: '320px'
  }
}
const mapStateToProps = state => ({
  imageSliders: state.imageSliders
});

export default canUseDOM ? connect(mapStateToProps)(ImageSlider) : ImageSlider;
