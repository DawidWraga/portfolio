import React from 'react';

import { Box, Button, VStack } from '@chakra-ui/react';
import { Field, Form, FormLayout, SubmitButton } from '@saas-ui/react';
import { toast } from 'react-toastify';
import { axios } from 'lib/axios';
import { MdSend } from 'react-icons/md';

export function ContactForm() {
	const formRef = React.useRef<any>(null);

	return (
		<Box
			bg={'gray.700'}
			borderRadius="lg"
			p={[4, 6, 7]}
			color="whiteAlpha.900"
			// color="gray.700"
			// _dark={{ color: 'whiteAlpha.900' }}
			shadow="base"
			w="100%"
			// w={{ base: '100%', sm: '400px', md: 'container.sm' }}
		>
			{/* <VStack spacing={5}> */}
			<Form
				mode="onSubmit"
				ref={formRef}
				onSubmit={async (data) => {
					try {
						await axios.post(`/api/contact`, data);
						toast.success('Message sent successfully!');
						formRef.current?.reset();
					} catch (error) {
						toast.error(
							<>
								Something went wrong!
								<br />
								Please try again later
							</>
						);
					}
				}}
				flex={1}
			>
				<FormLayout alignContent="end">
					<Field
						name="name"
						label="Name"
						rounded="md"
						rules={{
							required: 'This field is required',
							maxLength: {
								value: 30,
								message: 'Name is too long',
							},
						}}
					/>
					<Field
						name="email"
						label="Email"
						// type="email"
						autoComplete="email"
						autoCorrect="off"
						formNoValidate
						rules={{
							required: 'This field is required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: 'Invalid email address',
							},
							maxLength: {
								value: 254,
								message: 'Email address is too long',
							},
						}}
					/>
					<Field
						name="content"
						label="Message"
						type="textarea"
						rules={{
							required: 'This field is required',
							maxLength: {
								value: 2350,
								message: 'Message is too long',
							},
						}}
						minH="140px"
					/>
					<Button
						ml="auto"
						type="submit"
						px="6"
						py={4}
						leftIcon={<MdSend />}
						colorScheme="brand"
						isLoading={formRef.current?.formState.isSubmitting}
					>
						Send
					</Button>
				</FormLayout>
			</Form>
			{/* <FormControl isRequired>
					<FormLabel>Name</FormLabel>
					<InputGroup>
						<InputLeftElement>
							<BsPerson />
						</InputLeftElement>
						<Input type="text" name="name" placeholder="Your Name" />
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Email</FormLabel>
					<InputGroup>
						<InputLeftElement>
							<MdOutlineEmail />
						</InputLeftElement>
						<Input type="email" name="email" placeholder="Your Email" />
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Message</FormLabel>
					<Textarea
						name="message"
						placeholder="Your Message"
						rows={6}
						resize="none"
					/>
				</FormControl>
				<Button
					colorScheme="blue"
					bg="blue.400"
					color="white"
					_hover={{
						bg: 'blue.500',
					}}
					rounded="full"
					w={{ base: 'full', md: 'fit-content' }}
				>
					Send Message
				</Button> */}
			{/* </VStack> */}
		</Box>
	);
}
