import "./globals.css";
import Header from "./Header";
import { createServerClient } from "@/utils/supabase";
import SupabaseListener from "@/components/SupabaseListener";
import SupabaseProvider from "@/components/SupabaseProvider";

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" className="bg-base-100" data-theme="cupcake">
      {/*
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {children}
        </SupabaseProvider>
        {/* FOR INTERNAL USE ONLY. © 2023 The Nouvelle Génération Team. All rights */}
        {/* reserved. */}
      </body>
    </html>
  );
}
