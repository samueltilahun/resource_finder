// Example of a Layout component for wrapping the page
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children} 
      <Footer />
    </div>
  );
}
