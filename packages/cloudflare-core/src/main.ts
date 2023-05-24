import { ExecutionContext } from "@cloudflare/workers-types";
import { Environment } from "./environment";
import { getRouter } from "./router";

export const worker = {
  fetch(request: Request, env: Environment, context: ExecutionContext) {
    const router = getRouter();
    return router.fetch(request, env, context);
  },
};
