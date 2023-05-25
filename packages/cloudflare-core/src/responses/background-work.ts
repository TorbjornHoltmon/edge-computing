import { doBackgroundWork } from "../utils";

export async function slowBackgroundWorkAPI(): Promise<Response> {
  await doBackgroundWork();

  return new Response("Done", { status: 200 });
}

export async function fastBackgroundWorkApi(ctx: ExecutionContext) {
  ctx.waitUntil(doBackgroundWork());

  return new Response("Done", { status: 200 });
}
