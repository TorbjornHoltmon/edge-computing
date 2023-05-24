import { Hono, Env } from "hono";
import { Environment } from "./environment";

type HonoBindings = {
  Bindings: Environment;
};

export function getRouter() {
  const router = new Hono<HonoBindings>();

  router.get("/", (context) => {
    return context.json({ hello: "world" });
  });

  return router;
}
