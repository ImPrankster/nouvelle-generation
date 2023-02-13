"use client";

import { useForm } from "react-hook-form";
import type { CategoriesType } from "@/api/schemas/categorySchema";
import { useEffect, useState } from "react";
import { Session } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/components/SupabaseProvider";
import Link from "next/link";
import Markdown from "markdown-to-jsx";

import { EntryForm } from "./EntryForm";

export interface FormData {
  category?: CategoriesType;
  content?: string;
  description?: string | null;
  name: string;
  tags?: string[] | null;
}

const CreatePage = () => {
  const { supabase } = useSupabase();
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [router, session, supabase.auth]);

  return (
    <div className="w-full space-y-2">
      <h1 className="text-xl font-bold">Add new article</h1>
      {!session && (
        <div className="space-y-4">
          <p className="font-bold">You are not signed in!</p>
          <Link href="/account/login" className="btn-primary btn">
            Log in
          </Link>
        </div>
      )}
      {session && (
        <div className="grid grid-cols-1 md:grid-cols-2">
          <EntryForm
            handleSubmit={handleSubmit}
            register={register}
            setValue={setValue}
            getValues={getValues}
            error={errors}
            reset={reset}
            session={session}
            supabase={supabase}
          />
          <article className="prose lg:prose-lg">
            <Markdown>
              {watch("content") || "Content preview will appear here"}
            </Markdown>
          </article>
        </div>
      )}
    </div>
  );
};

export default CreatePage;
