import React from "react";

// Import icons from Assets
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";


const WeatherApp = () => {

    // API KEY for OpenWeatherMap
    let API_KEY = "184d042623b9c4668cf7bca2b6792f14";

    const search = async () => {
        const cityElement = document.getElementsByClassName("cityInput");

        // Check if the input is empty
        if (cityElement[0].value === "") {
            return 0;
        }

        // Create the URL for the API
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityElement[0].value}&units=Metric&appid=${API_KEY}`;

        // Fetch the data from the API
        let response = await fetch(url);

        // Convert the response to JSON
        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percent");   
        const wind = document.getElementsByClassName("wind-speed");
        const temp = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + " km/h";
        temp[0].innerHTML = (data.main.temp).toFixed() + "°C";
        location[0].innerHTML = data.name;


    }

    return (
        <div className="weather-app">
            <h1>Weather App</h1>
            <div className="container">
                <div className="top-bar">
                    <input type="text" className="cityInput" placeholder="Search..." />
                    <div className="search-icon" onClick={()=>{search()}}>
                        <img src={search_icon} alt="" />
                    </div>
                </div>
                <div className="weather-image">
                    <img src={cloud_icon} alt="" />
                </div>
                <div className="weather-temp">20°C</div>
                <div className="weather-location">Curicó</div>
                <div className="data-container">
                    <div className="element">
                        <img src={humidity_icon} alt="" className="icon"/>
                        <div className="data">
                            <div className="humidity-percent">64%</div>
                            <div className="text">Humidity</div>
                        </div>
                    </div>
                    <div className="element">
                        <img src={wind_icon} alt="" className="icon"/>
                        <div className="data">
                            <div className="wind-speed">20 km/h</div>
                            <div className="text">Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;