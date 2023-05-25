export const theSlowApi = "https://the-slow-api.vercel.app/api/slow";

const slow = "https://edge.project-ignition.com/api/slow";

export function slowApi(): Response | Promise<Response> {
  const url = new URL(theSlowApi);

  url.searchParams.set("wait", "2000");

  const result = fetch(url.toString(), {
    method: "GET",
  });

  return result;
}

const slowButFast = "https://edge.project-ignition.com/api/slow-but-fast";

export function slowApiButFast(): Response | Promise<Response> {
  const url = new URL(theSlowApi);

  url.searchParams.set("wait", "2000");

  const result = fetch(url.toString(), {
    method: "GET",
    cf: {
      cacheTtl: 300,
    },
  });

  return result;
}
