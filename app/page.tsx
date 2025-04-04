"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    }
  }, [session]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User not logged in</p>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-2xl">Welcome, {user.name}</h1>
        <p>Email: {user.email}</p>
        <p>User ID: {user.id}</p>
      </div>
    </div>
  );
}
