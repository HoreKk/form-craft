import { createTRPCRouter } from "./init";
import userRouter from "./routes/users";

export const trpcRouter = createTRPCRouter({
  user: userRouter,
});
export type TRPCRouter = typeof trpcRouter;
