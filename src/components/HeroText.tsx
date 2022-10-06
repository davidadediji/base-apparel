import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function HeroText() {
	return (
		<Box as='div'>
			<Text as={'p'}>
				Hello fellow shoppers! We're currently building our
				new fashion store. Add your email below to stay up-to-date with
				announcements and our launch deals.
			</Text>
		</Box>
	);
}
