import React from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities } from '../../WeatherFetchData';
import formatter from '../../WeatherFetchData';
import { useState } from 'react';

const SearchCities = ({setQuery, setLoading, setZip}) => {
    const [searchValue, setSearchValue] = useState(null);

    const loadOptions = async (input)=>{
        const citiesList = await fetchCities(input);
    
        return{
          options: citiesList.map((city) => {
            return {
              value: {name: city.name, country: city.country, lat: city.lat, lon: city.lon},
              label: `${city.name}, ${city.country}`
            }
          })
        }
      }
    
      const handleChange = ({value,label}) => {
        setSearchValue(label);
        setZip('');
        setLoading(true);
        handleQuery(value);
      }
    
      const handleQuery = async (val) =>
      {
        const {name, country, lat, lon} = val;
        const res = await formatter({q: `${name},${country}`});
        if(res !== undefined)
        {
          setQuery({q: `${name},${country}`});
        }
        else
        {
          setQuery({lat: lat, lon: lon});
          // console.log('error');
        }
        setLoading(false);
      }

  return (
    <AsyncPaginate
        placeholder={'Enter the city here...'}
        debounceTimeout={500}
        loadOptions={loadOptions}
        value={searchValue}
        onChange={handleChange}
        className='w-full text-black'
      />
  )
}

export default SearchCities
