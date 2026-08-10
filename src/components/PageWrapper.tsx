import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
