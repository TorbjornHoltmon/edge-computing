import { doBackgroundWork } from "../utils";

export async function slowBackgroundWorkAPI(): Promise<Response> {
  await doBackgroundWork();

  return new Response("Done", { status: 200 });
}

export async function fastBackgroundWorkApi(ctx: ExecutionContext) {
  try {
    ctx.waitUntil(doBackgroundWork());

    return new Response("Done", { status: 200 });
  } catch (error) {
    console.log(error);
    console.log(JSON.stringify(error));
    return new Response("Error", { status: 500 });
  }
}
