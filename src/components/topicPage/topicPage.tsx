import React, { useState, useEffect } from 'react';
import Carousel from '../carousel/carousel'
import { styleDiv, wrapperStyle } from '../common/style.styled';
import { useTheme } from '../theme/ThemeProvider';

const TOKEN = 'FSXPQXQ-36BMCB3-Q3NNZNY-2XH0CGJ'

export const TopicPage = () => {
  const currentTheme = useTheme()
    
  const [popularFilms, setPopularFilms] = useState([]);
  const [films, setFilms] = useState([]);
  const [cartoones, setCartoones] = useState([]);
  const [anime, setAnime] = useState([]);
  const [serials, setSerials] = useState([]);

  useEffect(() => {
    fetch(`https://api.kinopoisk.dev/movie?field=rating.kp&search=8-10&sortField=rating.kp&sortType=-1&limit=20&token=${TOKEN}`)
      .then(response => response.json())
      .then(json => setPopularFilms(json.docs));

    fetch(`https://api.kinopoisk.dev/movie?field=rating.kp&search=8-10&field=typeNumber&search=1&sortField=year&sortType=-1&limit=20&token=${TOKEN}`)
      .then(response => response.json())
      .then(json => setFilms(json.docs));

      fetch(`https://api.kinopoisk.dev/movie?field=rating.kp&search=8-10&field=typeNumber&search=3&sortField=year&sortType=-1&limit=20&token=${TOKEN}`)
      .then(response => response.json())
      .then(json => setCartoones(json.docs))

      fetch(`https://api.kinopoisk.dev/movie?field=rating.kp&search=8-10&field=typeNumber&search=4&sortField=year&sortType=-1&limit=20&token=${TOKEN}`)
      .then(response => response.json())
      .then(json => setAnime(json.docs))

      fetch(`https://api.kinopoisk.dev/movie?field=rating.kp&search=8-10&field=typeNumber&search=2&sortField=year&sortType=-1&limit=20&token=${TOKEN}`)
      .then(response => response.json())
      .then(json => setSerials(json.docs))
  },[])

console.log('films', films)

  return (
    <div>
        <div style={{backgroundImage: currentTheme.theme.backgroundImage}} className={'background'}></div>
        <div style={{position:'relative', zIndex:'1'}}>
            <Carousel items={popularFilms} header={'Popular Films'}/>
            <Carousel items={films} header={'Films'}/>
            <Carousel items={cartoones} header={'Cartoones'}/>
            <Carousel items={anime} header={'Anime'}/>
            <Carousel items={serials} header={'Series'}/>
        </div>
    </div>
  )
}
