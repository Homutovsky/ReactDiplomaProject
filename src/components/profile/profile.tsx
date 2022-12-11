import { Button } from '@mui/material';
import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../userContext';

export const Profile = () => {

  const {userName} = useContext(UserContext)
  const navigate = useNavigate();
  
  return (
    <div style={{height:'calc(100vh - 58px)'}}>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <h1>
      your nick name : {userName}
      </h1>
    </div>
  )
}
