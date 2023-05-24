import { theSlowApi } from "./slow-api";

export async function slowPOSTApi(kv: KVNamespace): Promise<Response> {
  const cachedResult = await kv.get("slowPOSTApi", "stream");

  if (cachedResult) {
    return new Response(cachedResult, { status: 200 });
  }

  const url = new URL(theSlowApi);

  url.searchParams.set("wait", "2000");

  const result = await fetch(url.toString(), {
    method: "POST",
  });

  if (result.status !== 200 || result.body === null) {
    return new Response("Error", { status: 500 });
  }

  await kv.put("slowPOSTApi", result.body, { expirationTtl: 300 });

  return result;
}
