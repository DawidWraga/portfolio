export const isDevEnv = process.env.NODE_ENV === 'development';

export const isBrowser = () => typeof window !== undefined;

export const __DEV__ = process.env.NODE_ENV !== 'production';
