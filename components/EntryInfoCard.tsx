import { EntryInfoType } from "@/utils/schemas/entry";
import HeaderLink from "@/app/HeaderLink";

const EntryInfoCard = ({ data }: { data: EntryInfoType }) => {
  return (
    <div className="card max-h-96 w-full border-2 bg-base-100 shadow-xl">
      <figure>
        {data.cover_image && <img src={data.cover_image} alt={data.name} />}
      </figure>
      <div className="card-body">
        <h2 className="card-title overflow-x-auto whitespace-nowrap">
          {data.name}
          <div className="flex w-full overflow-x-auto">
            {data.tags &&
              data.tags.map((t, i) => (
                <div
                  className="badge-secondary badge mr-1 whitespace-nowrap"
                  key={i}
                >
                  {t}
                </div>
              ))}
          </div>
        </h2>
        <p className="h-24 overflow-y-hidden">
          {data.description && data.description}
        </p>
        <div className="card-actions justify-end">
          <HeaderLink href={"/wiki/" + data.id} className="btn-primary btn">
            Learn more
          </HeaderLink>
        </div>
      </div>
    </div>
  );
};

export default EntryInfoCard;
