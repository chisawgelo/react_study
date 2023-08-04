import React, {useEffect, useState} from 'react';
import axios from "axios";
import './homeWork.css'

const HomeWork = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const arr = async () => {
            try {
                const response = await axios('https://jsonplaceholder.typicode.com/todos')
                setTodos(response.data)
            } catch (error) {
                alert('404 ERROR' + error)
            }
        }
        arr()
    }, []);

    // function delete btn

    const handleDelete = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }

    return (
        <div className={'container'}>
            <ul>
                {todos.map((todo) => (
                    <p className="container__item" key={todo.id}>
                        {todo.id}. {todo.title}
                        <button className="container__btn" onClick={() => handleDelete(todo.id)}>Delete</button>
                    </p>
                ))}
            </ul>
        </div>
    );
};

export default HomeWork;