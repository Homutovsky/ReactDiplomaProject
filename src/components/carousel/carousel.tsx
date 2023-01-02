import React, { useState, useEffect } from 'react';
import { Carousel as PrimeCarousel } from 'primereact/carousel';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Link } from 'react-router-dom';
import { imgStyle, wrapperStyle, divStyle, h4Style, postBlock, styleDiv, inputStyle } from '../common/style.styled';
import { useTheme } from '../theme/ThemeProvider';

const responsiveOptions = [
  {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
  },
  {
      breakpoint: '600px',
      numVisible: 2,
      numScroll: 2
  },
  {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
  }
];
const ItemTemplate = (item:any) =>  {
  const currentTheme:any = useTheme()
    return (
            <Link  key={item?.id} to={`/films/${item?.id}`} style={{...postBlock, color: currentTheme.theme.color, }}>
                <h3 style={h4Style}>
                    {item?.name || item?.alternativeName}
                </h3>
                <div style={divStyle}>
                    <img style={imgStyle} src={`${item?.poster?.previewUrl}`} alt="poster"></img>
                </div>
            </Link>
  )
}
const Carousel = ({items, header}:any) => {
  const currentTheme:any = useTheme()
  return(
    <PrimeCarousel 
    value={items} 
    numVisible={5} 
    numScroll={1} 
    responsiveOptions={responsiveOptions} 
    className="carousel" 
    circular
    autoplayInterval={3000} 
    itemTemplate={ItemTemplate} 
    header={<h1 style={{textAlign:'center', color: currentTheme.theme.color}}>{header}</h1>} />
  )
}

export default Carousel