import "server-only";

import AskAi from "./AskAi";
import { createServerClient } from "@/utils/supabase";
import EntryInfoCard from "@/components/EntryInfoCard";
import SignInCard from "@/components/SignInCard";

export const revalidate = 0;

const DiscoverPage = async () => {
  const supabase = createServerClient();
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();

  const { data: entries, error: dbError } = await supabase
    .from("entry")
    .select("id, name, description, tags, created_by, cover_image")
    .order("name", { ascending: true })
    .range(0, 100);

  if (sessionError) {
    throw sessionError;
  }

  if (dbError) {
    throw dbError;
  }

  if (!session) {
    return <SignInCard />;
  }

  return (
    <section>
      <AskAi />
      <div className="rounded-box mb-4 space-y-4 border border-base-300 bg-base-100 p-4">
        <div className="ml-4 text-xl font-medium">Recommanded For You:</div>
        <div className="max-h-4xl flex overflow-x-auto">
          {entries &&
            entries.map((d, i) => (
              <div className="max-h-2xl mb-4 ml-4 max-w-xs p-4">
                <EntryInfoCard data={d} key={i} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverPage;
