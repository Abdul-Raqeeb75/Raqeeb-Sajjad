import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export const metadata = {
  title: "Raqeeb Sajjad — Data Scientist | Frontend Developer | AI Enthusiast",
  description: "Developer and Data Scientist with a passion for building clean, responsive websites and leveraging AI for innovative solutions.",
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