import React from 'react'
import axios from "axios";
import { useForm } from "react-hook-form";
// import "./Weather.css"
// import "../Weather_Pro/Weather.css"
import { useState, useEffect } from 'react';
export const Weather = () => {

    const [weather, setweather] = useState({});
    const [tem, settem] = useState(null);
    const [fer, setfer] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm('');
    const submitform = (data) => {

        getWeather(data.FirstName);

    }


    const getWeather = async (data) => {

        const res = await axios.get("https://yahoo-weather5.p.rapidapi.com/weather", {
            params: {
                location: data,
                format: 'json',
                u: 'f'
            },

            headers: {
                'X-RapidAPI-Key': '2c18b61b8cmsh58c2024fb24ada8p14a809jsn524ff20fa0b5',
                'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
            }
        })
        // console.log(res);
        console.log(res.data);
        setweather(res.data)
        settem(res.data.current_observation.condition.temperature);

    };
    //   getWeather();
    const date = new Date();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear();
    let fulldate = `${time} , ${day}- ${month}- ${year}`

    useEffect(() => {
        if (tem !== null) {
            setfer((tem * 9) / 5 + 32);
        }
    }, [tem]);

    return (
        <>
            <div id='body'>
                <div class="page-content page-container" id="page-content">
                    <div class="padding">
                        <div class="row container d-flex justify-content-center">
                            <div class="col-lg-8 grid-margin stretch-card">
                                <div class="card card-weather">
                                    <div class="card-body">

                                        <form onSubmit={handleSubmit(submitform)}>
                                            <div class="form-group  ">
                                                <label style={{ color: "white", fontSize: "22px" }}><b>Enter City</b></label>
                                                <input type="text"{...register("FirstName")} class="form-control col-md-6 mx-auto" placeholder="Enter City" />
                                            </div>
                                            <button type="submit" class="btn btn-primary">Check Weather</button>

                                        </form><br />

                                        <div class="weather-date-location">
                                            <h1 style={{ textAlign: "center", fontSize: "60px", color: "black" }}>Weather</h1>
                                            <h2 className='ab'><b>{weather?.location?.city}</b></h2>
                                            <p class="text-gray">
                                                <span class="weather-date"><b> {fulldate}, </b></span>
                                                <span class="weather-location"><b>{weather?.location?.country} </b></span>
                                            </p>
                                        </div>
                                        <div class="weather-data d-flex">
                                            <div class="mr-auto">
                                                <h4 className='ab' class="display-3"><span style={{ color: "black", fontWeight: "bold" }}>{fer} </span>F</h4>
                                                <h4 className='ab' class="display-3"><span style={{ color: "black", fontWeight: "bold" }}>{tem} </span>C</h4>
                                                <p >
                                                    Wind: <span style={{ color: "black", fontWeight: "bold" }}>{weather?.current_observation?.wind?.chill}</span>
                                                </p>
                                            </div>
                                            <div class="mr-auto">
                                                <p className='de'>Pressure:<span className='span'>{weather?.current_observation?.atmosphere?.pressure}</span></p>
                                                <p className='de'>Humidity:<span className='span'>{weather?.current_observation?.atmosphere?.humidity}</span></p>
                                                <p className='de'>SunRise:<span className='span'>{weather?.current_observation?.astronomy?.sunrise}</span></p>
                                                <p className='de'>SunSet:<span className='span'>{weather?.current_observation?.astronomy?.sunset}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}