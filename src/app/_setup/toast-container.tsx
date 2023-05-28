import { ToastContainer as DefaultToastContainer } from 'react-toastify';

export interface ToastContainerProps {}

export function ToastContainer(props: ToastContainerProps) {
	const {} = props;

	return (
		<>
			<DefaultToastContainer position="bottom-right" />
		</>
	);
}
