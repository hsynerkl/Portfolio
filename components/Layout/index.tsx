import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Header />
      <main className="w-full lg:pl-32">{children}</main>
    </div>
  );
};

export default Layout;
