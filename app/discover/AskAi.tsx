"use client";

import { useSupabase } from "@/components/SupabaseProvider";
import { Session } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import SignInCard from "@/components/SignInCard";

const AskAi = () => {
  const { supabase } = useSupabase();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [supabase.auth]);
  console.log(session);

  return (
    <>
      {!session ? (
        <SignInCard />
      ) : (
        <div className="rounded-box mb-4 space-y-4 border border-base-300 bg-primary p-4 text-primary-content">
          <div className="ml-4 text-xl font-medium">Ask AI</div>
          <form onSubmit={() => {}} className="form-control w-full space-y-4">
            <textarea
              className="textarea-ghost textarea w-full text-xl font-bold"
              placeholder="Cilck here to ask AI"
            ></textarea>
            <button className="btn-secondary btn self-end" type="submit">
              Tell me!
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AskAi;
