import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useAutocomplete } from '@mui/material';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false)
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "66592690c185e13f9d929a71eb3dd616"

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json()
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            console.log(result)
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value)
    }
    let handleSubmit = async (event) => {
        try {
            event.preventDefault()
            setCity("")
            let info = await getWeatherInfo();
            updateInfo(info)
        } catch (err) {
            setError(true)
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p>No result for this place</p>}
            </form>
        </div>
    )
}