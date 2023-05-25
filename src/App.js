import CurrentDetails from "./Components/Current/CurrentDetails";
import InputDetails from "./Components/Input/InputDetails";
import TopContainer from "./Components/TopContainer";
import WeeklyDetails from "./Components/WeeklyDetails";
import Error from "./Components/Error";
import { useEffect, useState } from "react";
import Empty from './Components/Empty';
import Loader from "./Components/Loader";
import formatter from "./WeatherFetchData";

const bgTemplate = "https://www.transparenttextures.com/patterns/black-linen.png";


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState(null);
  const [units, setUnits] = useState('metric');
  const [isError, setError] = useState(false);

  useEffect(() => {
    let data = null;
    const getWeatherData = async () => {
      setLoading(true);
      setError(false);
      setWeatherData(null);
      query ? data = await formatter({ ...query, units }) : data = null;
      // console.log(data);
      if(data === undefined)
      {
        setError(true);
      }
      else
      {
        setWeatherData(data);
      }
      setLoading(false);
    };

    getWeatherData();
  }, [query,units])

  let Content = (
    <Empty/>
  )

  if(weatherData)
  {
    Content = (
      <div className="flex flex-col min-[930px]:flex-row justify-center w-full px-3 gap-4 h-full ">
          <CurrentDetails data={weatherData} units={units} />
          <WeeklyDetails data={weatherData} units={units} />
        </div>
    )
  }

  if(isLoading)
  {
    Content = (<Loader />)
  }

  if(isError)
  {
    Content = <Error/>
  }

  return (
    <div className="flex justify-center min-h-screen m-0 min-[600px]:py-2 min-[600px]:px-4">
      <div style={{ backgroundImage: `url(${bgTemplate})` }} className="m-0 w-full shadow-none md:my-4 h-full gap-5 min-[600px]w-11/12 lg:max-w-[1000px] py-3 px-4 min-[600px]:shadow-[0px_1px_4px_rgba(0,0,0,0.16)] min-[600px]:shadow-gray-50 flex flex-col items-center bg-inherit min-[600px]:rounded-xl">
        <TopContainer/>
        <InputDetails setLoading={setLoading} setQuery={setQuery} setUnits={setUnits} units={units} />
        {Content}
      </div>
    </div>
  );
}

export default App;
