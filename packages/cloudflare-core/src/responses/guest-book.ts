export type GuestBookEntry = {
  name: string;
  message: string;
};

export async function addEntryToGuestBook(kv: KVNamespace, newEntry: GuestBookEntry): Promise<Response> {
  const entries = await kv.get<GuestBookEntry[]>("guestbook", "json");

  if (!entries) {
    const firstEntry = [newEntry];
    await kv.put("guestbook", JSON.stringify(firstEntry), { expirationTtl: 300 });
    return new Response(JSON.stringify(firstEntry), { status: 200, headers: { "content-type": "application/json" } });
  }

  entries.push(newEntry);
  await kv.put("guestbook", JSON.stringify(entries));
  return new Response(JSON.stringify(entries), { status: 200, headers: { "content-type": "application/json" } });
}

export async function getGuestBookEntries(kv: KVNamespace): Promise<Response> {
  const entries = await kv.get("guestbook", "arrayBuffer");
  if (entries) {
    return new Response(entries, { status: 200, headers: { "content-type": "application/json" } });
  }
  return new Response(JSON.stringify([]), { status: 200, headers: { "content-type": "application/json" } });
}
