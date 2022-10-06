import "@fontsource/josefin-sans"

import { useState } from 'react';
import { Box, Flex, ChakraProvider } from '@chakra-ui/react';
import BackGround from './assets/images/bg-pattern-desktop.svg';
import DesktopHeroImage from './assets/images/hero-desktop.jpg';
import Details from './sections/Details';

import theme from './utils/theme'

function App() {
	return (
    <ChakraProvider theme={theme}>
		<Box as={'body'} bgImage={BackGround} height={'100vh'}>
			<Flex>
				<Box width={'60%'} border={'1px solid red'} height={'100vh'}>
					<Details />
				</Box>
				<Box
					bgImage={DesktopHeroImage}
					backgroundRepeat={'no-repeat'}
					backgroundSize={'cover'}
					backgroundPosition={'center'}
					height={'100vh'}
					width={'40%'}
				></Box>
			</Flex>
		</Box>
    </ChakraProvider>
	);
}

export default App;
