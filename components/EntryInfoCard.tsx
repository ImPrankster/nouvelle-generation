import { EntryInfoSchema, EntryInfoType } from "@/api/schemas/entryInfoSchema";
import HeaderLink from "@/app/HeaderLink";

const EntryInfoCard = ({ data }: { data: EntryInfoType }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {data.name}
          <div className="flex w-full overflow-x-auto">
            {data.tags &&
              data.tags.map((t, i) => (
                <div className="badge-secondary badge mr-1" key={i}>
                  {t}
                </div>
              ))}
          </div>
        </h2>
        <p>{data.description && data.description}</p>
        <div className="card-actions justify-end">
          <HeaderLink href={"/wiki/" + data.name} className="btn-primary btn">
            Learn more
          </HeaderLink>
        </div>
      </div>
    </div>
  );
};

export default EntryInfoCard;
