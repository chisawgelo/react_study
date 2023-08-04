import {useEffect, useState} from 'react';
import axios from "axios";
import './homeWork.css';

const HomeWork = () => {
    //use effect (читаю данні з бд)
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        const arr = async () => {
            try {
                const response = await axios('https://jsonplaceholder.typicode.com/todos');
                setTodos(response.data)
            } catch (error) {
                console.log('ERROR' + error)
            }
        }
        arr()
    }, [])


    //видалення
    const handleDelete = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }


    //Пошук
    const [search, setSearch] = useState('');
    const handleSearch = (event) => {
        setSearch(event.target.value)
    };
    const filterTodos = todos.filter((todo) => todo.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <div className="container">
            <input value={search} onChange={handleSearch}/>
            <ul>
                {filterTodos.map((todo) => (
                    <p className="container__item" key={todo.id}>
                        {todo.id}. {todo.title}
                        <button onClick={() => handleDelete(todo.id)} className="container__btn">delete</button>
                    </p>
                ))}
            </ul>
        </div>
    );
};

export default HomeWork;