import { Image } from 'components/common/Image';

export interface AxaltLogoProps {}

export function AxaltLogo(props: AxaltLogoProps) {
	const {} = props;

	return (
		<>
			<Image
				src="/projects/axalt/logo.png"
				width={45}
				height={40}
				alt="axalt logo"
				wrapperStyles={{
					display: 'grid',
					placeContent: 'center',
          
				}}
			/>
		</>
	);
}
