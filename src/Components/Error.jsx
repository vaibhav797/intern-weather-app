import React from 'react'
import { Text } from '@chakra-ui/react'
import {BiError} from 'react-icons/bi'

const Error = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center min-h-[300px] p-6 text-orange-500'>
      <div className="flex flex-col justify-center items-center gap-4 border-2 border-orange-500 w-full p-8 rounded-md h-72">
        <BiError size={20}/>
        <Text>ENTER VALID VALUE</Text>
      </div>
    </div>
  )
}

export default Error
