import { router } from '../trpc';
import { noteRouter } from './note';

export const appRouter = router({
  note:  noteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;