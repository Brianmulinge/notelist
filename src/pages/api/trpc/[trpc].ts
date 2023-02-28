import { createNextApiHandler } from '@trpc/server/adapters/next';
import { createContext } from '../../../server/context';
import { appRouter } from '../../../server/routers/_app';
import { env } from '../../../../src/env.mjs';

export default createNextApiHandler({
  router: appRouter,
  createContext,
  onError: 
  env.NODE_ENV === 'development'
  ? ({path, error}) => {
    console.error(`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`);
  }
: undefined,
});



