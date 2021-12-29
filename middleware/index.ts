import { GetServerSidePropsContext } from 'next/types';
import { ParsedUrlQuery } from 'querystring';
import {initStore, Store} from '../Stores/index';

export interface MiddleWaresValues {
  store: Store;
}

interface CustomGetServerSidePropsContext<
  Query extends ParsedUrlQuery = ParsedUrlQuery,
> extends GetServerSidePropsContext {
  query: Query;
  asPath?: string;
}

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

