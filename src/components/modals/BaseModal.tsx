import * as React from 'react';

import {
	Modal as ChakraModal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	ModalProps as ChakraModalProps,
	ModalContentProps,
	ModalFooterProps,
} from '@chakra/react';
import { motion, MotionContext, MotionProps } from 'framer-motion';
import { breakpoints } from 'utils/breakpoints';

import { Box } from '@chakra/react';
import {
	DraggableIndicator,
	getResponsiveModalContentProps,
} from 'components/modals/draggable';

export interface BaseModalProps extends ChakraModalProps {
	/**
	 * The modal title
	 */
	title?: React.ReactNode;
	/**
	 * The modal footer
	 */
	footer?: React.ReactNode;
	/**
	 * Hide the close button
	 */
	hideCloseButton?: boolean;
	/**
	 * Hide the overlay
	 */
	hideOverlay?: boolean;

	modalContentProps?: ModalContentProps;

	modalHeaderProps?: ModalContentProps;

	modalFooterProps?: ModalFooterProps;

	isResponsive?: boolean;
}

export const BaseModal: React.FC<BaseModalProps> = (props) => {
	const {
		title,
		footer,
		children,
		isOpen,
		onClose,
		hideCloseButton,
		hideOverlay,
		modalContentProps,
		modalHeaderProps,
		modalFooterProps,
		isResponsive = true,
		...rest
	} = props;
	return (
		<ChakraModal isOpen={isOpen} onClose={onClose} {...rest}>
			{!hideOverlay && <ModalOverlay />}
			<ModalContent
				// draggable={true}
				{...(isResponsive && getResponsiveModalContentProps(onClose))}
				{...modalContentProps}
			>
				{isResponsive && <DraggableIndicator />}

				{!hideCloseButton && (
					<ModalCloseButton
						{...(isResponsive && { display: { base: 'none', md: 'unset' } })}
					/>
				)}
				{title && <ModalHeader {...modalHeaderProps}>{title}</ModalHeader>}
				{children}
				{footer && <ModalFooter {...modalFooterProps}>{footer}</ModalFooter>}
			</ModalContent>
		</ChakraModal>
	);
};
// <MotionContext.Provider value={{}}>

{
	/* </MotionContext.Provider> */
}

export const Modal: React.FC<BaseModalProps> = (props) => {
	const { children, ...rest } = props;
	return (
		<BaseModal {...rest}>
			<ModalBody>{children}</ModalBody>
		</BaseModal>
	);
};
