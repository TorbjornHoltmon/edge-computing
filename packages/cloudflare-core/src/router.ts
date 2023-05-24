import { Hono } from "hono";
import { Environment } from "./environment";
import { slowApi, slowApiButFast } from "./routes/slow-api";

type HonoBindings = {
  Bindings: Environment;
};

export function getRouter() {
  const router = new Hono<HonoBindings>();

  router.get("/api/slow", () => slowApi());
  router.get("/api/slow-but-fast", () => slowApiButFast());

  return router;
}
