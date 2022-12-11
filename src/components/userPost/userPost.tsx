import { Button } from '@mui/material'
import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const UserPost = () => {
  
  const navigate = useNavigate();
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  .then(response => response.json())
  .then(json => setPost(json))
  
    
 
  },[])
  

  return (
    <div style={{display:'flex', flexDirection:'column', height:'calc(100vh - 58px)'}}>
        <Button onClick={() => navigate(-1)}>Back</Button>
        <pre style={{margin:'0 auto'}}>
          {JSON.stringify(post, null, 2)}
        </pre>
    
    </div>
    
  )
}
