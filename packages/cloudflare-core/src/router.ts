import { Hono } from "hono";
import { Environment } from "./environment";
import { slowApi, slowApiButFast } from "./responses/slow-api";
import { slowButFastPOSTApi, slowPOSTApi } from "./responses/slow-api-part-2";

type HonoBindings = {
  Bindings: Environment;
};

export function getRouter() {
  const router = new Hono<HonoBindings>();

  router.get("/api/slow", () => slowApi());

  router.get("/api/slow-but-fast", () => slowApiButFast());

  router.post("/api/slow", () => slowPOSTApi());

  router.post("/api/slow-but-fast", (c) => slowButFastPOSTApi(c.env.KV));

  return router;
}
