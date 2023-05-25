export async function doBackgroundWork() {
  await voidWait(2000);
  console.log("Doing some heavy lifting, sending logs, updating tables and other interesting stuff");
  await voidWait(2000);
}

async function voidWait(timeToDelay: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeToDelay));
}
