import supabase from "@/api/supabase";
import { Categories, CategoriesType } from "@/api/schemas/categorySchema";
import EntryInfoCard from "@/components/EntryInfoCard";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Categories.map((c) => ({
    slug: c,
  }));
}

type Prop = {
  params: {
    slug: CategoriesType;
  };
};

const CategoryPage = async ({ params }: Prop) => {
  const { data: entries, error } = await supabase
    .from("entry")
    .select("name, description, tags, created_by")
    .eq("category", params.slug)
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
