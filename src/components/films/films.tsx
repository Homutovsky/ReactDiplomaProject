import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { imgStyle, wrapperStyle, divStyle, h4Style, postBlock, styleDiv, inputStyle } from '../common/style.styled';
import { addFilmsInArr } from '../redux/reducer/filmsSlice';
import { useTheme } from '../theme/ThemeProvider';
// import { CarouselComponent } from './carousel/carousel';


export const Films = () => {
  const dispatch = useDispatch()
  const currentTheme = useTheme()
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const [searchResult, setSearch] = useState<any>([])
  const getSearch = (event:any) => {
    if (event.code === "Enter" && inputValue !== "") {
      const getFilmByName = async () => {
        try {
          let upperSearchKey = inputValue.split('')[0].toUpperCase() + inputValue.slice(1, inputValue.length)
          const responce = await axios.get(`https://api.kinopoisk.dev/movie?field=name&search=${upperSearchKey}&token=FSXPQXQ-36BMCB3-Q3NNZNY-2XH0CGJ`)
          if (responce.data.docs.length) {
            setSearch(responce)
            navigate(`/foundFilms/${searchResult.data.docs[0].name}`)
          } else {
            navigate(`/errorPage`)
          }

        }
        catch (error) {
      }
    }
    getFilmByName()  
    }
  }
  const posts = useSelector((state:any) => state?.films?.filmsArr?.data)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    fetch(`https://api.kinopoisk.dev/movie?field=rating.kp&search=8-10&field=year&search=2022&sortField=year&sortType=1&limit=80&token=FSXPQXQ-36BMCB3-Q3NNZNY-2XH0CGJ`)
  .then(response => response.json())
  .then(json => dispatch(addFilmsInArr({data:json.docs})))
  },[])
  

  return (
      <>
        {/* <CarouselComponent></CarouselComponent> */}
        <div style={{backgroundImage: currentTheme.theme.backgroundImage}} className={'background'}></div>
        <div  style={{...styleDiv, position:'relative', zIndex:'1'}}>
        <input onKeyDown={getSearch} onChange={(event) => setInputValue(event.target.value)} value={inputValue} type="text" style={inputStyle}/>
        <div style={wrapperStyle}>
          {posts?.map((item:any) => ( 
                  <Link key={item.id} to={`/films/${item.id}`} style={{...postBlock, color: currentTheme.theme.color}}>
                    <h3 style={h4Style}>
                      {item.name}
                    </h3>
                    <div style={divStyle}>
                      <img style={imgStyle} src={`${item.poster.previewUrl}`} alt="poster"></img>
                    </div>
                  </Link>
            ))}
        </div>
        </div>
      </>
  )
}
