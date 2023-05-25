import { Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiSearchLine } from "react-icons/ri"
import { MdLocationPin } from "react-icons/md";
import { TbTemperatureFahrenheit, TbTemperatureCelsius } from "react-icons/tb";
import SearchCities from './SearchCities';

const InputDetails = ({ setQuery, setUnits, units, setLoading }) => {
  const [location, setLocation] = useState('');
  const [zip, setZip] = useState('');

  const handleKey = (e) => 
  {
    if(e.key === 'Enter')
    {
      search();
    }
  }

  const search = () => {
    if (zip !== '') {
      setQuery({ zip: zip });
    }
    else {
      setQuery({ q: location });
    }

    setLocation('');
    setZip('');
  }

  const handleGps = () => {
    navigator.geolocation.getCurrentPosition((succ) => {
      const { latitude, longitude } = succ.coords;
      setQuery({ lat: latitude, lon: longitude });
    })
  }

  const handleUnits = () => {
    if(units === 'metric')
    {
      setUnits('imperial');
    }
    else if(units === 'imperial')
    {
      setUnits('metric');
    }
  }


  return (
    <div className="flex flex-wrap gap-3 md:flex-nowrap justify-center md:justify-between items-center w-full">
      <SearchCities setQuery={setQuery} setLoading={setLoading} setZip={setZip}/>
      <Text>OR</Text>
      <Input onKeyUp={handleKey} onChange={e => setZip(e.target.value)} border="1px" borderColor="gray.200" bg='white' value={zip} color='black' placeholder='Enter (zip code,country code)' />
      <div className="flex justify-center gap-2 md:justify-around w-full">
        <Button onClick={search} boxShadow={"lg"} bg={"blue.600"} color={"gray"} ><RiSearchLine color={"white"} size={25} /></Button>
        <Button onClick={handleGps} boxShadow={"lg"} bg={"blue.600"} color={"gray"} p={3} ><MdLocationPin color='white' size={25} /></Button>
        <Button onClick={handleUnits} boxShadow={"lg"} bg={"blue.600"} color={"gray"}>{units === 'metric' ? <TbTemperatureFahrenheit color='white' size={25}/> : <TbTemperatureCelsius color='white' size={25}/> }</Button>
      </div>
    </div>
  )
}

export default InputDetails
