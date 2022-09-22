import React, { createContext, useContext, useState } from 'react';

export interface IGlobalContext {
	contactFormIsOpen: boolean;
	setContactFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<IGlobalContext>(
	{} as IGlobalContext
);

export const GlobalContextProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [contactFormIsOpen, setContactFormIsOpen] = useState(false);

	return (
		<GlobalContext.Provider
			value={{
				contactFormIsOpen,
				setContactFormIsOpen,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
