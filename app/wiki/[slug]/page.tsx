import supabase from "@/api/supabase";
import { notFound } from "next/navigation";

export const revalidate = 360;

type Prop = {
  params: {
    slug: string;
  };
};

const EntryPage = async ({ params }: Prop) => {
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
