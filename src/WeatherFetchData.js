const BASE_URL = "https://api.openweathermap.org/data/2.5";
const BASE_URL_ONECALL = "https://api.openweathermap.org/data/3.0";

const API_KEY = process.env.REACT_APP_API_KEY;

const getWeatherData = async (infoType, searchParams) => {
    try {
        const url = infoType === "weather" ? new URL(BASE_URL + '/' + infoType) : new URL(BASE_URL_ONECALL + '/' + infoType);
        url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

        const response = await fetch(url);
        const data = await response.json();

        return data;
    }
    catch (err) {
        console.log(err);
        return undefined;
    }
}

const dataFormatter = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, humidity },
        clouds: { all: cloud },
        wind: { speed },
        sys: { country, sunrise, sunset },
        name,
        weather,
        dt,
        timezone
    } = data;
    const { main: details, icon } = weather[0];

    return { lat, lon, temp, feels_like, cloud, humidity, speed, country, sunrise, sunset, name, details, icon, timezone, dt };
}

const forecastFormatter = (data) => {
    let { timezone_offset: timezone, hourly, daily } = data;



    hourly = hourly.slice(1, 7).map((d) => {
        return {
            time: window.moment(d.dt * 1000).format('HH:mm'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    });

    daily = daily.slice(1, 7).map((d) => {
        const dte = new Date(d.dt * 1000);
        const localTime = dte.getTime();
        const localOffset = dte.getTimezoneOffset() * 60000;
        const utc = localOffset + localTime;
        const n = utc + (1000 * timezone);
        const date = new Date(n)
        return {
            day: date.toLocaleDateString('en-Gb', { weekday: "long" }),
            temp: d.temp.day,
            icon: d.weather[0].icon,
            humidity: d.humidity,
            wind_speed: d.wind_speed,
            desc: d.weather[0].description,
            clouds: d.clouds
        }
    });

    return { timezone, daily, hourly };
}


const formatter = async (searchParams) => {
    try {
        const res = await getWeatherData("weather", searchParams);
        const formattedWeatherData = dataFormatter(res);

        const { lat, lon } = formattedWeatherData;

        const resOnecall = await getWeatherData("onecall", {
            lat,
            lon,
            exclude: "minutely",
            units: searchParams.units
        })

        const formattedForecastData = forecastFormatter(resOnecall);

        return { ...formattedWeatherData, ...formattedForecastData };
    }
    catch (err) {
        console.log(err);
        return undefined;
    }
}


const fetchCities = async (input) => {

    try{
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input ? input : 'a'}&limit=5&appid=${API_KEY}`);
        const data = response.json();

        return data;
    }
    catch(err){
        console.log(err);
        return;
    }
}

export default formatter;
export {fetchCities};