import axios from 'axios';
import  {useState } from 'react'
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styleDiv, inputStyle } from '../common/style.styled';
import { addFilmFromSearchInArr} from '../redux/reducer/filmsSlice';
import { AppDispatch } from '../redux/store';
import { TopicPage } from '../topicPage/topicPage';



export const Films = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const getSearch = (event:any) => {
    if (event.code === "Enter" && inputValue !== "") {

      const getFilmByName = async () => {
        try {
          let upperSearchKey = inputValue.split('')[0].toUpperCase() + inputValue.slice(1, inputValue.length)
          const responce = await axios.get(`https://api.kinopoisk.dev/movie?field=name&search=${upperSearchKey}&limit=20&sortField=year&sortType=-1&token=FSXPQXQ-36BMCB3-Q3NNZNY-2XH0CGJ`)
          
          if (responce.data.docs.length) {
            dispatch(addFilmFromSearchInArr(responce.data.docs))
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
        <div style={{...styleDiv, position:'relative', zIndex:'2'}}>
          <input onKeyDown={getSearch} onChange={(event) => setInputValue(event.target.value)} value={inputValue} type="text" style={inputStyle}/>
        </div>
        <TopicPage/>
      </>
  )
}
