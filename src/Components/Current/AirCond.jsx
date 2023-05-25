import React from 'react'
import { HStack, Text, VStack } from '@chakra-ui/react'
import { BsClouds, BsWind } from "react-icons/bs"
import { WiHumidity } from "react-icons/wi"
import { CiTempHigh } from "react-icons/ci"

const AirCond = ({ data, units }) => {
    const { feels_like, humidity, speed, cloud } = data;
    const tempUnit = units === "metric" ? <span>C</span> : <span>F</span>;
    const speedUnit = units === "metric" ? <span>{(speed * 18 / 5).toFixed(2)} km/hr</span> : <span>{speed} miles/hr</span>

    return (
        <div className="flex flex-col items-center gap-2 w-full">
            <Text my="2" fontWeight={500} fontSize={"1.2rem"}>AIR CONDITIONS</Text>
            <div className="flex justify-evenly flex-wrap gap-2 min-[930px]:justify-between w-full">
                <VStack>
                    <HStack>
                        <CiTempHigh />
                        <Text>Feels like</Text>
                    </HStack>
                    <Text fontWeight={"650"} color='white'>{feels_like.toFixed(2)} °{tempUnit}</Text>
                </VStack>
                <VStack>
                    <HStack>
                        <BsWind/>
                        <Text>Wind</Text>
                    </HStack>
                    <Text fontWeight={"650"} color="white">{speedUnit}</Text>
                </VStack>
                <VStack>
                    <HStack>
                        <BsClouds/>
                        <Text>Clouds</Text>
                    </HStack>
                    <Text fontWeight={"650"} color="white">{cloud} %</Text>
                </VStack>
                <VStack>
                    <HStack>
                        <WiHumidity/>
                        <Text>Humidity</Text>
                    </HStack>
                    <Text fontWeight={"650"} color="white">{humidity} %</Text>
                </VStack>
            </div>
        </div>
    )
}

export default AirCond
