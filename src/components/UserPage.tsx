import React,{useState,useEffect} from 'react';
import { IUser } from '../types/types';
import List from './List';
import axios from 'axios';
import UserItem from './UserItem';
import {useHistory} from "react-router-dom"

const UserPage:React.FC = () => {
    const [users,setUsers] = useState<IUser[]>([])
    const history = useHistory()

    useEffect(() => {
      fetchUsers()
    },[])
  
    async function fetchUsers() {
      try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
      }
      catch(e){
        alert(e)
      }
    }

    return (
        <div>
                <List 
                    items = {users} 
                    renderItem = {(user: IUser) => 
                                    <UserItem 
                                        onClick = {(user) => history.push(`/users/${user.id}`)} 
                                        user={user} 
                                        key={user.id} 
                                    />}
                />        
        </div>
    );
};

export default UserPage;