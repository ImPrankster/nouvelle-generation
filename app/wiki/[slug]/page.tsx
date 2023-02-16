import { createServerClient } from "@/utils/supabase";
import { notFound } from "next/navigation";

export const revalidate = 0;

const EntryPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const supabase = createServerClient();
  const { data: entries, error } = await supabase
    .from("entry")
    .select("*")
    .eq("name", params.slug);

  if (error) {
    throw error;
  }

  if (entries?.length < 1) {
    notFound();
  }

  if (entries.length > 1) {
    throw new Error("Database error");
  }

  const entry = entries[0];

  return <div>{entry.name}</div>;
};

export default EntryPage;
