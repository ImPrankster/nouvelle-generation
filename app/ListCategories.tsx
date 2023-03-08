import HeaderLink from "./HeaderLink";
import { Categories } from "@/utils/schemas/category";

export const ListCategories = (CategoriesList: typeof Categories) => {
  return (
    <ul className="rounded-box bg-base-100 p-2 text-base-content shadow-md">
      {CategoriesList.map((c, i) => (
        <li key={i}>
          <HeaderLink href={"/categories/" + c} className="ring-primary">
            {c}
          </HeaderLink>
        </li>
      ))}
    </ul>
  );
};
