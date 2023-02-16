import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

import './todoList.scss'

const TodoList = () => {
    
    const [list, setList] = useState([
        { name: "Meirzhan Ilesh", id: 1, checked: true },
        { name: "Esymbai Nyrzat", id: 2, checked: false },
        { name: "Kazybek Ileshev", id: 3, checked: false },
    ]);

    const [search, setSearch] = useState('')

    const onChangeList = () => {
        const newObj = {
            name: search,
            id: uuidv4(),
            checked: true
        }
        setList(list => [...list, newObj])
        setSearch('')
    }

    const renderNames = (arr) => {
        const items = arr.map(item => {
            return (
                <li key={item.id}>
                    <input
                        type="text"
                        disabled={!item.checked}
                        onChange={(e) => onName(e, item.id)}
                        value={item.name} />
                    <input
                        type="checkbox"
                        onChange={() => onChecked(item.id)}
                        checked={item.checked} />
                </li>
            )
        });

        return items
    }

    const onName = (e, id) => {
        setList(list => {
            return list.map(item => {
                if(item.id === id && item.checked) {
                    return {...item, name: e.target.value};
                }
                return item;                
            })
        })
    }

    const onChecked = (id) => {
        setList(list => list.map(item => item.id === id ? { ...item, checked: !item.checked } : item))
    }

    const onDelete = () => {
        setList(list => list.filter(item => !item.checked))
    }

    const onAllDelete = () => {
        setList([])
    }

    const searchName = (arr) => {
        return arr.filter(item => item.name.toLowerCase() >= item.name.toLowerCase().match(search.toLowerCase()));
    }
    
    const newItems = renderNames(searchName(list))

    return (
        <div className='list'>
            <div>
                <div>List Name</div>
                <div>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="input"
                        type="text" />
                </div>

                <ul>
                    {newItems}
                </ul>
                <div>
                    <button className='button' onClick={onChangeList}>Добавить</button>
                    <button className='button' onClick={onDelete}>Удалить</button>
                    <button className='button' onClick={onAllDelete}>Удалить весь список</button>
                </div>                
            </div>
            
        </div>
    )
}

export default TodoList;