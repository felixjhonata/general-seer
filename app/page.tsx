"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white w-fit h-fit p-10 flex gap-3 flex-col">
        <h1 className="text-black font-bold text-xl">Enter Your Name</h1>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input className="text-black border border-black py-2 px-4" type="text" placeholder="Type your name..." value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
          <button type="submit" className="bg-black py-2 px-4">Predict Data</button>
        </form>
      </div>
    </div>
  );
}
