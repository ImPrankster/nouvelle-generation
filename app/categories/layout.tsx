import { ReactNode } from "react";

const CategoryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <div>Layout</div>

      {children}
    </section>
  );
};

export default CategoryLayout;
