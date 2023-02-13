import "server-only";

import { createServerClient } from "@/api/supabase";
import { CategoriesType } from "@/api/schemas/categorySchema";
import EntryInfoCard from "@/components/EntryInfoCard";
import { notFound } from "next/navigation";

export const revalidate = 0;

const CategoryPage = async ({
  params,
}: {
  params: {
    slug: CategoriesType;
  };
}) => {
  const supabase = createServerClient();
  const { data: entries, error } = await supabase
    .from("entry")
    .select("name, description, tags, created_by")
    .eq("category", params.slug)
    .order("name", { ascending: true })
    .range(0, 100);

  if (error) {
    throw error;
  }

  if (entries.length < 1) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 place-content-center justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 lg:px-16 ">
      {entries && entries.map((d, i) => <EntryInfoCard data={d} key={i} />)}
    </div>
  );
};

export default CategoryPage;
