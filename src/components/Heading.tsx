import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function Heading() {
	return (
		<Box textTransform={'uppercase'} mt={'12rem'} letterSpacing={'10px'} fontSize={'40px'} mb={'25px'}>
			<Text as={'h1'}>
				<Text color={'hsl(0, 36%, 70%)'}>We're</Text>
				<Text>coming</Text>
				<Text>soon</Text>
			</Text>
		</Box>
	);
}
