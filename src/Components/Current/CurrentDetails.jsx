import React from 'react'
import CurrentWeather from './CurrentWeather';
import AirCond from './AirCond';
import HourlyForecast from './HourlyForecast';

const CurrentDetails = ({data, units}) => {
    const { details, temp, feels_like, humidity, speed, cloud, icon, name,country, hourly, dt, timezone } = data;

    return (
        <div className='flex flex-col justify-start gap-8 w-full'>
            <CurrentWeather data={{icon, temp, details, name, country, dt, timezone}} units={units}/>
            <AirCond data={{feels_like, humidity, speed, cloud}} units={units}/>
            <HourlyForecast data={hourly} units={units}/>
        </div>
    )
}

export default CurrentDetails
