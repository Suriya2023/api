import React, { useState } from 'react'



function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWather] = useState(null);

  // here fetch data start 
  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29a0d28667c933c77b0a38334649e81f`);
      const data = await response.json();
      setWather(data);
    }
    catch (error) {
      console.log("No data Found", error)


    }
  }

  // handle a form submit
  const handle = (error) => {
    error.preventDefault();
    fetchWeather();
  }


  return (
    <div className="continer">    <div className='wbd' >
      <h1>Wether App</h1>
      <br />
      <form onSubmit={handle}>
        <input type="text" placeholder='Enter a City Name' onChange={(suraj) => setCity(suraj.target.value)} /> &nbsp;
        <button type='submit'>Submit</button>

      </form>

      {
        weather && (
          <div className='weather_info'>
            <h2>{weather.name}</h2>
            <p>{new Date().toLocaleDateString()}</p>
            <p>{weather.timezone}</p>
            <img src={"https://cdn-icons-gif.flaticon.com/17484/17484896.gif"} />
            <p>{weather.temp} °c/ {weather.main.temp_min} \</p>
            <p>{weather.weather[0].description}</p>
            <p>{weather.weather.main}</p>
            <p>{weather.weather.icon}</p>
            <p>{weather.wind.speed}</p>
            <p>{weather.wind.deg}</p>
            <p>{weather.weather.country}</p>
          </div>


        )
      }



    </div>
    </div>
  )
}

export default Weather
