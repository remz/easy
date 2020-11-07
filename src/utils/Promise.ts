import { isText, results, Results, Text } from '../types';

export const resolve = <S>(subject: S | PromiseLike<S>): Promise<S> => Promise.resolve(subject);
export const reject = (e: Text | Error | Results) => Promise.reject(isText(e) ? results(e) : e);
