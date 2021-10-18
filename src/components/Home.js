import React from 'react';
import {useHistory} from "react-router-dom";
function Home() {
    let history = useHistory();
    return (
        <div> 
            <button onClick ={
                ()=>{
                    history.push("/Tab1");
                }
            }>
                Aprende
            </button>
        </div>
    )
}
export default Home;