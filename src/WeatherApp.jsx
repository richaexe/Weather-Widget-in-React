import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Meerut",
        feelsLike: 36.62,
        humidity: 67,
        temp: 30.96,
        tempMax: 30.96,
        tempMin: 30.96,
        weather: "broken clouds"
    })

    let updateInfo = (result) => {
        setWeatherInfo(result)
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}