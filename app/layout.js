import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export const metadata = {
  title: "Raqeeb Sajjad — Data Scientist | Frontend Developer | AI Enthusiast",
  description: "Frontend developer building clean, responsive websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}