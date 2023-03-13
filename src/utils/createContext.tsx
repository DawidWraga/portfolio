/*
CREDIT:
https://github.com/chakra-ui/chakra-ui/blob/main/packages/hooks/context/src/index.ts
*/

import {
	createContext as createReactContext,
	useContext as useReactContext,
} from 'react';

export interface CreateContextOptions<T> {
	strict?: boolean;
	hookName?: string;
	providerName?: string;
	errorMessage?: string;
	name?: string;
	defaultValue?: T;
}

export type CreateContextReturn<T> = [
	React.Provider<T>,
	() => T,
	React.Context<T>
];

function getErrorMessage(hook: string, provider: string) {
	return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}

/**
 * 
 * @param options {
 *  	strict?: boolean;
	    hookName?: string;
	    providerName?: string;
	    errorMessage?: string;
	    name?: string;
	    defaultValue?: T;
 * }
 * @returns  [Context.Provider, useContext, Context]
 * 
 * 
 * @example
 * ```tsx
  
  export interface StepFormContext extends UseStepperReturn {
    updateStep(state: StepState): void
    steps: Record<string, StepState>
}

export const [StepFormProvider, useStepFormContext] =
    createContext<StepFormContext>({
      name: 'StepFormContext',
      errorMessage:
        'useStepFormContext: `context` is undefined. Seems you forgot to wrap step form components in `<StepForm />`',
  })
 
 * ```
 */

export function createContext<T>(options: CreateContextOptions<T> = {}) {
	const {
		name,
		strict = true,
		hookName = 'useContext',
		providerName = 'Provider',
		errorMessage,
	} = options;

	const Context = createReactContext<T | undefined>(undefined);

	Context.displayName = name;

	function useContext() {
		const context = useReactContext(Context);

		if (!context && strict) {
			const error = new Error(
				errorMessage ?? getErrorMessage(hookName, providerName)
			);
			error.name = 'ContextError';
			Error.captureStackTrace?.(error, useContext);
			throw error;
		}

		return context;
	}

	return [Context.Provider, useContext, Context] as CreateContextReturn<T>;
}
