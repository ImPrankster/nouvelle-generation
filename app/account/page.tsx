"use client";

import { useSupabase } from "@/components/SupabaseProvider";
import { Session } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
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

  return (
    <div className="flex justify-center">
      <div className="card w-full max-w-md bg-base-100 font-bold shadow-xl">
        <div className="card-body">
          {!session ? (
            <>
              <h2 className="card-title">You are not signed in!</h2>
              <Link href="/account/login" className="btn-primary btn self-end">
                Sign in
              </Link>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
