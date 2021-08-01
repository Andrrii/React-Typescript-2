import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { ITodo } from '../types/types';
import List from '../components/List';
import TodoItem from '../components/TodoItem';

const TodosPage = () => {

    const [todos,setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
      },[])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        }
        catch(e){
            
            alert(e)
        }
    }

    return (
        <div>
            <List 
                items = {todos} 
                renderItem = {(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
            />
        </div>
    );
};

export default TodosPage;