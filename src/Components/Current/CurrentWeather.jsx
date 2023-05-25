import React from 'react'
import { Image, Text, VStack } from '@chakra-ui/react'

const CurrentWeather = ({ data, units }) => {
    const { icon, temp, details, name, country, dt, timezone } = data;
    // console.log(dt,timezone);
    const dte = new Date(dt * 1000);
    const localTime = dte.getTime();
    const localOffset = dte.getTimezoneOffset() * 60000;
    const utc = localOffset + localTime;
    const n = utc + (1000 * (timezone));
    const date = new Date(n)
    const curDate = window.moment(date).format('LL')

    const tempUnit = units === "metric" ? <span>C</span> : <span>F</span>;

    return (
        <div className="flex flex-col w-full items-center gap-0">
            <Text my='2' fontWeight={500} fontSize={"1.2rem"}>CURRENT WEATHER</Text>
            <div className='flex justify-evenly min-[930px]:justify-between w-full items-center'>
                <VStack>
                    <Image boxSize={'70px'} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                    <Text>{details}</Text>
                </VStack>
                <VStack>
                    <Text fontWeight={"650"} color='white'>{temp.toFixed(2)} °{tempUnit}</Text>
                </VStack>
                <VStack>
                    <Text fontWeight={"650"} color='white'>{name}, {country}</Text>
                    <Text>{curDate}</Text>
                </VStack>
            </div>
        </div>
    )
}

export default CurrentWeather
