import React, { useState } from 'react';
import ArrowRightIcon from '../assets/images/icon-arrow.svg';
import { Input, Box, Button, Img, Flex } from '@chakra-ui/react';
import '../utils/index.css';



export const Form = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    
	return (
		<Flex
			border={'1px solid  hsl(0, 36%, 70%)'}
			borderRadius={'md'}
			height={'50px'}
		>
			<input
				className='input'
				type='email'
				placeholder='Email Address'
                onChange={(e)=>{
                    setMessage(e.target.value);
                    
                    console.log(e.target.value, 'valid email')
                }}
			/>
			<Button
				width={'100px'}
				height={'100%'}
				borderRadius={'8px'}
				bg={'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))'}
			>
				<Img src={ArrowRightIcon}></Img>
			</Button>
		</Flex>
	);
};
