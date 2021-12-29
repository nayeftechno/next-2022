import { AxiosError } from 'axios';

export type Flow = <T extends Promise<any>, R, Args extends any[]>(
    generator: (...args: Args) => Generator<T, R, T extends Promise<infer Y> ? Y : never>,
  ) => (...args: Args) => Promise<R>;

  export interface APIErrorHandler {
    (error: AxiosError): null | void;
  }
  