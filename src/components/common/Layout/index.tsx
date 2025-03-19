import { Toaster } from "@/components/ui/toaster";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (

    <div className="flex flex-col w-full min-h-screen h-auto">
      <Header />
      <main className="h-full mb-4">{children}</main>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;
