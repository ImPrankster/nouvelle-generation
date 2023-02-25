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
    <html lang="en" className="bg-warm dark:bg-base-200">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
