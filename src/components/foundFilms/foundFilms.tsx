import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { inputStyle } from '../common/style.styled';
import { useTheme } from '../theme/ThemeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { addFilmFromSearchInArr} from '../redux/reducer/filmsSlice';
import { AppDispatch, RootState } from '../redux/store';
import { FoundFilms as FoundFilmsType, FoundFilmsArray } from '../types.ts/types';


export const FoundFilms = () => {
  const dispatch = useDispatch<AppDispatch>()
  const currentTheme = useTheme()
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const [searchResult, setSearch] = useState<FoundFilmsArray | undefined>([])
  const foundFilms = useSelector((state:RootState) => state.films.foundFilms)

  const getSearch = async (event:React.KeyboardEvent) => {
    if (event.code === "Enter" && inputValue !== "") {
        try {
          let upperSearchKey = inputValue.split('')[0].toUpperCase() + inputValue.slice(1, inputValue.length)
          const responce = await axios.get(`https://api.kinopoisk.dev/movie?field=name&search=${upperSearchKey}&limit=20&sortField=year&sortType=-1&token=FSXPQXQ-36BMCB3-Q3NNZNY-2XH0CGJ`)
          if (responce.data.docs.length) {
            dispatch(addFilmFromSearchInArr(responce.data.docs))
            setSearch(foundFilms.reduce((acc:FoundFilmsArray, item:FoundFilmsType) => (item.poster && item.description)?[...acc, item]:acc,[]))
            navigate(`/foundFilms/${responce.data.docs[0].name}`)
          } else {
            navigate(`/errorPage`)
          }
        }
        catch (error) {
      }
    }
  }
  
    useEffect(() => {
      setSearch(foundFilms.reduce((acc:FoundFilmsArray, item:FoundFilmsType) => (item.poster && item.description)?[...acc, item]:acc,[]))
    },[])
    

  return (
    <>
      <div className={'background'}></div>
      <div style={{position:'relative', zIndex:'1'}}>
        <div style={{display:'flex', justifyContent:'flex-end', maxWidth:'1350px', margin:'0 auto'}}>
          <input onKeyDown={getSearch} onChange={(event) => setInputValue(event.target.value)} value={inputValue} type="text" style={inputStyle}/>
        </div>
        {searchResult?.map((item:FoundFilmsType | undefined) => (
          
            <div style={{display:'flex', columnGap:'50px', maxWidth:'1350px', margin:'0 auto', justifyContent:'center'}}>
              <NavLink style={{textDecoration:'none', color:currentTheme.theme.color}} to={`/selectedFromSearch/${item?.id}`}>
                <div style={{width:'360px'}}>
                    <h2 style={{textAlign:'center', display:'flex', flexWrap:'wrap', maxWidth:'360px', }}>
                  {item?.name || item?.alternativeName}({item?.year})
                  </h2>
                    <img src={`${item?.poster?.previewUrl}`} alt="poster"></img>
                </div>
              </NavLink>
            <div style={{display:'flex', flexDirection:'column', marginTop:'51px', maxWidth:'400px', color:currentTheme.theme.color}}>
              <Box
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >
                      <Typography component="legend">Rating</Typography>
                      <Rating name="read-only" value={Math.round(item?.rating?.imdb/2)} readOnly />
              </Box>
              <h3>описание :</h3>
              <p>
                  {item?.description}
              </p>
            </div>
          </div>
          
        ))}
      </div>
    </>
    
  )
}
