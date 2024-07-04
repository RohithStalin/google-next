import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Google clone",
  description: "A google clone project using Next.js and Tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen ">
        {children}
        <Footer />
      </body>
    </html>
  );
}
