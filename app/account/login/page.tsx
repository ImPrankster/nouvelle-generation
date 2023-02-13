"use client";

import {
  Auth,
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-react";
import { useSupabase } from "@/components/SupabaseProvider";
import { useEffect, useState } from "react";
import { Session } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { supabase } = useSupabase();
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [supabase.auth]);

  if (session) {
    router.push("/account");
  }

  return (
    <div className="flex justify-center">
      <div className="card w-full max-w-md bg-base-100 font-bold shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Sign in!</h2>
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
