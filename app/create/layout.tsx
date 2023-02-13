import "server-only";

import { ReactNode } from "react";

const CreateLayout = ({ children }: { children: ReactNode }) => {
  return <section className="p-4">{children}</section>;
};

export default CreateLayout;
