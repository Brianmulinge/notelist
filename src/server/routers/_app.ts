import { router } from '../trpc';
import { noteRouter } from './note';

export const appRouter = router({
  noteRouter:  noteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;