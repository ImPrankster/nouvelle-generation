"use client";

import SignInCard from "@/components/SignInCard";
import { useSupabase } from "@/components/SupabaseProvider";
import { Session } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

const AccountPage = () => {
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

  if (!session) return <SignInCard />;

  return (
    <div className="flex justify-center">
      <div className="card w-full max-w-md bg-base-100 font-bold shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{session.user.email}</h2>
          <button
            className="btn-warning btn self-end"
            onClick={async () => {
              const { error } = await supabase.auth.signOut();
              if (error) {
                throw error;
              }
            }}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
