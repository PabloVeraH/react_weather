import React from 'react';


const Clima = ({resultado}) => {
    // extraer los valores
    const { name, main, weather } = resultado;

    if(!name) return null;

    const url = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather of {name} is: </h2>
                <p> <img src={url}></img> </p> 
                <p className="temperatura">
                    { main.temp }  <span> &#x2103; </span> 
                </p>
                <p>Maximum temperature: 
                    { main.temp_max }  <span> &#x2103; </span>
                </p>
                <p>Minimum temperature: 
                    { main.temp_min }  <span> &#x2103; </span>
                </p>
                <p>Thermal sensation: 
                    { main.feels_like }  <span> &#x2103; </span>
                </p>
            </div>
        </div>
    );
}
 
export default Clima;