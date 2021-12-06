import React, {useState} from "react";
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';
import stylesLG from "./HomePage.module.css";
function CreateNote(){
    const [input, setInput] = useState({
        title: '',
        description: '',
        link: ''
    })
    function handleChange(event){
        const {name, value} = event.target;

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]: value
            }
        })
    }
    function handleClick(event){
        event.preventDefault();
        const newNote ={
            title: input.title,
            description: input.description,
            link: input.link
        }
        axios.post('http://localhost:3001/create', newNote)
    }
    return (<div >
        <h1 className={stylesLG.titulo}>Crear Material</h1>
        <div className={stylesLG.formu}>
            <form >
                <div className={stylesLG.espacio}>
                    <input onChange={handleChange} name="title" value={input.title}autoComplete="off" placeholder="Título" maxLength="15" minLength="4"></input>
                </div>
                <div className={stylesLG.espacio}>
                    <textarea onChange={handleChange} name="description" value={input.description} autoComplete="off" placeholder="Descripción" maxLength="50" minLength="10"></textarea>
                </div>
                <div className={stylesLG.espacio}>
                    <input type="url" onChange={handleChange} name="link" value={input.link} autoComplete="off" placeholder="Enlace del documento"></input>
                </div>

                <button type="submit" className={stylesLG.boton} onClick={handleClick} >Enviar</button>
            </form>
        </div>
    </div>)
}
export default CreateNote;