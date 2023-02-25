"use client";

import { useSupabase } from "@/components/SupabaseProvider";
import { Session } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import SignInCard from "@/components/SignInCard";
import { useForm } from "react-hook-form";
import { AI_PROMPT_PREFIX } from "@/utils/const";

import { ChatBox } from "./ChatBox";

export interface FormData {
  text: string;
}

const AskAi = () => {
  const { supabase } = useSupabase();
  const [session, setSession] = useState<Session | null>(null);
  const [conversation, setConversation] = useState<
    { text: string | null; role: boolean }[]
  >([]);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
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
  }, [supabase.auth]);

  if (!session) return <SignInCard />;

  return (
    <div className="rounded-box mb-4 space-y-4 border border-base-300 bg-base-100 p-4">
      <div className="ml-4 text-xl font-medium">Ask AI</div>
      <ChatBox conversation={conversation} />
      <form
        onSubmit={handleSubmit(async (data) => {
          reset();
          setConversation(
            conversation.concat(
              { text: data.text, role: true },
              { text: null, role: true }
            )
          );
          fetch("/api/openai/" + AI_PROMPT_PREFIX + data.text + ".").then(
            (res) => {
              if (res.ok) {
                res.json().then((res) => {
                  setConversation(
                    conversation.concat(
                      { text: data.text, role: true },
                      { text: res.text, role: false }
                    )
                  );
                });
              } else {
                setError("Something went wrong");
              }
            }
          );
        })}
        className="form-control w-full space-y-2"
      >
        <div className="input-group">
          <input
            className="input-bordered input w-full"
            type="text"
            {...register("text", { required: true })}
            placeholder="Enter your question here"
          />
          <button className="btn-primary btn-square btn w-28" type="submit">
            Ask
          </button>
        </div>
      </form>
    </div>
  );
};

export default AskAi;
