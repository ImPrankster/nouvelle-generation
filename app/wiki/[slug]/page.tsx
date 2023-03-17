import { createServerClient } from "@/utils/supabase";
import Markdown from "markdown-to-jsx";
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
    .eq("id", params.slug);

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

  return (
    <>
      <div className="card m-4 max-h-96 w-fit border-2 bg-base-100">
        <figure>
          {entry.cover_image && (
            <img
              src={entry.cover_image}
              alt={!entry.description ? "" : entry.description}
            />
          )}
        </figure>
      </div>
      <div className="prose w-screen p-16 lg:prose-xl lg:px-28">
        <h1 className="font-shout italic">{entry.name}</h1>
        {/* <h3>Created by {entry.created_by}</h3> */}
        {/* <h3>{entry.description}</h3> */}
        <Markdown>{entry.content}</Markdown>
      </div>
    </>
  );
};

export default EntryPage;
