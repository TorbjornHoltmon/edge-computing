// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { headers } from "next/headers";
import { worker } from "@edge-computing/cloudflare-core";

export const config = {
  runtime: "edge",
};

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.url) {
    const headers = new Headers();
    console.log("Here it is");
    for (const [key, value] of Object.entries(req.headers)) {
      headers.set(key, value as string);
    }

    const request = new Request(req.url, {
      method: req.method,
      headers: headers,
      body: req.body,
    });

    return worker.fetch(request, process.env as any, process.env as any);
  }
  return new Response("Error", { status: 500 });
}
