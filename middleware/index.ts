import { GetServerSidePropsContext , GetServerSidePropsResult} from 'next/types';
import { ParsedUrlQuery } from 'querystring';
import {initStore, Store} from '../Stores/index';
export interface MiddleWaresValues {
  store: Store;
}

export interface CustomGetServerSidePropsContext<
  Query extends ParsedUrlQuery = ParsedUrlQuery,
> extends GetServerSidePropsContext {
  query: Query;
  asPath?: string;
}

export type CustomGetServerSideProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
> = (
  context: CustomGetServerSidePropsContext<Q>,
) => Promise<GetServerSidePropsResult<P>>;

export default async function appMiddlewares(
  ctx: CustomGetServerSidePropsContext,
): Promise<MiddleWaresValues> {
  const { req } = ctx;
  const store = initStore({
    SDK: {  },
  } as Store);
  

  return {
    
    store,
  };
}

