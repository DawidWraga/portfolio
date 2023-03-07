export type ModalOnClose = (args: {
	force?: boolean;
}) => Promise<boolean | undefined> | void;
