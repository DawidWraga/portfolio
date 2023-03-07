import { Container } from '@chakra-ui/react';
import SkillsGrid from '../components/work/SkillsGrid';

interface IProps {}

export default function WorkPage(props: IProps) {
	const {} = props;

	return (
		<>
			<Container maxW="container.xl" centerContent>
				<SkillsGrid />
			</Container>
		</>
	);
}
