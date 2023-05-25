import React from 'react'
import { Image, Text } from '@chakra-ui/react';
import { BsClouds,BsWind } from "react-icons/bs"
import { WiHumidity } from "react-icons/wi"
import { CiTempHigh } from "react-icons/ci"

const WeeklyDetails = ({ data, units }) => {
    const { daily } = data;
    const tempUnit = units === "metric" ? <span>C</span> : <span>F</span>;

    return (
        <div className='flex flex-col items-center w-full justify-between'>
            <Text my="2" fontWeight={500} fontSize={"1.2rem"}>WEEKLY FORECAST</Text>
            <div className="flex flex-col h-full w-full justify-between gap-2">
                {daily.map((d, i) => {
                const speedUnit = units === "metric" ? <span>{(d.wind_speed * 18 / 5).toFixed(1)} kmph</span> : <span>{d.wind_speed.toFixed(1)} mph</span>

                    return (
                        <div key={i} className="flex rounded-lg drop-shadow-2xl p-1 gap-9 bg-slate-300/[.06]">
                            <div className='flex flex-col p-1 w-full justify-between'>
                                <div className='flex justify-start pl-2'>
                                    <Text fontSize={15} color='white'>{d.day}</Text>
                                </div>
                                <div className="flex items-center">
                                    <Image height={'30px'} width={'32px'} src={`https://openweathermap.org/img/wn/${d.icon}@2x.png`} /><Text fontSize={10}>{d.desc}</Text>
                                </div>
                            </div>
                            <div className='flex flex-col w-full justify-center items-center'>
                                <div className='flex justify-start w-full items-center gap-2'>
                                    <CiTempHigh/>
                                    <Text fontSize={15} color={'white'}>{d.temp.toFixed(1)} °{tempUnit}</Text>
                                </div>
                                <div className='flex justify-start w-full items-center gap-2'>
                                    <BsClouds />
                                    <Text fontSize={15} color={'white'}>{d.clouds} %</Text>
                                </div>
                            </div>
                            <div className='flex flex-col w-full justify-center items-center'>
                                <div className='flex justify-start w-full items-center gap-2'>
                                    <BsWind/>
                                    <Text fontSize={15} color={'white'}>{speedUnit}</Text>
                                </div>
                                <div className='flex justify-start w-full items-center gap-2'>
                                    <WiHumidity/>
                                    <Text fontSize={15} color={'white'}>{d.humidity} %</Text>
                                </div>
                            </div>
                        </div>)
                })}
            </div>

        </div>
    )
}

export default WeeklyDetails
