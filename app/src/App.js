import React,{useState} from 'react';
import { fetchWeatherData } from './api/fetchWeatherData';
import './App.css'

const App=()=>{
    const[query,setQuery]=useState('');
    const[weather,setWeather]=useState({});
    const search= async(e)=>{
        if(e.key==='Enter'){
            const data=await fetchWeatherData(query)
            
        }
    }
    return(
        <div className="main-container">
        <input 
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        onKeyPress={search}/>
        
        </div>

    )
}
export default App;