import { Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo2 from "../assets/logo2.png";
import { BsGithub } from "react-icons/bs";

const TopContainer = () => {
  const date = new Date();
  const time = window.moment(date).format('YYYY-MM-DD HH:mm')


  return (
    <div className="flex w-full justify-between max-[510px]:flex-col max-[510px]:gap-1 max-[510px]:items-center min-[600px]:px-6 flex-wrap">
      <a href="/">
        <Image src={logo2} htmlHeight={"60px"} htmlWidth={"200px"} objectFit={"contain"}></Image>
      </a>
      <Text className='flex items-center md:mr-[10em]'>{`${time}`}</Text>
      <div className='flex items-center'>
        <a href="https://github.com/vaibhav797/intern-weather-app" target='_blank' rel='noreferrer'>
          <BsGithub size={30} cursor={"pointer"} />
        </a>
      </div>
    </div>
  )
}

export default TopContainer
