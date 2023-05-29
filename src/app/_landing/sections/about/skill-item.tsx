import { Circle, IconButton, Text } from '@chakra/react';
import { motion } from 'framer-motion';

interface IProps {
	Icon: React.FC;
	link: string;
	name: string;
}

export function SkillItem(props: IProps) {
	const { Icon, link, name } = props;

	return (
		<Circle
			as={motion.a}
			display="flex"
			href={link}
			flexDir="column"
			alignItems="center"
			justifyContent="center"
			transition="200ms"
			_hover={{
				cursor: 'pointer',
				bgColor: 'whiteAlpha.200',
				boxShadow: '0 5px 15px #2a69ac',
			}}
			role="group"
			p={1}
			rounded="md"
			target="_blank"
			layoutId={link}
		>
			{Icon && (
				<IconButton
					icon={<Icon />}
					aria-label="link to technology"
					w="50px"
					h="50px"
					variant={'unstyled'}
					fontSize="3rem"
				/>
			)}
			<Text transition="font-size 200ms ease-in-out" fontSize="14px">
				{name}
			</Text>
		</Circle>
	);
}
