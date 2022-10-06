import React from 'react';
import ArrowRightIcon from '../assets/images/icon-arrow.svg'
import {
    Input,
    Box,
    Button,
    Img,
    Flex
} from '@chakra-ui/react';
import '../utils/index.css'

export const Form = () => {
	return (
		<Flex border={'1px solid  hsl(0, 36%, 70%)'} borderRadius={'md'}>
			<input className='input' type="email" placeholder='Email Address' />
            <Button>
                <Img src={ArrowRightIcon}></Img>
            </Button>
		</Flex>
	);
};
