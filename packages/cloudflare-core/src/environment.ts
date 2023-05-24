import { KVNamespace } from "@cloudflare/workers-types";

export type Environment = {
  KV: KVNamespace;
};
