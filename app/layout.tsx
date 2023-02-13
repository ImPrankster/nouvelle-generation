import "./globals.css";
import Header from "./Header";
import { createServerClient } from "@/api/supabase";
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
    <html lang="en" className="bg-base-200">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <Header />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
