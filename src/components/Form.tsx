import React, { useState } from 'react';
import ArrowRightIcon from '../assets/images/icon-arrow.svg';
import { Input, Box, Button, Img, Flex, Text, color } from '@chakra-ui/react';
import Error from '../assets/images/icon-error.svg';
import '../utils/index.css';

export const Form = () => {
	const [message, setMessage] = useState<string>('');
	const [isError, setIsError] = useState<boolean>();

	const handleClick = () => {
		if (message.includes('@') && message !== '') {
			setIsError(false);
		} else {
			setIsError(true);
		}
	};

	return (
		<>
			<Flex
				alignItems={'center'}
				border={'1px solid  hsl(0, 36%, 70%)'}
				borderRadius={'md'}
				height={'50px'}
                _active={isError && { border: "1px solid hsl(0, 93%, 68%)" }}
			>
				<input
					className='input'
					type='email'
					placeholder='Email Address'
					onChange={(e) => {
						setMessage(e.target.value);
						console.log(message);
					}}
				/>
				{isError && (
					<Img src={Error} width={'20px'} height={'20px'} mr={'7px'}></Img>
				)}
				<Button
					width={'100px'}
					height={'100%'}
					borderRadius={'8px'}
					bg={'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))'}
					onClick={handleClick}
				>
					<Img src={ArrowRightIcon}></Img>
				</Button>
			</Flex>
			{isError && (
				<Text as={'p'} color={'hsl(0, 93%, 68%)'} pl={'10px'} mt={'5px'}>
					Please provide a valid email.
				</Text>
			)}
		</>
	);
};
