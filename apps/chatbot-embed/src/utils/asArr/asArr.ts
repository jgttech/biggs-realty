import { type } from 'ramda';

export const asArr = <T = unknown>(arg: T) => (type(arg) === 'Array' ? arg : [arg]) as T[];
