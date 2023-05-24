import { Hono } from "hono";
import { Environment } from "./environment";
import { slowApi, slowApiButFast } from "./routes/slow-api";

type HonoBindings = {
  Bindings: Environment;
};

export function getRouter() {
  const router = new Hono<HonoBindings>();

  router.get("/slow", () => slowApi());
  router.get("/slow-but-fast", () => slowApiButFast());

  return router;
}
