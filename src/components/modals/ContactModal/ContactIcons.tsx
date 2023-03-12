import {
	IconButton,
	Link,
	Stack,
	Tooltip,
	useClipboard,
} from '@chakra-ui/react';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export function ContactIcons() {
	const { hasCopied, onCopy } = useClipboard('example@example.com');
	return (
		<Stack align="center" justify="space-around" direction="row">
			<Tooltip
				label={hasCopied ? 'Email Copied!' : 'Copy Email'}
				closeOnClick={false}
				hasArrow
			>
				<IconButton
					aria-label="email"
					variant="ghost"
					size="lg"
					fontSize="3xl"
					icon={<MdEmail color="white" />}
					_hover={{
						bg: 'blue.500',
						// color: bgGray,
					}}
					onClick={onCopy}
					isRound
				/>
			</Tooltip>
			<Link href="#">
				<IconButton
					aria-label="github"
					variant="ghost"
					size="lg"
					fontSize="3xl"
					icon={<BsGithub color="white" />}
					_hover={{
						bg: 'blue.500',
						// color: bgGray,
					}}
					isRound
				/>
			</Link>

			<Link href="#">
				<IconButton
					aria-label="linkedin"
					variant="ghost"
					size="lg"
					icon={<BsLinkedin size="28px" color="white" />}
					_hover={{
						bg: 'blue.500',
						// color: bgGray,
					}}
					isRound
				/>
			</Link>
		</Stack>
	);
}
