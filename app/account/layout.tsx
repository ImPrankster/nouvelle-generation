import "server-only";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className="p-4">{children}</section>;
};

export default AccountLayout;
