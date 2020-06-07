import axios from 'axios'

const API_KEY='51e980823ae41cf16c725f5fb2103836'
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast`

//api.openweathermap.org/data/2.5/forecast?q={city name},{state code}&appid={your api key}  &appid=${API_KEY}

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${rootUrl}?q=${city},us&appid=${API_KEY}`;
    const request =  axios.get(url)

    console.log('Request', request)

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}