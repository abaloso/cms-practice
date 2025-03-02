import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Transitions from "../components/Transitions";

export const metadata = {
  title: "Media Showcase",
  description:
    "A showcase of movies and games built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Transitions>{children}</Transitions>
        </main>
        <Footer />
      </body>
    </html>
  );
}
