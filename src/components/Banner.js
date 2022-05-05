import React from 'react'
//import logo192 from './../logo192.png';
function Banner(props){
    return (
        <div>
            <h1>{props.titulo}</h1>
            <img src={props.imagen}></img>
            <h2>{props.subtitulo}</h2>
        </div>
    );
}

export default Banner;