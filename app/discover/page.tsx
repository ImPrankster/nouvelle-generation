import supabase from "@/api/supabase";
import { Categories } from "@/api/schemas/categorySchema";

export const revalidate = 180;

const DiscoverPage = async () => {
  let { data: entry, error } = await supabase.from("entry").select("*");

  return <div>{entry && <>{entry.map((entry) => entry.name)}</>}</div>;
};

export default DiscoverPage;
