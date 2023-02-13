import "server-only";

import AskAi from "./AskAi";
export const revalidate = 0;

const DiscoverPage = async () => {
  return (
    <div>
      <AskAi />
    </div>
  );
};

export default DiscoverPage;
