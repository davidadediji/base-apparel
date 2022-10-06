import { Box, Img } from '@chakra-ui/react'
import React from 'react'
import Logo from '../assets/images/logo.svg'
import { Form } from '../components/Form'
import Heading from '../components/Heading'
import HeroText from '../components/HeroText'

export default function Details() {
  return (
    <Box pl={'150px'} pt={'75px'} pr={'700px'}>
        <Img src={Logo}></Img>
        <Heading/>
        <HeroText/>
        <Form/>
    </Box>
  )
}
