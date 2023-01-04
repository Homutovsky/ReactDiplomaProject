import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { buttonCloseStyle, divForMap, inputStyle } from '../common/style.styled'

import ReactPlayer from 'react-player'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useTheme } from '../theme/ThemeProvider'
import '../.././App.css';
import { useDispatch } from 'react-redux'
import { addFilmFromSearchInArr, addFilmToFavorites, FilmArr, removeFilmToFavorites } from '../redux/reducer/filmsSlice'
import { AppDispatch } from '../redux/store'
import { FilmType } from '../types.ts/types'


export const Film = () => {
  const dispatch = useDispatch<AppDispatch>()
  const params = useParams()
  const currentTheme = useTheme()
  const navigate = useNavigate()

  

  const [film, setFilm] = useState<any>()
  const getFilmById = async () => {
    try {
      const response = await axios.get(`https://api.kinopoisk.dev/movie?field=id&search=${params.id}&token=FSXPQXQ-36BMCB3-Q3NNZNY-2XH0CGJ`)
      setFilm(response.data)
    }
    catch (error) {
      navigate(`/errorPage`)
  }
}

  useEffect(() => {
    getFilmById()
  },[])

  const [addFilm, setAddFilm] = useState<boolean>(false)
  const pressFilmToFavorites = () => {
    setAddFilm((prev:boolean) => !prev)
    dispatch(addFilmToFavorites(film))
    
  }
  const pressFilmRemoveFromFavorites = () => {
    setAddFilm((prev:boolean) => !prev)
    dispatch(removeFilmToFavorites(film.id))
  }


  const [inputValue, setInputValue] = useState('')
  const getSearch = async (event:any) => {
    if (event.code === "Enter" && inputValue !== "") {
      
        try {
          let upperSearchKey = inputValue.split('')[0].toUpperCase() + inputValue.slice(1, inputValue.length)
          const responce = await axios.get(`https://api.kinopoisk.dev/movie?field=name&search=${upperSearchKey}&token=FSXPQXQ-36BMCB3-Q3NNZNY-2XH0CGJ`)
          if (responce.data.docs.length) {
            dispatch(addFilmFromSearchInArr(responce.data.docs))
            navigate(`/foundFilms/${responce.data.docs[0].name}`)
          } 
        }
        catch (error) {
          navigate(`/errorPage`)
      }
    }
  }

  return (
    <>
      <div className={'background'}></div>
        <div style={{position:'relative', zIndex:'1'}}>
        <div style={{display:'flex', justifyContent:'flex-end', maxWidth:'1350px', margin:'0 auto'}}>
          <input onKeyDown={getSearch} onChange={(event) => setInputValue(event.target.value)} value={inputValue} type="text" style={inputStyle}/>
        </div>
        <div style={{display:'flex', columnGap:'50px', maxWidth:'1350px', margin:'0 auto', justifyContent:'center', color: currentTheme.theme.color}}>
          <div>
            <h3 style={{textAlign:'center', display:'flex', flexWrap:'wrap', maxWidth:'360px'}}>
              {film?.name || film?.alternativeName}({film?.year})
            </h3>
            <img src={`${film?.poster?.previewUrl}`} alt="poster"></img>
          </div>
          <div style={{display:'flex', flexDirection:'column', marginTop:'51px', maxWidth:'400px'}}>
              <Box
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >
                      <Typography component="legend">Rating</Typography>
                      <Rating name="read-only" value={Math.round(film?.rating?.imdb/2)} readOnly />
              </Box>
              <div style={divForMap}>
                  <h3>страна: </h3>
                  {film?.countries?.map((item:any) => ( 
                        <p key={item?.name}>/ {item?.name}</p>    
                        ))}
              </div>
              <div style={divForMap}>
                  <h3>жанр: </h3>
                  {film?.genres?.map((item:any) => ( 
                      <p key={item?.name}> / {item?.name} </p>    
                      ))}
              </div>
              <h3>описание :</h3>
              <p>
                  {film?.description}
              </p>
              <h3>премьера({film?.premiere?.country}) : {film?.premiere?.world?.split('').splice(0, 10).join('')}</h3>
              {!addFilm ? <Fab onClick={pressFilmToFavorites} size="medium" color="primary" aria-label="add">
                <AddIcon />
              </Fab> : <button onClick={pressFilmRemoveFromFavorites} style={buttonCloseStyle}></button>}
          </div>
        </div>
        <div style={{marginTop:'60px', display:'flex', justifyContent:'center'}}>
        {<ReactPlayer width='807px' height='453px' url = { film?.videos?.trailers?.[0]?.url}  />}
        </div>
    </div> 
  </>
  )
}
