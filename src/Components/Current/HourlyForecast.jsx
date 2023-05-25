import { Image, Text } from '@chakra-ui/react'
import React from 'react'

const HourlyForecast = ({ data, units }) => {
  const tempUnit = units === "metric" ? <span>C</span> : <span>F</span>;

  return (
    <div className='flex flex-col w-full items-center gap-2'>
      <Text my="2" fontWeight={500} fontSize={"1.2rem"}>HOURLY FORECAST</Text>
      <div className="flex h-full w-full justify-between">
        <div className="flex max-[930px]:flex-wrap justify-center w-full">
        {data.map((h, i) => {
          return (
            <div key={i} className="flex flex-col items-center justify-center rounded-lg drop-shadow-2xl bg-slate-300/[.06] m-1 p-2">
              <Text fontSize={12}>{h.time}</Text>
              <Image boxSize={'40px'} src={`https://openweathermap.org/img/wn/${h.icon}@2x.png`} />
              <Text fontSize={13} fontWeight={600} color='white'>{h.temp.toFixed(1)} °{tempUnit}</Text>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default HourlyForecast
