'use client';

import { Box, Heading, Text, Button } from '@chakra/react';
import Link from 'next/link';

export default function NotFound() {
	return (
		<Box textAlign="center" py={10} px={6}>
			<Text fontSize="18px" mt={3} mb={2}>
				Page Not Found
			</Text>
			<Text color={'gray.500'} mb={6}>
				The page you are looking for does not exist.
			</Text>
			<Button
				colorScheme="red"
				// bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
				color="white"
				variant="solid"
			>
				<Link href="/">Go to Home</Link>
			</Button>
		</Box>
	);
}
