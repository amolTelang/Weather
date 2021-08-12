import axios from 'axios';


const URL='https://community-open-weather-map.p.rapidapi.com/find'


export const fetchWeatherData=async(query)=>{
  try {
    const {data} =await axios.get(URL,{
        params:{
            q:query,
            
            units:'metric',
            
        },
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
          }
    });
    const dData=data.list[0];
    return dData
  } catch (error) {
      console.log(error);
  }
}