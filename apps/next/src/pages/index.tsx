import Image from "next/image";
import { Inter } from "next/font/google";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "experimental-edge";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default function Home() {
  const [messages, setMessages] = useState<{ name: string; message: string }[]>([]);

  useEffect(() => {
    const getMessages = async () => {
      const response = await fetch("/api/guestbook");
      const data = await response.json();
      setMessages(data);
    };
    getMessages();
  }, []);

  return (
    <main className="flex flex-col items-center mb-auto h-screen ">
      <h1 className="text-3xl pt-4">Guestbook</h1>
      <p>Cloudflare workers!</p>

      <div className="pt-10">
        <div>
          <div className="pt-10">
            <div className="pt-6">
              {/* <form
                className="flex gap-2"
                onSubmit={(event) => {
                  event.preventDefault();

                  if (message === "") return alert("Message is empty");

                  if (session !== null) {
                    postMessage.mutate({
                      name: session.user?.name as string,
                      message,
                      //id: session.user?.id as string,
                    });
                  }

                  setMessage("");
                }}
              >
                <input
                  type="text"
                  value={message}
                  placeholder="Your message..."
                  minLength={2}
                  maxLength={100}
                  onChange={(event) => setMessage(event.target.value)}
                  className="px-4 py-2 rounded-md border-2 border-zinc-800 bg-neutral-900 focus:outline-none"
                />
                <button type="submit" className="p-2 rounded-md border-2 border-zinc-800 focus:outline-none">
                  Submit
                </button>
              </form> */}
            </div>
            <div className="flex flex-col gap-4">
              {messages?.map((msg, index) => {
                return (
                  <div key={`${index}messages`}>
                    <p>{msg.message}</p>
                    <span>- {msg.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
