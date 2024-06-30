import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox({ info }) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1673415819372-e57ae96bb202?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"

    const HOT_URL = "https://images.unsplash.com/photo-1546999441-5986497a3312?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670347626594-d60b7c3e2ba5?dpr=2&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8Q09MRCUyMHdlYXRoZXJ8ZW58MHwwfHx8MTcxOTY4NTI5OXwx&ixlib=rb-4.0.3"
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFJBSU4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    return (
        <div className="InfoBox">
            <div className='cardConatiner'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"div"}>
                            <div>Temperature = {info.temp}</div>
                            <div>Max. Temp = {info.tempMax}</div>
                            <div>Min. Temp = {info.tempMin}</div>
                            <div>Humidity = {info.humidity}</div>
                            <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}