import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { IUser } from '../types/types';
import { useParams , useHistory } from 'react-router-dom';

interface UserItemPageParams {
    id:string
}

const UserItemPage: React.FC= () => {

    const [user,setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const history = useHistory()

    useEffect(() => {
      fetchUser()
    },[])
  
    async function fetchUser() {
      try {
        const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        setUser(response.data)
      }
      catch(e){
        alert(e)
      }
    }

    return (
        <div>
            <button onClick = {() => history.push('/users')}>Back</button>
            <h1>User Page {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} on {user?.address.street} and {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;