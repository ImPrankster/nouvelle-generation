import { ReactNode } from "react";
import SearchBar from "./SearchBar";

const CategoryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="p-4">
      <SearchBar />
      {children}
    </section>
  );
};

export default CategoryLayout;
