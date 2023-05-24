import { ExportedHandler } from "@cloudflare/workers-types";
import { Environment } from "./environment";

export type Handler = ExportedHandler<Environment>;
export type FetchHandler = Handler["fetch"];

export const worker: Handler = {
  fetch(request, env, context) {},
};
