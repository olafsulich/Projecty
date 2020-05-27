import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { InitState } from '../types/index';

export const useTypedSelector: TypedUseSelectorHook<InitState> = useSelector;
