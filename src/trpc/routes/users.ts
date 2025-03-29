import { TRPCRouterRecord } from "@trpc/server";
import { publicProcedure } from "../init";

const userRouter = {
  me: publicProcedure.query(() => ({ name: "John Doe" })),
} satisfies TRPCRouterRecord;

export default userRouter;
