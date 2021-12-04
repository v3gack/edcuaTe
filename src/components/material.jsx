
import { Route } from 'react-router'

import React, {useState} from 'react'
import axios from 'axios'

function Material() {
    const [input, setInput] = useState({
        title: '',
        content: ''
    })
    function handleChange(event){
        const {name, value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        const newNote ={
            title: input.title,
            content: input.content
        }
        axios.post('http://localhost:3001/material', newNote)
    }
    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" value={input.title}type="text" placeholder="Titulo"></input>
                <textarea onChange={handleChange} name="content" value={input.content}type="text" placeholder="Descripcion"></textarea>
                <button onClick={handleClick} type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Material;


