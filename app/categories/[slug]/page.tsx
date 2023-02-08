import supabase from "@/api/supabase";
import { Categories, CategoriesType } from "@/api/schemas/categorySchema";
import EntryInfoCard from "@/components/EntryInfoCard";

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
  const { data, error } = await supabase
    .from("entry")
    .select("name, description, tags, created_by")
    .eq("category", params.slug)
    .range(0, 100);

  if (error) {
    throw error;
  }

  return (
    <div className="grid grid-cols-1 place-content-center justify-items-center gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 lg:px-16 ">
      {data && data.map((d, i) => <EntryInfoCard data={d} key={i} />)}
    </div>
  );
};

export default CategoryPage;
