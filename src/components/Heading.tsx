import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function Heading() {
	return (
		<Box textTransform={'uppercase'} mt={'12rem'}>
			<Text as={'h1'}>
				<Text>We're</Text>
				<Text>coming</Text>
				<Text>soon</Text>
			</Text>
		</Box>
	);
}
