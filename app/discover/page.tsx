import "server-only";

import AskAi from "./AskAi";
import { notFound } from "next/navigation";
import { createServerClient } from "@/utils/supabase";
import EntryInfoCard from "@/components/EntryInfoCard";

export const revalidate = 0;

const DiscoverPage = async () => {
  const supabase = createServerClient();
  const { data: entries, error } = await supabase
    .from("entry")
    .select("name, description, tags, created_by")
    .order("name", { ascending: true })
    .range(0, 100);

  if (error) {
    throw error;
  }

  if (entries.length < 1) {
    notFound();
  }

  return (
    <section>
      <AskAi />
      <div className="rounded-box mb-4 space-y-4 border border-base-300 bg-base-100 p-4">
        <div className="ml-4 text-xl font-medium">Recommanded For You:</div>
      </div>
      {entries && entries.map((d, i) => <EntryInfoCard data={d} key={i} />)}
    </section>
  );
};

export default DiscoverPage;
