import axios from 'axios';


const URL='https://community-open-weather-map.p.rapidapi.com/climate/month'
const API_KEY=process.env.RAPID_API_WEATHER_KEY;

export const fetchWeatherData=async(query)=>{
    const {data} =await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    });
    return data;
}