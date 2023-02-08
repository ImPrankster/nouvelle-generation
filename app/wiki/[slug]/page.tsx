import supabase from "@/api/supabase";
import { notFound } from "next/navigation";

type Prop = {
  params: {
    slug: string;
  };
};

const EntryPage = async ({ params }: Prop) => {
  const { data, error } = await supabase
    .from("entry")
    .select("*")
    .eq("name", params.slug);

  if (data!) {
    notFound();
  }

  return <div>Entry</div>;
};

export default EntryPage;
