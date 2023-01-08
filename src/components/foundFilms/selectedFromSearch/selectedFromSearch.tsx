import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ReactPlayer from 'react-player'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useTheme } from '../../theme/ThemeProvider'
import { buttonCloseStyle, divForMap, inputStyle } from '../../common/style.styled';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { addFilmToFavorites, FilmArr, removeFilmToFavorites } from '../../redux/reducer/filmsSlice';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { FilmType } from '../../types.ts/types';

export const SelectedFromSearch = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [post, setPost] = useState<FilmType | undefined>()
  const params = useParams()
  const [error, setError] = useState(false)
  const currentTheme = useTheme()

  const getFilmById = async () => {
    try {
      const responce = await axios.get(`https://api.kinopoisk.dev/movie?field=id&search=${params.id}&token=FSXPQXQ-36BMCB3-Q3NNZNY-2XH0CGJ`)
    setPost(responce.data)
    }
    catch (error) {
      setError(true)
  }
}

useEffect(() => {
  getFilmById()
},[]) 

const [addFilm, setAddFilm] = useState<boolean>(false)
const pressFilmToFavorites = () => {
  setAddFilm((prev:boolean) => !prev)
  dispatch(addFilmToFavorites(post as any))
  
}
const pressFilmRemoveFromFavorites = () => {
  setAddFilm((prev:boolean) => !prev)
  dispatch(removeFilmToFavorites(post?.id as any))
}

  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const getSearch = (event:React.KeyboardEvent) => {
    if (event.code === "Enter" && inputValue !== "") {
      const getFilmByName = async () => {
        try {
          let upperSearchKey = inputValue.split('')[0].toUpperCase() + inputValue.slice(1, inputValue.length)
          const responce = await axios.get(`https://api.kinopoisk.dev/movie?field=name&search=${upperSearchKey}&token=FSXPQXQ-36BMCB3-Q3NNZNY-2XH0CGJ`)
          if (responce.data.docs.length) {
            navigate(`/foundFilms/${responce.data.docs[0].name}`)
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
  
  return (
    <>
      <div className={'background'}></div>
    <div style={{position:'relative', zIndex:'1'}}>
      <div style={{display:'flex', justifyContent:'flex-end', maxWidth:'1350px', margin:'0 auto'}}>
        <input onKeyDown={getSearch} onChange={(event) => setInputValue(event.target.value)} value={inputValue} type="text" style={inputStyle}/>
      </div>
      <div style={{display:'flex', columnGap:'50px', maxWidth:'1350px', margin:'0 auto', justifyContent:'center', color: currentTheme.theme.color}}>
      <div>
        {error && <h2>ERROR REQUEST</h2>}
        <h2 style={{textAlign:'center'}}>
          {post?.name || post?.alternativeName}({post?.year})
        </h2>
        <img src={`${post?.poster?.previewUrl}`} alt="poster"></img>
      </div>
      <div style={{display:'flex', flexDirection:'column', marginTop:'51px', maxWidth:'400px'}}>
          <Box
                  sx={{
                    '& > legend': { mt: 2 },
                  }}
                >
                  <Typography component="legend">Rating</Typography>
                  <Rating name="read-only" value={Math.round(post?.rating?.imdb/2)} readOnly />
          </Box>
          <div style={divForMap}>
              <h3>страна: </h3>
              {post?.countries?.map((item:any) => ( 
                    <p key={item?.name}>/ {item?.name}</p>    
                    ))}
          </div>
          <div style={divForMap}>
              <h3>жанр: </h3>
              {post?.genres?.map((item:any) => ( 
                  <p key={item?.name}> / {item?.name} </p>    
                  ))}
          </div>
          <h3>описание :</h3>
          <p>
              {post?.description}
          </p>
          <h3>премьера({post?.premiere?.country}) : {post?.premiere?.world?.split('').splice(0, 10).join('')}</h3>
          {!addFilm ? <Fab onClick={pressFilmToFavorites} size="medium" color="primary" aria-label="add">
                <AddIcon />
              </Fab> : <button onClick={pressFilmRemoveFromFavorites} style={buttonCloseStyle}></button>}
      </div>
    </div>
    <div style={{marginTop:'60px', display:'flex', justifyContent:'center'}}>
    {<ReactPlayer width='807px' height='453px' url = { post?.videos?.trailers?.[0]?.url}  />}
  </div>
    </div>
    </>
  )
}
